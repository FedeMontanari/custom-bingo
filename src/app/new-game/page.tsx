"use client";

import { Input } from "@/components/ui/input";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { useEffect } from "react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { realtimeClient } from "@/server/realtime";

const newGameFormSchema = z.object({
  organizer: z.string().min(2, {
    message: "Organizer must be at least 2 characters.",
  }),
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  rows: z.coerce.number().min(1, {
    message: "Rows must be at least 1.",
  }),
  cols: z.coerce.number().min(1, {
    message: "Columns must be at least 1.",
  }),
  content: z.array(z.string()),
});

const numOptions = Array.from({ length: 10 }, (_, i) => i + 1);

export default function NewGamePage() {
  const router = useRouter();

  const createGameMutation = api.game.create.useMutation({
    onSuccess: (data) => {
      const organizer = form.getValues("organizer");
      document.cookie = `userName=${organizer}; path=/`;
      // Create the game channel on Supabase Realtime
      realtimeClient.channel(`game-${data.code}`);

      // Redirect to the game page
      router.push(`/game/${data.code}`);
    },
    onError: (error) => {
      console.error(error);
      toast({
        title: "Error creating game",
        description: "Please try again.",
        variant: "destructive",
      });
    },
  });

  const form = useForm<z.infer<typeof newGameFormSchema>>({
    resolver: zodResolver(newGameFormSchema),
    defaultValues: {
      title: "",
      rows: 1,
      cols: 1,
      content: [],
    },
  });

  function onSubmit(values: z.infer<typeof newGameFormSchema>) {
    createGameMutation.mutate({
      title: values.title,
      rows: values.rows,
      cols: values.cols,
      content: values.content,
      organizer: values.organizer,
    });
  }

  // Get the values from the form to set the content array
  const rows = useWatch({ name: "rows", control: form.control });
  const cols = useWatch({ name: "cols", control: form.control });
  const content = useWatch({ name: "content", control: form.control });

  useEffect(() => {
    const totalContent = rows * cols;
    const contentArray = Array.from(
      { length: totalContent },
      (_, index) => content[index] ?? ""
    );
    form.setValue("content", contentArray);
  }, [rows, cols]);

  return (
    <MaxWidthWrapper className="my-20 space-y-32">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Create a new game</h1>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 font-bold flex flex-col gap-4"
          >
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2">
                <h3 className="text-lg font-bold">Game Grid</h3>
                <div>
                  <div
                    className="grid gap-1"
                    style={{
                      gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
                    }}
                  >
                    {content.map((_, index) => (
                      <FormField
                        key={index}
                        control={form.control}
                        name={`content.${index}`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Textarea
                                placeholder="Enter content"
                                className="resize-none"
                                value={field.value}
                                onChange={(e) => {
                                  const newContent = [...content];
                                  newContent[index] = e.target.value;
                                  form.setValue("content", newContent);
                                }}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <h3>Game Settings</h3>
                <FormField
                  control={form.control}
                  name="organizer"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Organizer</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is the name of the organizer of the game.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Fun Bingo Game!" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is the title of the game.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="rows"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Rows</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value?.toString()}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select a number" />
                            </SelectTrigger>
                            <SelectContent>
                              {numOptions.map((option) => (
                                <SelectItem
                                  key={option}
                                  value={option.toString()}
                                >
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cols"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Columns</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value?.toString()}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select a number" />
                            </SelectTrigger>
                            <SelectContent>
                              {numOptions.map((option) => (
                                <SelectItem
                                  key={option}
                                  value={option.toString()}
                                >
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <Button
                variant="neutral"
                type="reset"
                size="lg"
                onClick={(e) => {
                  e.preventDefault();
                  form.reset();
                }}
              >
                Reset
              </Button>
              <Button
                disabled={createGameMutation.isPending}
                size="lg"
                type="submit"
              >
                {createGameMutation.isPending ? (
                  <>
                    Creating
                    <Loader2 className="w-4 h-4 animate-spin inline" />
                  </>
                ) : (
                  "Create"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </MaxWidthWrapper>
  );
}


/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model BingoGame
 * 
 */
export type BingoGame = $Result.DefaultSelection<Prisma.$BingoGamePayload>
/**
 * Model BingoCard
 * 
 */
export type BingoCard = $Result.DefaultSelection<Prisma.$BingoCardPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more BingoGames
 * const bingoGames = await prisma.bingoGame.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more BingoGames
   * const bingoGames = await prisma.bingoGame.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.bingoGame`: Exposes CRUD operations for the **BingoGame** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BingoGames
    * const bingoGames = await prisma.bingoGame.findMany()
    * ```
    */
  get bingoGame(): Prisma.BingoGameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bingoCard`: Exposes CRUD operations for the **BingoCard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BingoCards
    * const bingoCards = await prisma.bingoCard.findMany()
    * ```
    */
  get bingoCard(): Prisma.BingoCardDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    BingoGame: 'BingoGame',
    BingoCard: 'BingoCard'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "bingoGame" | "bingoCard"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      BingoGame: {
        payload: Prisma.$BingoGamePayload<ExtArgs>
        fields: Prisma.BingoGameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BingoGameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BingoGamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BingoGameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BingoGamePayload>
          }
          findFirst: {
            args: Prisma.BingoGameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BingoGamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BingoGameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BingoGamePayload>
          }
          findMany: {
            args: Prisma.BingoGameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BingoGamePayload>[]
          }
          create: {
            args: Prisma.BingoGameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BingoGamePayload>
          }
          createMany: {
            args: Prisma.BingoGameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BingoGameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BingoGamePayload>[]
          }
          delete: {
            args: Prisma.BingoGameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BingoGamePayload>
          }
          update: {
            args: Prisma.BingoGameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BingoGamePayload>
          }
          deleteMany: {
            args: Prisma.BingoGameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BingoGameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BingoGameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BingoGamePayload>[]
          }
          upsert: {
            args: Prisma.BingoGameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BingoGamePayload>
          }
          aggregate: {
            args: Prisma.BingoGameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBingoGame>
          }
          groupBy: {
            args: Prisma.BingoGameGroupByArgs<ExtArgs>
            result: $Utils.Optional<BingoGameGroupByOutputType>[]
          }
          count: {
            args: Prisma.BingoGameCountArgs<ExtArgs>
            result: $Utils.Optional<BingoGameCountAggregateOutputType> | number
          }
        }
      }
      BingoCard: {
        payload: Prisma.$BingoCardPayload<ExtArgs>
        fields: Prisma.BingoCardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BingoCardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BingoCardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BingoCardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BingoCardPayload>
          }
          findFirst: {
            args: Prisma.BingoCardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BingoCardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BingoCardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BingoCardPayload>
          }
          findMany: {
            args: Prisma.BingoCardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BingoCardPayload>[]
          }
          create: {
            args: Prisma.BingoCardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BingoCardPayload>
          }
          createMany: {
            args: Prisma.BingoCardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BingoCardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BingoCardPayload>[]
          }
          delete: {
            args: Prisma.BingoCardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BingoCardPayload>
          }
          update: {
            args: Prisma.BingoCardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BingoCardPayload>
          }
          deleteMany: {
            args: Prisma.BingoCardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BingoCardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BingoCardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BingoCardPayload>[]
          }
          upsert: {
            args: Prisma.BingoCardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BingoCardPayload>
          }
          aggregate: {
            args: Prisma.BingoCardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBingoCard>
          }
          groupBy: {
            args: Prisma.BingoCardGroupByArgs<ExtArgs>
            result: $Utils.Optional<BingoCardGroupByOutputType>[]
          }
          count: {
            args: Prisma.BingoCardCountArgs<ExtArgs>
            result: $Utils.Optional<BingoCardCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    bingoGame?: BingoGameOmit
    bingoCard?: BingoCardOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BingoGameCountOutputType
   */

  export type BingoGameCountOutputType = {
    BingoCard: number
  }

  export type BingoGameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    BingoCard?: boolean | BingoGameCountOutputTypeCountBingoCardArgs
  }

  // Custom InputTypes
  /**
   * BingoGameCountOutputType without action
   */
  export type BingoGameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BingoGameCountOutputType
     */
    select?: BingoGameCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BingoGameCountOutputType without action
   */
  export type BingoGameCountOutputTypeCountBingoCardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BingoCardWhereInput
  }


  /**
   * Models
   */

  /**
   * Model BingoGame
   */

  export type AggregateBingoGame = {
    _count: BingoGameCountAggregateOutputType | null
    _avg: BingoGameAvgAggregateOutputType | null
    _sum: BingoGameSumAggregateOutputType | null
    _min: BingoGameMinAggregateOutputType | null
    _max: BingoGameMaxAggregateOutputType | null
  }

  export type BingoGameAvgAggregateOutputType = {
    rows: number | null
    cols: number | null
  }

  export type BingoGameSumAggregateOutputType = {
    rows: number | null
    cols: number | null
  }

  export type BingoGameMinAggregateOutputType = {
    id: string | null
    code: string | null
    title: string | null
    rows: number | null
    cols: number | null
    organizer: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BingoGameMaxAggregateOutputType = {
    id: string | null
    code: string | null
    title: string | null
    rows: number | null
    cols: number | null
    organizer: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BingoGameCountAggregateOutputType = {
    id: number
    code: number
    title: number
    rows: number
    cols: number
    content: number
    organizer: number
    players: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BingoGameAvgAggregateInputType = {
    rows?: true
    cols?: true
  }

  export type BingoGameSumAggregateInputType = {
    rows?: true
    cols?: true
  }

  export type BingoGameMinAggregateInputType = {
    id?: true
    code?: true
    title?: true
    rows?: true
    cols?: true
    organizer?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BingoGameMaxAggregateInputType = {
    id?: true
    code?: true
    title?: true
    rows?: true
    cols?: true
    organizer?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BingoGameCountAggregateInputType = {
    id?: true
    code?: true
    title?: true
    rows?: true
    cols?: true
    content?: true
    organizer?: true
    players?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BingoGameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BingoGame to aggregate.
     */
    where?: BingoGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BingoGames to fetch.
     */
    orderBy?: BingoGameOrderByWithRelationInput | BingoGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BingoGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BingoGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BingoGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BingoGames
    **/
    _count?: true | BingoGameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BingoGameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BingoGameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BingoGameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BingoGameMaxAggregateInputType
  }

  export type GetBingoGameAggregateType<T extends BingoGameAggregateArgs> = {
        [P in keyof T & keyof AggregateBingoGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBingoGame[P]>
      : GetScalarType<T[P], AggregateBingoGame[P]>
  }




  export type BingoGameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BingoGameWhereInput
    orderBy?: BingoGameOrderByWithAggregationInput | BingoGameOrderByWithAggregationInput[]
    by: BingoGameScalarFieldEnum[] | BingoGameScalarFieldEnum
    having?: BingoGameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BingoGameCountAggregateInputType | true
    _avg?: BingoGameAvgAggregateInputType
    _sum?: BingoGameSumAggregateInputType
    _min?: BingoGameMinAggregateInputType
    _max?: BingoGameMaxAggregateInputType
  }

  export type BingoGameGroupByOutputType = {
    id: string
    code: string
    title: string
    rows: number
    cols: number
    content: JsonValue
    organizer: string
    players: string[]
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: BingoGameCountAggregateOutputType | null
    _avg: BingoGameAvgAggregateOutputType | null
    _sum: BingoGameSumAggregateOutputType | null
    _min: BingoGameMinAggregateOutputType | null
    _max: BingoGameMaxAggregateOutputType | null
  }

  type GetBingoGameGroupByPayload<T extends BingoGameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BingoGameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BingoGameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BingoGameGroupByOutputType[P]>
            : GetScalarType<T[P], BingoGameGroupByOutputType[P]>
        }
      >
    >


  export type BingoGameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    title?: boolean
    rows?: boolean
    cols?: boolean
    content?: boolean
    organizer?: boolean
    players?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    BingoCard?: boolean | BingoGame$BingoCardArgs<ExtArgs>
    _count?: boolean | BingoGameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bingoGame"]>

  export type BingoGameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    title?: boolean
    rows?: boolean
    cols?: boolean
    content?: boolean
    organizer?: boolean
    players?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bingoGame"]>

  export type BingoGameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    title?: boolean
    rows?: boolean
    cols?: boolean
    content?: boolean
    organizer?: boolean
    players?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bingoGame"]>

  export type BingoGameSelectScalar = {
    id?: boolean
    code?: boolean
    title?: boolean
    rows?: boolean
    cols?: boolean
    content?: boolean
    organizer?: boolean
    players?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BingoGameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "title" | "rows" | "cols" | "content" | "organizer" | "players" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["bingoGame"]>
  export type BingoGameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    BingoCard?: boolean | BingoGame$BingoCardArgs<ExtArgs>
    _count?: boolean | BingoGameCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BingoGameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BingoGameIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BingoGamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BingoGame"
    objects: {
      BingoCard: Prisma.$BingoCardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      title: string
      rows: number
      cols: number
      content: Prisma.JsonValue
      organizer: string
      players: string[]
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bingoGame"]>
    composites: {}
  }

  type BingoGameGetPayload<S extends boolean | null | undefined | BingoGameDefaultArgs> = $Result.GetResult<Prisma.$BingoGamePayload, S>

  type BingoGameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BingoGameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BingoGameCountAggregateInputType | true
    }

  export interface BingoGameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BingoGame'], meta: { name: 'BingoGame' } }
    /**
     * Find zero or one BingoGame that matches the filter.
     * @param {BingoGameFindUniqueArgs} args - Arguments to find a BingoGame
     * @example
     * // Get one BingoGame
     * const bingoGame = await prisma.bingoGame.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BingoGameFindUniqueArgs>(args: SelectSubset<T, BingoGameFindUniqueArgs<ExtArgs>>): Prisma__BingoGameClient<$Result.GetResult<Prisma.$BingoGamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BingoGame that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BingoGameFindUniqueOrThrowArgs} args - Arguments to find a BingoGame
     * @example
     * // Get one BingoGame
     * const bingoGame = await prisma.bingoGame.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BingoGameFindUniqueOrThrowArgs>(args: SelectSubset<T, BingoGameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BingoGameClient<$Result.GetResult<Prisma.$BingoGamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BingoGame that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BingoGameFindFirstArgs} args - Arguments to find a BingoGame
     * @example
     * // Get one BingoGame
     * const bingoGame = await prisma.bingoGame.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BingoGameFindFirstArgs>(args?: SelectSubset<T, BingoGameFindFirstArgs<ExtArgs>>): Prisma__BingoGameClient<$Result.GetResult<Prisma.$BingoGamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BingoGame that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BingoGameFindFirstOrThrowArgs} args - Arguments to find a BingoGame
     * @example
     * // Get one BingoGame
     * const bingoGame = await prisma.bingoGame.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BingoGameFindFirstOrThrowArgs>(args?: SelectSubset<T, BingoGameFindFirstOrThrowArgs<ExtArgs>>): Prisma__BingoGameClient<$Result.GetResult<Prisma.$BingoGamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BingoGames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BingoGameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BingoGames
     * const bingoGames = await prisma.bingoGame.findMany()
     * 
     * // Get first 10 BingoGames
     * const bingoGames = await prisma.bingoGame.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bingoGameWithIdOnly = await prisma.bingoGame.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BingoGameFindManyArgs>(args?: SelectSubset<T, BingoGameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BingoGamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BingoGame.
     * @param {BingoGameCreateArgs} args - Arguments to create a BingoGame.
     * @example
     * // Create one BingoGame
     * const BingoGame = await prisma.bingoGame.create({
     *   data: {
     *     // ... data to create a BingoGame
     *   }
     * })
     * 
     */
    create<T extends BingoGameCreateArgs>(args: SelectSubset<T, BingoGameCreateArgs<ExtArgs>>): Prisma__BingoGameClient<$Result.GetResult<Prisma.$BingoGamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BingoGames.
     * @param {BingoGameCreateManyArgs} args - Arguments to create many BingoGames.
     * @example
     * // Create many BingoGames
     * const bingoGame = await prisma.bingoGame.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BingoGameCreateManyArgs>(args?: SelectSubset<T, BingoGameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BingoGames and returns the data saved in the database.
     * @param {BingoGameCreateManyAndReturnArgs} args - Arguments to create many BingoGames.
     * @example
     * // Create many BingoGames
     * const bingoGame = await prisma.bingoGame.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BingoGames and only return the `id`
     * const bingoGameWithIdOnly = await prisma.bingoGame.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BingoGameCreateManyAndReturnArgs>(args?: SelectSubset<T, BingoGameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BingoGamePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BingoGame.
     * @param {BingoGameDeleteArgs} args - Arguments to delete one BingoGame.
     * @example
     * // Delete one BingoGame
     * const BingoGame = await prisma.bingoGame.delete({
     *   where: {
     *     // ... filter to delete one BingoGame
     *   }
     * })
     * 
     */
    delete<T extends BingoGameDeleteArgs>(args: SelectSubset<T, BingoGameDeleteArgs<ExtArgs>>): Prisma__BingoGameClient<$Result.GetResult<Prisma.$BingoGamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BingoGame.
     * @param {BingoGameUpdateArgs} args - Arguments to update one BingoGame.
     * @example
     * // Update one BingoGame
     * const bingoGame = await prisma.bingoGame.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BingoGameUpdateArgs>(args: SelectSubset<T, BingoGameUpdateArgs<ExtArgs>>): Prisma__BingoGameClient<$Result.GetResult<Prisma.$BingoGamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BingoGames.
     * @param {BingoGameDeleteManyArgs} args - Arguments to filter BingoGames to delete.
     * @example
     * // Delete a few BingoGames
     * const { count } = await prisma.bingoGame.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BingoGameDeleteManyArgs>(args?: SelectSubset<T, BingoGameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BingoGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BingoGameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BingoGames
     * const bingoGame = await prisma.bingoGame.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BingoGameUpdateManyArgs>(args: SelectSubset<T, BingoGameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BingoGames and returns the data updated in the database.
     * @param {BingoGameUpdateManyAndReturnArgs} args - Arguments to update many BingoGames.
     * @example
     * // Update many BingoGames
     * const bingoGame = await prisma.bingoGame.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BingoGames and only return the `id`
     * const bingoGameWithIdOnly = await prisma.bingoGame.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BingoGameUpdateManyAndReturnArgs>(args: SelectSubset<T, BingoGameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BingoGamePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BingoGame.
     * @param {BingoGameUpsertArgs} args - Arguments to update or create a BingoGame.
     * @example
     * // Update or create a BingoGame
     * const bingoGame = await prisma.bingoGame.upsert({
     *   create: {
     *     // ... data to create a BingoGame
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BingoGame we want to update
     *   }
     * })
     */
    upsert<T extends BingoGameUpsertArgs>(args: SelectSubset<T, BingoGameUpsertArgs<ExtArgs>>): Prisma__BingoGameClient<$Result.GetResult<Prisma.$BingoGamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BingoGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BingoGameCountArgs} args - Arguments to filter BingoGames to count.
     * @example
     * // Count the number of BingoGames
     * const count = await prisma.bingoGame.count({
     *   where: {
     *     // ... the filter for the BingoGames we want to count
     *   }
     * })
    **/
    count<T extends BingoGameCountArgs>(
      args?: Subset<T, BingoGameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BingoGameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BingoGame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BingoGameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BingoGameAggregateArgs>(args: Subset<T, BingoGameAggregateArgs>): Prisma.PrismaPromise<GetBingoGameAggregateType<T>>

    /**
     * Group by BingoGame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BingoGameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BingoGameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BingoGameGroupByArgs['orderBy'] }
        : { orderBy?: BingoGameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BingoGameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBingoGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BingoGame model
   */
  readonly fields: BingoGameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BingoGame.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BingoGameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    BingoCard<T extends BingoGame$BingoCardArgs<ExtArgs> = {}>(args?: Subset<T, BingoGame$BingoCardArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BingoCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BingoGame model
   */ 
  interface BingoGameFieldRefs {
    readonly id: FieldRef<"BingoGame", 'String'>
    readonly code: FieldRef<"BingoGame", 'String'>
    readonly title: FieldRef<"BingoGame", 'String'>
    readonly rows: FieldRef<"BingoGame", 'Int'>
    readonly cols: FieldRef<"BingoGame", 'Int'>
    readonly content: FieldRef<"BingoGame", 'Json'>
    readonly organizer: FieldRef<"BingoGame", 'String'>
    readonly players: FieldRef<"BingoGame", 'String[]'>
    readonly isActive: FieldRef<"BingoGame", 'Boolean'>
    readonly createdAt: FieldRef<"BingoGame", 'DateTime'>
    readonly updatedAt: FieldRef<"BingoGame", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BingoGame findUnique
   */
  export type BingoGameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BingoGame
     */
    select?: BingoGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BingoGame
     */
    omit?: BingoGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BingoGameInclude<ExtArgs> | null
    /**
     * Filter, which BingoGame to fetch.
     */
    where: BingoGameWhereUniqueInput
  }

  /**
   * BingoGame findUniqueOrThrow
   */
  export type BingoGameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BingoGame
     */
    select?: BingoGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BingoGame
     */
    omit?: BingoGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BingoGameInclude<ExtArgs> | null
    /**
     * Filter, which BingoGame to fetch.
     */
    where: BingoGameWhereUniqueInput
  }

  /**
   * BingoGame findFirst
   */
  export type BingoGameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BingoGame
     */
    select?: BingoGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BingoGame
     */
    omit?: BingoGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BingoGameInclude<ExtArgs> | null
    /**
     * Filter, which BingoGame to fetch.
     */
    where?: BingoGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BingoGames to fetch.
     */
    orderBy?: BingoGameOrderByWithRelationInput | BingoGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BingoGames.
     */
    cursor?: BingoGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BingoGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BingoGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BingoGames.
     */
    distinct?: BingoGameScalarFieldEnum | BingoGameScalarFieldEnum[]
  }

  /**
   * BingoGame findFirstOrThrow
   */
  export type BingoGameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BingoGame
     */
    select?: BingoGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BingoGame
     */
    omit?: BingoGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BingoGameInclude<ExtArgs> | null
    /**
     * Filter, which BingoGame to fetch.
     */
    where?: BingoGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BingoGames to fetch.
     */
    orderBy?: BingoGameOrderByWithRelationInput | BingoGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BingoGames.
     */
    cursor?: BingoGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BingoGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BingoGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BingoGames.
     */
    distinct?: BingoGameScalarFieldEnum | BingoGameScalarFieldEnum[]
  }

  /**
   * BingoGame findMany
   */
  export type BingoGameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BingoGame
     */
    select?: BingoGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BingoGame
     */
    omit?: BingoGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BingoGameInclude<ExtArgs> | null
    /**
     * Filter, which BingoGames to fetch.
     */
    where?: BingoGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BingoGames to fetch.
     */
    orderBy?: BingoGameOrderByWithRelationInput | BingoGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BingoGames.
     */
    cursor?: BingoGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BingoGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BingoGames.
     */
    skip?: number
    distinct?: BingoGameScalarFieldEnum | BingoGameScalarFieldEnum[]
  }

  /**
   * BingoGame create
   */
  export type BingoGameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BingoGame
     */
    select?: BingoGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BingoGame
     */
    omit?: BingoGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BingoGameInclude<ExtArgs> | null
    /**
     * The data needed to create a BingoGame.
     */
    data: XOR<BingoGameCreateInput, BingoGameUncheckedCreateInput>
  }

  /**
   * BingoGame createMany
   */
  export type BingoGameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BingoGames.
     */
    data: BingoGameCreateManyInput | BingoGameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BingoGame createManyAndReturn
   */
  export type BingoGameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BingoGame
     */
    select?: BingoGameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BingoGame
     */
    omit?: BingoGameOmit<ExtArgs> | null
    /**
     * The data used to create many BingoGames.
     */
    data: BingoGameCreateManyInput | BingoGameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BingoGame update
   */
  export type BingoGameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BingoGame
     */
    select?: BingoGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BingoGame
     */
    omit?: BingoGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BingoGameInclude<ExtArgs> | null
    /**
     * The data needed to update a BingoGame.
     */
    data: XOR<BingoGameUpdateInput, BingoGameUncheckedUpdateInput>
    /**
     * Choose, which BingoGame to update.
     */
    where: BingoGameWhereUniqueInput
  }

  /**
   * BingoGame updateMany
   */
  export type BingoGameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BingoGames.
     */
    data: XOR<BingoGameUpdateManyMutationInput, BingoGameUncheckedUpdateManyInput>
    /**
     * Filter which BingoGames to update
     */
    where?: BingoGameWhereInput
    /**
     * Limit how many BingoGames to update.
     */
    limit?: number
  }

  /**
   * BingoGame updateManyAndReturn
   */
  export type BingoGameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BingoGame
     */
    select?: BingoGameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BingoGame
     */
    omit?: BingoGameOmit<ExtArgs> | null
    /**
     * The data used to update BingoGames.
     */
    data: XOR<BingoGameUpdateManyMutationInput, BingoGameUncheckedUpdateManyInput>
    /**
     * Filter which BingoGames to update
     */
    where?: BingoGameWhereInput
    /**
     * Limit how many BingoGames to update.
     */
    limit?: number
  }

  /**
   * BingoGame upsert
   */
  export type BingoGameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BingoGame
     */
    select?: BingoGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BingoGame
     */
    omit?: BingoGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BingoGameInclude<ExtArgs> | null
    /**
     * The filter to search for the BingoGame to update in case it exists.
     */
    where: BingoGameWhereUniqueInput
    /**
     * In case the BingoGame found by the `where` argument doesn't exist, create a new BingoGame with this data.
     */
    create: XOR<BingoGameCreateInput, BingoGameUncheckedCreateInput>
    /**
     * In case the BingoGame was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BingoGameUpdateInput, BingoGameUncheckedUpdateInput>
  }

  /**
   * BingoGame delete
   */
  export type BingoGameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BingoGame
     */
    select?: BingoGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BingoGame
     */
    omit?: BingoGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BingoGameInclude<ExtArgs> | null
    /**
     * Filter which BingoGame to delete.
     */
    where: BingoGameWhereUniqueInput
  }

  /**
   * BingoGame deleteMany
   */
  export type BingoGameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BingoGames to delete
     */
    where?: BingoGameWhereInput
    /**
     * Limit how many BingoGames to delete.
     */
    limit?: number
  }

  /**
   * BingoGame.BingoCard
   */
  export type BingoGame$BingoCardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BingoCard
     */
    select?: BingoCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BingoCard
     */
    omit?: BingoCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BingoCardInclude<ExtArgs> | null
    where?: BingoCardWhereInput
    orderBy?: BingoCardOrderByWithRelationInput | BingoCardOrderByWithRelationInput[]
    cursor?: BingoCardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BingoCardScalarFieldEnum | BingoCardScalarFieldEnum[]
  }

  /**
   * BingoGame without action
   */
  export type BingoGameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BingoGame
     */
    select?: BingoGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BingoGame
     */
    omit?: BingoGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BingoGameInclude<ExtArgs> | null
  }


  /**
   * Model BingoCard
   */

  export type AggregateBingoCard = {
    _count: BingoCardCountAggregateOutputType | null
    _min: BingoCardMinAggregateOutputType | null
    _max: BingoCardMaxAggregateOutputType | null
  }

  export type BingoCardMinAggregateOutputType = {
    id: string | null
    gameId: string | null
    hasWon: boolean | null
    wonAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BingoCardMaxAggregateOutputType = {
    id: string | null
    gameId: string | null
    hasWon: boolean | null
    wonAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BingoCardCountAggregateOutputType = {
    id: number
    gameId: number
    cardState: number
    hasWon: number
    wonAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BingoCardMinAggregateInputType = {
    id?: true
    gameId?: true
    hasWon?: true
    wonAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BingoCardMaxAggregateInputType = {
    id?: true
    gameId?: true
    hasWon?: true
    wonAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BingoCardCountAggregateInputType = {
    id?: true
    gameId?: true
    cardState?: true
    hasWon?: true
    wonAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BingoCardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BingoCard to aggregate.
     */
    where?: BingoCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BingoCards to fetch.
     */
    orderBy?: BingoCardOrderByWithRelationInput | BingoCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BingoCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BingoCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BingoCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BingoCards
    **/
    _count?: true | BingoCardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BingoCardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BingoCardMaxAggregateInputType
  }

  export type GetBingoCardAggregateType<T extends BingoCardAggregateArgs> = {
        [P in keyof T & keyof AggregateBingoCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBingoCard[P]>
      : GetScalarType<T[P], AggregateBingoCard[P]>
  }




  export type BingoCardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BingoCardWhereInput
    orderBy?: BingoCardOrderByWithAggregationInput | BingoCardOrderByWithAggregationInput[]
    by: BingoCardScalarFieldEnum[] | BingoCardScalarFieldEnum
    having?: BingoCardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BingoCardCountAggregateInputType | true
    _min?: BingoCardMinAggregateInputType
    _max?: BingoCardMaxAggregateInputType
  }

  export type BingoCardGroupByOutputType = {
    id: string
    gameId: string
    cardState: JsonValue
    hasWon: boolean
    wonAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: BingoCardCountAggregateOutputType | null
    _min: BingoCardMinAggregateOutputType | null
    _max: BingoCardMaxAggregateOutputType | null
  }

  type GetBingoCardGroupByPayload<T extends BingoCardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BingoCardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BingoCardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BingoCardGroupByOutputType[P]>
            : GetScalarType<T[P], BingoCardGroupByOutputType[P]>
        }
      >
    >


  export type BingoCardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    cardState?: boolean
    hasWon?: boolean
    wonAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    game?: boolean | BingoGameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bingoCard"]>

  export type BingoCardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    cardState?: boolean
    hasWon?: boolean
    wonAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    game?: boolean | BingoGameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bingoCard"]>

  export type BingoCardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    cardState?: boolean
    hasWon?: boolean
    wonAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    game?: boolean | BingoGameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bingoCard"]>

  export type BingoCardSelectScalar = {
    id?: boolean
    gameId?: boolean
    cardState?: boolean
    hasWon?: boolean
    wonAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BingoCardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gameId" | "cardState" | "hasWon" | "wonAt" | "createdAt" | "updatedAt", ExtArgs["result"]["bingoCard"]>
  export type BingoCardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | BingoGameDefaultArgs<ExtArgs>
  }
  export type BingoCardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | BingoGameDefaultArgs<ExtArgs>
  }
  export type BingoCardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | BingoGameDefaultArgs<ExtArgs>
  }

  export type $BingoCardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BingoCard"
    objects: {
      game: Prisma.$BingoGamePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gameId: string
      cardState: Prisma.JsonValue
      hasWon: boolean
      wonAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bingoCard"]>
    composites: {}
  }

  type BingoCardGetPayload<S extends boolean | null | undefined | BingoCardDefaultArgs> = $Result.GetResult<Prisma.$BingoCardPayload, S>

  type BingoCardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BingoCardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BingoCardCountAggregateInputType | true
    }

  export interface BingoCardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BingoCard'], meta: { name: 'BingoCard' } }
    /**
     * Find zero or one BingoCard that matches the filter.
     * @param {BingoCardFindUniqueArgs} args - Arguments to find a BingoCard
     * @example
     * // Get one BingoCard
     * const bingoCard = await prisma.bingoCard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BingoCardFindUniqueArgs>(args: SelectSubset<T, BingoCardFindUniqueArgs<ExtArgs>>): Prisma__BingoCardClient<$Result.GetResult<Prisma.$BingoCardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BingoCard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BingoCardFindUniqueOrThrowArgs} args - Arguments to find a BingoCard
     * @example
     * // Get one BingoCard
     * const bingoCard = await prisma.bingoCard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BingoCardFindUniqueOrThrowArgs>(args: SelectSubset<T, BingoCardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BingoCardClient<$Result.GetResult<Prisma.$BingoCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BingoCard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BingoCardFindFirstArgs} args - Arguments to find a BingoCard
     * @example
     * // Get one BingoCard
     * const bingoCard = await prisma.bingoCard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BingoCardFindFirstArgs>(args?: SelectSubset<T, BingoCardFindFirstArgs<ExtArgs>>): Prisma__BingoCardClient<$Result.GetResult<Prisma.$BingoCardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BingoCard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BingoCardFindFirstOrThrowArgs} args - Arguments to find a BingoCard
     * @example
     * // Get one BingoCard
     * const bingoCard = await prisma.bingoCard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BingoCardFindFirstOrThrowArgs>(args?: SelectSubset<T, BingoCardFindFirstOrThrowArgs<ExtArgs>>): Prisma__BingoCardClient<$Result.GetResult<Prisma.$BingoCardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BingoCards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BingoCardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BingoCards
     * const bingoCards = await prisma.bingoCard.findMany()
     * 
     * // Get first 10 BingoCards
     * const bingoCards = await prisma.bingoCard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bingoCardWithIdOnly = await prisma.bingoCard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BingoCardFindManyArgs>(args?: SelectSubset<T, BingoCardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BingoCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BingoCard.
     * @param {BingoCardCreateArgs} args - Arguments to create a BingoCard.
     * @example
     * // Create one BingoCard
     * const BingoCard = await prisma.bingoCard.create({
     *   data: {
     *     // ... data to create a BingoCard
     *   }
     * })
     * 
     */
    create<T extends BingoCardCreateArgs>(args: SelectSubset<T, BingoCardCreateArgs<ExtArgs>>): Prisma__BingoCardClient<$Result.GetResult<Prisma.$BingoCardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BingoCards.
     * @param {BingoCardCreateManyArgs} args - Arguments to create many BingoCards.
     * @example
     * // Create many BingoCards
     * const bingoCard = await prisma.bingoCard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BingoCardCreateManyArgs>(args?: SelectSubset<T, BingoCardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BingoCards and returns the data saved in the database.
     * @param {BingoCardCreateManyAndReturnArgs} args - Arguments to create many BingoCards.
     * @example
     * // Create many BingoCards
     * const bingoCard = await prisma.bingoCard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BingoCards and only return the `id`
     * const bingoCardWithIdOnly = await prisma.bingoCard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BingoCardCreateManyAndReturnArgs>(args?: SelectSubset<T, BingoCardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BingoCardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BingoCard.
     * @param {BingoCardDeleteArgs} args - Arguments to delete one BingoCard.
     * @example
     * // Delete one BingoCard
     * const BingoCard = await prisma.bingoCard.delete({
     *   where: {
     *     // ... filter to delete one BingoCard
     *   }
     * })
     * 
     */
    delete<T extends BingoCardDeleteArgs>(args: SelectSubset<T, BingoCardDeleteArgs<ExtArgs>>): Prisma__BingoCardClient<$Result.GetResult<Prisma.$BingoCardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BingoCard.
     * @param {BingoCardUpdateArgs} args - Arguments to update one BingoCard.
     * @example
     * // Update one BingoCard
     * const bingoCard = await prisma.bingoCard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BingoCardUpdateArgs>(args: SelectSubset<T, BingoCardUpdateArgs<ExtArgs>>): Prisma__BingoCardClient<$Result.GetResult<Prisma.$BingoCardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BingoCards.
     * @param {BingoCardDeleteManyArgs} args - Arguments to filter BingoCards to delete.
     * @example
     * // Delete a few BingoCards
     * const { count } = await prisma.bingoCard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BingoCardDeleteManyArgs>(args?: SelectSubset<T, BingoCardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BingoCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BingoCardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BingoCards
     * const bingoCard = await prisma.bingoCard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BingoCardUpdateManyArgs>(args: SelectSubset<T, BingoCardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BingoCards and returns the data updated in the database.
     * @param {BingoCardUpdateManyAndReturnArgs} args - Arguments to update many BingoCards.
     * @example
     * // Update many BingoCards
     * const bingoCard = await prisma.bingoCard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BingoCards and only return the `id`
     * const bingoCardWithIdOnly = await prisma.bingoCard.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BingoCardUpdateManyAndReturnArgs>(args: SelectSubset<T, BingoCardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BingoCardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BingoCard.
     * @param {BingoCardUpsertArgs} args - Arguments to update or create a BingoCard.
     * @example
     * // Update or create a BingoCard
     * const bingoCard = await prisma.bingoCard.upsert({
     *   create: {
     *     // ... data to create a BingoCard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BingoCard we want to update
     *   }
     * })
     */
    upsert<T extends BingoCardUpsertArgs>(args: SelectSubset<T, BingoCardUpsertArgs<ExtArgs>>): Prisma__BingoCardClient<$Result.GetResult<Prisma.$BingoCardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BingoCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BingoCardCountArgs} args - Arguments to filter BingoCards to count.
     * @example
     * // Count the number of BingoCards
     * const count = await prisma.bingoCard.count({
     *   where: {
     *     // ... the filter for the BingoCards we want to count
     *   }
     * })
    **/
    count<T extends BingoCardCountArgs>(
      args?: Subset<T, BingoCardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BingoCardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BingoCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BingoCardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BingoCardAggregateArgs>(args: Subset<T, BingoCardAggregateArgs>): Prisma.PrismaPromise<GetBingoCardAggregateType<T>>

    /**
     * Group by BingoCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BingoCardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BingoCardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BingoCardGroupByArgs['orderBy'] }
        : { orderBy?: BingoCardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BingoCardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBingoCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BingoCard model
   */
  readonly fields: BingoCardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BingoCard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BingoCardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends BingoGameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BingoGameDefaultArgs<ExtArgs>>): Prisma__BingoGameClient<$Result.GetResult<Prisma.$BingoGamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BingoCard model
   */ 
  interface BingoCardFieldRefs {
    readonly id: FieldRef<"BingoCard", 'String'>
    readonly gameId: FieldRef<"BingoCard", 'String'>
    readonly cardState: FieldRef<"BingoCard", 'Json'>
    readonly hasWon: FieldRef<"BingoCard", 'Boolean'>
    readonly wonAt: FieldRef<"BingoCard", 'DateTime'>
    readonly createdAt: FieldRef<"BingoCard", 'DateTime'>
    readonly updatedAt: FieldRef<"BingoCard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BingoCard findUnique
   */
  export type BingoCardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BingoCard
     */
    select?: BingoCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BingoCard
     */
    omit?: BingoCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BingoCardInclude<ExtArgs> | null
    /**
     * Filter, which BingoCard to fetch.
     */
    where: BingoCardWhereUniqueInput
  }

  /**
   * BingoCard findUniqueOrThrow
   */
  export type BingoCardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BingoCard
     */
    select?: BingoCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BingoCard
     */
    omit?: BingoCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BingoCardInclude<ExtArgs> | null
    /**
     * Filter, which BingoCard to fetch.
     */
    where: BingoCardWhereUniqueInput
  }

  /**
   * BingoCard findFirst
   */
  export type BingoCardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BingoCard
     */
    select?: BingoCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BingoCard
     */
    omit?: BingoCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BingoCardInclude<ExtArgs> | null
    /**
     * Filter, which BingoCard to fetch.
     */
    where?: BingoCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BingoCards to fetch.
     */
    orderBy?: BingoCardOrderByWithRelationInput | BingoCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BingoCards.
     */
    cursor?: BingoCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BingoCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BingoCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BingoCards.
     */
    distinct?: BingoCardScalarFieldEnum | BingoCardScalarFieldEnum[]
  }

  /**
   * BingoCard findFirstOrThrow
   */
  export type BingoCardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BingoCard
     */
    select?: BingoCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BingoCard
     */
    omit?: BingoCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BingoCardInclude<ExtArgs> | null
    /**
     * Filter, which BingoCard to fetch.
     */
    where?: BingoCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BingoCards to fetch.
     */
    orderBy?: BingoCardOrderByWithRelationInput | BingoCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BingoCards.
     */
    cursor?: BingoCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BingoCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BingoCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BingoCards.
     */
    distinct?: BingoCardScalarFieldEnum | BingoCardScalarFieldEnum[]
  }

  /**
   * BingoCard findMany
   */
  export type BingoCardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BingoCard
     */
    select?: BingoCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BingoCard
     */
    omit?: BingoCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BingoCardInclude<ExtArgs> | null
    /**
     * Filter, which BingoCards to fetch.
     */
    where?: BingoCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BingoCards to fetch.
     */
    orderBy?: BingoCardOrderByWithRelationInput | BingoCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BingoCards.
     */
    cursor?: BingoCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BingoCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BingoCards.
     */
    skip?: number
    distinct?: BingoCardScalarFieldEnum | BingoCardScalarFieldEnum[]
  }

  /**
   * BingoCard create
   */
  export type BingoCardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BingoCard
     */
    select?: BingoCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BingoCard
     */
    omit?: BingoCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BingoCardInclude<ExtArgs> | null
    /**
     * The data needed to create a BingoCard.
     */
    data: XOR<BingoCardCreateInput, BingoCardUncheckedCreateInput>
  }

  /**
   * BingoCard createMany
   */
  export type BingoCardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BingoCards.
     */
    data: BingoCardCreateManyInput | BingoCardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BingoCard createManyAndReturn
   */
  export type BingoCardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BingoCard
     */
    select?: BingoCardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BingoCard
     */
    omit?: BingoCardOmit<ExtArgs> | null
    /**
     * The data used to create many BingoCards.
     */
    data: BingoCardCreateManyInput | BingoCardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BingoCardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BingoCard update
   */
  export type BingoCardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BingoCard
     */
    select?: BingoCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BingoCard
     */
    omit?: BingoCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BingoCardInclude<ExtArgs> | null
    /**
     * The data needed to update a BingoCard.
     */
    data: XOR<BingoCardUpdateInput, BingoCardUncheckedUpdateInput>
    /**
     * Choose, which BingoCard to update.
     */
    where: BingoCardWhereUniqueInput
  }

  /**
   * BingoCard updateMany
   */
  export type BingoCardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BingoCards.
     */
    data: XOR<BingoCardUpdateManyMutationInput, BingoCardUncheckedUpdateManyInput>
    /**
     * Filter which BingoCards to update
     */
    where?: BingoCardWhereInput
    /**
     * Limit how many BingoCards to update.
     */
    limit?: number
  }

  /**
   * BingoCard updateManyAndReturn
   */
  export type BingoCardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BingoCard
     */
    select?: BingoCardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BingoCard
     */
    omit?: BingoCardOmit<ExtArgs> | null
    /**
     * The data used to update BingoCards.
     */
    data: XOR<BingoCardUpdateManyMutationInput, BingoCardUncheckedUpdateManyInput>
    /**
     * Filter which BingoCards to update
     */
    where?: BingoCardWhereInput
    /**
     * Limit how many BingoCards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BingoCardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BingoCard upsert
   */
  export type BingoCardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BingoCard
     */
    select?: BingoCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BingoCard
     */
    omit?: BingoCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BingoCardInclude<ExtArgs> | null
    /**
     * The filter to search for the BingoCard to update in case it exists.
     */
    where: BingoCardWhereUniqueInput
    /**
     * In case the BingoCard found by the `where` argument doesn't exist, create a new BingoCard with this data.
     */
    create: XOR<BingoCardCreateInput, BingoCardUncheckedCreateInput>
    /**
     * In case the BingoCard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BingoCardUpdateInput, BingoCardUncheckedUpdateInput>
  }

  /**
   * BingoCard delete
   */
  export type BingoCardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BingoCard
     */
    select?: BingoCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BingoCard
     */
    omit?: BingoCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BingoCardInclude<ExtArgs> | null
    /**
     * Filter which BingoCard to delete.
     */
    where: BingoCardWhereUniqueInput
  }

  /**
   * BingoCard deleteMany
   */
  export type BingoCardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BingoCards to delete
     */
    where?: BingoCardWhereInput
    /**
     * Limit how many BingoCards to delete.
     */
    limit?: number
  }

  /**
   * BingoCard without action
   */
  export type BingoCardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BingoCard
     */
    select?: BingoCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BingoCard
     */
    omit?: BingoCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BingoCardInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BingoGameScalarFieldEnum: {
    id: 'id',
    code: 'code',
    title: 'title',
    rows: 'rows',
    cols: 'cols',
    content: 'content',
    organizer: 'organizer',
    players: 'players',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BingoGameScalarFieldEnum = (typeof BingoGameScalarFieldEnum)[keyof typeof BingoGameScalarFieldEnum]


  export const BingoCardScalarFieldEnum: {
    id: 'id',
    gameId: 'gameId',
    cardState: 'cardState',
    hasWon: 'hasWon',
    wonAt: 'wonAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BingoCardScalarFieldEnum = (typeof BingoCardScalarFieldEnum)[keyof typeof BingoCardScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type BingoGameWhereInput = {
    AND?: BingoGameWhereInput | BingoGameWhereInput[]
    OR?: BingoGameWhereInput[]
    NOT?: BingoGameWhereInput | BingoGameWhereInput[]
    id?: StringFilter<"BingoGame"> | string
    code?: StringFilter<"BingoGame"> | string
    title?: StringFilter<"BingoGame"> | string
    rows?: IntFilter<"BingoGame"> | number
    cols?: IntFilter<"BingoGame"> | number
    content?: JsonFilter<"BingoGame">
    organizer?: StringFilter<"BingoGame"> | string
    players?: StringNullableListFilter<"BingoGame">
    isActive?: BoolFilter<"BingoGame"> | boolean
    createdAt?: DateTimeFilter<"BingoGame"> | Date | string
    updatedAt?: DateTimeFilter<"BingoGame"> | Date | string
    BingoCard?: BingoCardListRelationFilter
  }

  export type BingoGameOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    rows?: SortOrder
    cols?: SortOrder
    content?: SortOrder
    organizer?: SortOrder
    players?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    BingoCard?: BingoCardOrderByRelationAggregateInput
  }

  export type BingoGameWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: BingoGameWhereInput | BingoGameWhereInput[]
    OR?: BingoGameWhereInput[]
    NOT?: BingoGameWhereInput | BingoGameWhereInput[]
    title?: StringFilter<"BingoGame"> | string
    rows?: IntFilter<"BingoGame"> | number
    cols?: IntFilter<"BingoGame"> | number
    content?: JsonFilter<"BingoGame">
    organizer?: StringFilter<"BingoGame"> | string
    players?: StringNullableListFilter<"BingoGame">
    isActive?: BoolFilter<"BingoGame"> | boolean
    createdAt?: DateTimeFilter<"BingoGame"> | Date | string
    updatedAt?: DateTimeFilter<"BingoGame"> | Date | string
    BingoCard?: BingoCardListRelationFilter
  }, "id" | "code">

  export type BingoGameOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    rows?: SortOrder
    cols?: SortOrder
    content?: SortOrder
    organizer?: SortOrder
    players?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BingoGameCountOrderByAggregateInput
    _avg?: BingoGameAvgOrderByAggregateInput
    _max?: BingoGameMaxOrderByAggregateInput
    _min?: BingoGameMinOrderByAggregateInput
    _sum?: BingoGameSumOrderByAggregateInput
  }

  export type BingoGameScalarWhereWithAggregatesInput = {
    AND?: BingoGameScalarWhereWithAggregatesInput | BingoGameScalarWhereWithAggregatesInput[]
    OR?: BingoGameScalarWhereWithAggregatesInput[]
    NOT?: BingoGameScalarWhereWithAggregatesInput | BingoGameScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BingoGame"> | string
    code?: StringWithAggregatesFilter<"BingoGame"> | string
    title?: StringWithAggregatesFilter<"BingoGame"> | string
    rows?: IntWithAggregatesFilter<"BingoGame"> | number
    cols?: IntWithAggregatesFilter<"BingoGame"> | number
    content?: JsonWithAggregatesFilter<"BingoGame">
    organizer?: StringWithAggregatesFilter<"BingoGame"> | string
    players?: StringNullableListFilter<"BingoGame">
    isActive?: BoolWithAggregatesFilter<"BingoGame"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"BingoGame"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BingoGame"> | Date | string
  }

  export type BingoCardWhereInput = {
    AND?: BingoCardWhereInput | BingoCardWhereInput[]
    OR?: BingoCardWhereInput[]
    NOT?: BingoCardWhereInput | BingoCardWhereInput[]
    id?: StringFilter<"BingoCard"> | string
    gameId?: StringFilter<"BingoCard"> | string
    cardState?: JsonFilter<"BingoCard">
    hasWon?: BoolFilter<"BingoCard"> | boolean
    wonAt?: DateTimeNullableFilter<"BingoCard"> | Date | string | null
    createdAt?: DateTimeFilter<"BingoCard"> | Date | string
    updatedAt?: DateTimeFilter<"BingoCard"> | Date | string
    game?: XOR<BingoGameScalarRelationFilter, BingoGameWhereInput>
  }

  export type BingoCardOrderByWithRelationInput = {
    id?: SortOrder
    gameId?: SortOrder
    cardState?: SortOrder
    hasWon?: SortOrder
    wonAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    game?: BingoGameOrderByWithRelationInput
  }

  export type BingoCardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BingoCardWhereInput | BingoCardWhereInput[]
    OR?: BingoCardWhereInput[]
    NOT?: BingoCardWhereInput | BingoCardWhereInput[]
    gameId?: StringFilter<"BingoCard"> | string
    cardState?: JsonFilter<"BingoCard">
    hasWon?: BoolFilter<"BingoCard"> | boolean
    wonAt?: DateTimeNullableFilter<"BingoCard"> | Date | string | null
    createdAt?: DateTimeFilter<"BingoCard"> | Date | string
    updatedAt?: DateTimeFilter<"BingoCard"> | Date | string
    game?: XOR<BingoGameScalarRelationFilter, BingoGameWhereInput>
  }, "id">

  export type BingoCardOrderByWithAggregationInput = {
    id?: SortOrder
    gameId?: SortOrder
    cardState?: SortOrder
    hasWon?: SortOrder
    wonAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BingoCardCountOrderByAggregateInput
    _max?: BingoCardMaxOrderByAggregateInput
    _min?: BingoCardMinOrderByAggregateInput
  }

  export type BingoCardScalarWhereWithAggregatesInput = {
    AND?: BingoCardScalarWhereWithAggregatesInput | BingoCardScalarWhereWithAggregatesInput[]
    OR?: BingoCardScalarWhereWithAggregatesInput[]
    NOT?: BingoCardScalarWhereWithAggregatesInput | BingoCardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BingoCard"> | string
    gameId?: StringWithAggregatesFilter<"BingoCard"> | string
    cardState?: JsonWithAggregatesFilter<"BingoCard">
    hasWon?: BoolWithAggregatesFilter<"BingoCard"> | boolean
    wonAt?: DateTimeNullableWithAggregatesFilter<"BingoCard"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BingoCard"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BingoCard"> | Date | string
  }

  export type BingoGameCreateInput = {
    id?: string
    code: string
    title: string
    rows: number
    cols: number
    content: JsonNullValueInput | InputJsonValue
    organizer: string
    players?: BingoGameCreateplayersInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    BingoCard?: BingoCardCreateNestedManyWithoutGameInput
  }

  export type BingoGameUncheckedCreateInput = {
    id?: string
    code: string
    title: string
    rows: number
    cols: number
    content: JsonNullValueInput | InputJsonValue
    organizer: string
    players?: BingoGameCreateplayersInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    BingoCard?: BingoCardUncheckedCreateNestedManyWithoutGameInput
  }

  export type BingoGameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    rows?: IntFieldUpdateOperationsInput | number
    cols?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    organizer?: StringFieldUpdateOperationsInput | string
    players?: BingoGameUpdateplayersInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BingoCard?: BingoCardUpdateManyWithoutGameNestedInput
  }

  export type BingoGameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    rows?: IntFieldUpdateOperationsInput | number
    cols?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    organizer?: StringFieldUpdateOperationsInput | string
    players?: BingoGameUpdateplayersInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BingoCard?: BingoCardUncheckedUpdateManyWithoutGameNestedInput
  }

  export type BingoGameCreateManyInput = {
    id?: string
    code: string
    title: string
    rows: number
    cols: number
    content: JsonNullValueInput | InputJsonValue
    organizer: string
    players?: BingoGameCreateplayersInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BingoGameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    rows?: IntFieldUpdateOperationsInput | number
    cols?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    organizer?: StringFieldUpdateOperationsInput | string
    players?: BingoGameUpdateplayersInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BingoGameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    rows?: IntFieldUpdateOperationsInput | number
    cols?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    organizer?: StringFieldUpdateOperationsInput | string
    players?: BingoGameUpdateplayersInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BingoCardCreateInput = {
    id?: string
    cardState: JsonNullValueInput | InputJsonValue
    hasWon?: boolean
    wonAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    game: BingoGameCreateNestedOneWithoutBingoCardInput
  }

  export type BingoCardUncheckedCreateInput = {
    id?: string
    gameId: string
    cardState: JsonNullValueInput | InputJsonValue
    hasWon?: boolean
    wonAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BingoCardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardState?: JsonNullValueInput | InputJsonValue
    hasWon?: BoolFieldUpdateOperationsInput | boolean
    wonAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: BingoGameUpdateOneRequiredWithoutBingoCardNestedInput
  }

  export type BingoCardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    cardState?: JsonNullValueInput | InputJsonValue
    hasWon?: BoolFieldUpdateOperationsInput | boolean
    wonAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BingoCardCreateManyInput = {
    id?: string
    gameId: string
    cardState: JsonNullValueInput | InputJsonValue
    hasWon?: boolean
    wonAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BingoCardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardState?: JsonNullValueInput | InputJsonValue
    hasWon?: BoolFieldUpdateOperationsInput | boolean
    wonAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BingoCardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    cardState?: JsonNullValueInput | InputJsonValue
    hasWon?: BoolFieldUpdateOperationsInput | boolean
    wonAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BingoCardListRelationFilter = {
    every?: BingoCardWhereInput
    some?: BingoCardWhereInput
    none?: BingoCardWhereInput
  }

  export type BingoCardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BingoGameCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    rows?: SortOrder
    cols?: SortOrder
    content?: SortOrder
    organizer?: SortOrder
    players?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BingoGameAvgOrderByAggregateInput = {
    rows?: SortOrder
    cols?: SortOrder
  }

  export type BingoGameMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    rows?: SortOrder
    cols?: SortOrder
    organizer?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BingoGameMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    rows?: SortOrder
    cols?: SortOrder
    organizer?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BingoGameSumOrderByAggregateInput = {
    rows?: SortOrder
    cols?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BingoGameScalarRelationFilter = {
    is?: BingoGameWhereInput
    isNot?: BingoGameWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BingoCardCountOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    cardState?: SortOrder
    hasWon?: SortOrder
    wonAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BingoCardMaxOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    hasWon?: SortOrder
    wonAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BingoCardMinOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    hasWon?: SortOrder
    wonAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BingoGameCreateplayersInput = {
    set: string[]
  }

  export type BingoCardCreateNestedManyWithoutGameInput = {
    create?: XOR<BingoCardCreateWithoutGameInput, BingoCardUncheckedCreateWithoutGameInput> | BingoCardCreateWithoutGameInput[] | BingoCardUncheckedCreateWithoutGameInput[]
    connectOrCreate?: BingoCardCreateOrConnectWithoutGameInput | BingoCardCreateOrConnectWithoutGameInput[]
    createMany?: BingoCardCreateManyGameInputEnvelope
    connect?: BingoCardWhereUniqueInput | BingoCardWhereUniqueInput[]
  }

  export type BingoCardUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<BingoCardCreateWithoutGameInput, BingoCardUncheckedCreateWithoutGameInput> | BingoCardCreateWithoutGameInput[] | BingoCardUncheckedCreateWithoutGameInput[]
    connectOrCreate?: BingoCardCreateOrConnectWithoutGameInput | BingoCardCreateOrConnectWithoutGameInput[]
    createMany?: BingoCardCreateManyGameInputEnvelope
    connect?: BingoCardWhereUniqueInput | BingoCardWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BingoGameUpdateplayersInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BingoCardUpdateManyWithoutGameNestedInput = {
    create?: XOR<BingoCardCreateWithoutGameInput, BingoCardUncheckedCreateWithoutGameInput> | BingoCardCreateWithoutGameInput[] | BingoCardUncheckedCreateWithoutGameInput[]
    connectOrCreate?: BingoCardCreateOrConnectWithoutGameInput | BingoCardCreateOrConnectWithoutGameInput[]
    upsert?: BingoCardUpsertWithWhereUniqueWithoutGameInput | BingoCardUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: BingoCardCreateManyGameInputEnvelope
    set?: BingoCardWhereUniqueInput | BingoCardWhereUniqueInput[]
    disconnect?: BingoCardWhereUniqueInput | BingoCardWhereUniqueInput[]
    delete?: BingoCardWhereUniqueInput | BingoCardWhereUniqueInput[]
    connect?: BingoCardWhereUniqueInput | BingoCardWhereUniqueInput[]
    update?: BingoCardUpdateWithWhereUniqueWithoutGameInput | BingoCardUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: BingoCardUpdateManyWithWhereWithoutGameInput | BingoCardUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: BingoCardScalarWhereInput | BingoCardScalarWhereInput[]
  }

  export type BingoCardUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<BingoCardCreateWithoutGameInput, BingoCardUncheckedCreateWithoutGameInput> | BingoCardCreateWithoutGameInput[] | BingoCardUncheckedCreateWithoutGameInput[]
    connectOrCreate?: BingoCardCreateOrConnectWithoutGameInput | BingoCardCreateOrConnectWithoutGameInput[]
    upsert?: BingoCardUpsertWithWhereUniqueWithoutGameInput | BingoCardUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: BingoCardCreateManyGameInputEnvelope
    set?: BingoCardWhereUniqueInput | BingoCardWhereUniqueInput[]
    disconnect?: BingoCardWhereUniqueInput | BingoCardWhereUniqueInput[]
    delete?: BingoCardWhereUniqueInput | BingoCardWhereUniqueInput[]
    connect?: BingoCardWhereUniqueInput | BingoCardWhereUniqueInput[]
    update?: BingoCardUpdateWithWhereUniqueWithoutGameInput | BingoCardUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: BingoCardUpdateManyWithWhereWithoutGameInput | BingoCardUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: BingoCardScalarWhereInput | BingoCardScalarWhereInput[]
  }

  export type BingoGameCreateNestedOneWithoutBingoCardInput = {
    create?: XOR<BingoGameCreateWithoutBingoCardInput, BingoGameUncheckedCreateWithoutBingoCardInput>
    connectOrCreate?: BingoGameCreateOrConnectWithoutBingoCardInput
    connect?: BingoGameWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BingoGameUpdateOneRequiredWithoutBingoCardNestedInput = {
    create?: XOR<BingoGameCreateWithoutBingoCardInput, BingoGameUncheckedCreateWithoutBingoCardInput>
    connectOrCreate?: BingoGameCreateOrConnectWithoutBingoCardInput
    upsert?: BingoGameUpsertWithoutBingoCardInput
    connect?: BingoGameWhereUniqueInput
    update?: XOR<XOR<BingoGameUpdateToOneWithWhereWithoutBingoCardInput, BingoGameUpdateWithoutBingoCardInput>, BingoGameUncheckedUpdateWithoutBingoCardInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BingoCardCreateWithoutGameInput = {
    id?: string
    cardState: JsonNullValueInput | InputJsonValue
    hasWon?: boolean
    wonAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BingoCardUncheckedCreateWithoutGameInput = {
    id?: string
    cardState: JsonNullValueInput | InputJsonValue
    hasWon?: boolean
    wonAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BingoCardCreateOrConnectWithoutGameInput = {
    where: BingoCardWhereUniqueInput
    create: XOR<BingoCardCreateWithoutGameInput, BingoCardUncheckedCreateWithoutGameInput>
  }

  export type BingoCardCreateManyGameInputEnvelope = {
    data: BingoCardCreateManyGameInput | BingoCardCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type BingoCardUpsertWithWhereUniqueWithoutGameInput = {
    where: BingoCardWhereUniqueInput
    update: XOR<BingoCardUpdateWithoutGameInput, BingoCardUncheckedUpdateWithoutGameInput>
    create: XOR<BingoCardCreateWithoutGameInput, BingoCardUncheckedCreateWithoutGameInput>
  }

  export type BingoCardUpdateWithWhereUniqueWithoutGameInput = {
    where: BingoCardWhereUniqueInput
    data: XOR<BingoCardUpdateWithoutGameInput, BingoCardUncheckedUpdateWithoutGameInput>
  }

  export type BingoCardUpdateManyWithWhereWithoutGameInput = {
    where: BingoCardScalarWhereInput
    data: XOR<BingoCardUpdateManyMutationInput, BingoCardUncheckedUpdateManyWithoutGameInput>
  }

  export type BingoCardScalarWhereInput = {
    AND?: BingoCardScalarWhereInput | BingoCardScalarWhereInput[]
    OR?: BingoCardScalarWhereInput[]
    NOT?: BingoCardScalarWhereInput | BingoCardScalarWhereInput[]
    id?: StringFilter<"BingoCard"> | string
    gameId?: StringFilter<"BingoCard"> | string
    cardState?: JsonFilter<"BingoCard">
    hasWon?: BoolFilter<"BingoCard"> | boolean
    wonAt?: DateTimeNullableFilter<"BingoCard"> | Date | string | null
    createdAt?: DateTimeFilter<"BingoCard"> | Date | string
    updatedAt?: DateTimeFilter<"BingoCard"> | Date | string
  }

  export type BingoGameCreateWithoutBingoCardInput = {
    id?: string
    code: string
    title: string
    rows: number
    cols: number
    content: JsonNullValueInput | InputJsonValue
    organizer: string
    players?: BingoGameCreateplayersInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BingoGameUncheckedCreateWithoutBingoCardInput = {
    id?: string
    code: string
    title: string
    rows: number
    cols: number
    content: JsonNullValueInput | InputJsonValue
    organizer: string
    players?: BingoGameCreateplayersInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BingoGameCreateOrConnectWithoutBingoCardInput = {
    where: BingoGameWhereUniqueInput
    create: XOR<BingoGameCreateWithoutBingoCardInput, BingoGameUncheckedCreateWithoutBingoCardInput>
  }

  export type BingoGameUpsertWithoutBingoCardInput = {
    update: XOR<BingoGameUpdateWithoutBingoCardInput, BingoGameUncheckedUpdateWithoutBingoCardInput>
    create: XOR<BingoGameCreateWithoutBingoCardInput, BingoGameUncheckedCreateWithoutBingoCardInput>
    where?: BingoGameWhereInput
  }

  export type BingoGameUpdateToOneWithWhereWithoutBingoCardInput = {
    where?: BingoGameWhereInput
    data: XOR<BingoGameUpdateWithoutBingoCardInput, BingoGameUncheckedUpdateWithoutBingoCardInput>
  }

  export type BingoGameUpdateWithoutBingoCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    rows?: IntFieldUpdateOperationsInput | number
    cols?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    organizer?: StringFieldUpdateOperationsInput | string
    players?: BingoGameUpdateplayersInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BingoGameUncheckedUpdateWithoutBingoCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    rows?: IntFieldUpdateOperationsInput | number
    cols?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    organizer?: StringFieldUpdateOperationsInput | string
    players?: BingoGameUpdateplayersInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BingoCardCreateManyGameInput = {
    id?: string
    cardState: JsonNullValueInput | InputJsonValue
    hasWon?: boolean
    wonAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BingoCardUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardState?: JsonNullValueInput | InputJsonValue
    hasWon?: BoolFieldUpdateOperationsInput | boolean
    wonAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BingoCardUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardState?: JsonNullValueInput | InputJsonValue
    hasWon?: BoolFieldUpdateOperationsInput | boolean
    wonAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BingoCardUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardState?: JsonNullValueInput | InputJsonValue
    hasWon?: BoolFieldUpdateOperationsInput | boolean
    wonAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
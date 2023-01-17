
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model mdl_course
 * 
 */
export type mdl_course = {
  id: number
  category: number
  fullname: string
  shortname: string
  summary: string
  visible: number
  timecreated: number
}

/**
 * Model mdl_course_categories
 * 
 */
export type mdl_course_categories = {
  id: number
  name: string
  visible: number
}

/**
 * Model mdl_context
 * 
 */
export type mdl_context = {
  id: number
  instanceid: number
  contextlevel: number
}

/**
 * Model mdl_files
 * 
 */
export type mdl_files = {
  id: number
  contextid: number
  filename: string
  component: string
}

/**
 * Model mdl_customfield_data
 * 
 */
export type mdl_customfield_data = {
  id: number
  instanceid: number
  fieldid: number
  value: string
  valueformat: number
  charvalue: string
}

/**
 * Model mdl_customfield_field
 * 
 */
export type mdl_customfield_field = {
  id: number
  shortname: string
  name: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Mdl_courses
 * const mdl_courses = await prisma.mdl_course.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Mdl_courses
   * const mdl_courses = await prisma.mdl_course.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

      /**
   * `prisma.mdl_course`: Exposes CRUD operations for the **mdl_course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mdl_courses
    * const mdl_courses = await prisma.mdl_course.findMany()
    * ```
    */
  get mdl_course(): Prisma.mdl_courseDelegate<GlobalReject>;

  /**
   * `prisma.mdl_course_categories`: Exposes CRUD operations for the **mdl_course_categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mdl_course_categories
    * const mdl_course_categories = await prisma.mdl_course_categories.findMany()
    * ```
    */
  get mdl_course_categories(): Prisma.mdl_course_categoriesDelegate<GlobalReject>;

  /**
   * `prisma.mdl_context`: Exposes CRUD operations for the **mdl_context** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mdl_contexts
    * const mdl_contexts = await prisma.mdl_context.findMany()
    * ```
    */
  get mdl_context(): Prisma.mdl_contextDelegate<GlobalReject>;

  /**
   * `prisma.mdl_files`: Exposes CRUD operations for the **mdl_files** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mdl_files
    * const mdl_files = await prisma.mdl_files.findMany()
    * ```
    */
  get mdl_files(): Prisma.mdl_filesDelegate<GlobalReject>;

  /**
   * `prisma.mdl_customfield_data`: Exposes CRUD operations for the **mdl_customfield_data** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mdl_customfield_data
    * const mdl_customfield_data = await prisma.mdl_customfield_data.findMany()
    * ```
    */
  get mdl_customfield_data(): Prisma.mdl_customfield_dataDelegate<GlobalReject>;

  /**
   * `prisma.mdl_customfield_field`: Exposes CRUD operations for the **mdl_customfield_field** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mdl_customfield_fields
    * const mdl_customfield_fields = await prisma.mdl_customfield_field.findMany()
    * ```
    */
  get mdl_customfield_field(): Prisma.mdl_customfield_fieldDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 4.7.1
   * Query Engine version: 272861e07ab64f234d3ffc4094e32bd61775599c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    mdl_course: 'mdl_course',
    mdl_course_categories: 'mdl_course_categories',
    mdl_context: 'mdl_context',
    mdl_files: 'mdl_files',
    mdl_customfield_data: 'mdl_customfield_data',
    mdl_customfield_field: 'mdl_customfield_field'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<PrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Mdl_courseCountOutputType
   */


  export type Mdl_courseCountOutputType = {
    custom_data: number
    context: number
  }

  export type Mdl_courseCountOutputTypeSelect = {
    custom_data?: boolean
    context?: boolean
  }

  export type Mdl_courseCountOutputTypeGetPayload<S extends boolean | null | undefined | Mdl_courseCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Mdl_courseCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (Mdl_courseCountOutputTypeArgs)
    ? Mdl_courseCountOutputType 
    : S extends { select: any } & (Mdl_courseCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Mdl_courseCountOutputType ? Mdl_courseCountOutputType[P] : never
  } 
      : Mdl_courseCountOutputType




  // Custom InputTypes

  /**
   * Mdl_courseCountOutputType without action
   */
  export type Mdl_courseCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Mdl_courseCountOutputType
     * 
    **/
    select?: Mdl_courseCountOutputTypeSelect | null
  }



  /**
   * Count Type Mdl_course_categoriesCountOutputType
   */


  export type Mdl_course_categoriesCountOutputType = {
    courses: number
  }

  export type Mdl_course_categoriesCountOutputTypeSelect = {
    courses?: boolean
  }

  export type Mdl_course_categoriesCountOutputTypeGetPayload<S extends boolean | null | undefined | Mdl_course_categoriesCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Mdl_course_categoriesCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (Mdl_course_categoriesCountOutputTypeArgs)
    ? Mdl_course_categoriesCountOutputType 
    : S extends { select: any } & (Mdl_course_categoriesCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Mdl_course_categoriesCountOutputType ? Mdl_course_categoriesCountOutputType[P] : never
  } 
      : Mdl_course_categoriesCountOutputType




  // Custom InputTypes

  /**
   * Mdl_course_categoriesCountOutputType without action
   */
  export type Mdl_course_categoriesCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Mdl_course_categoriesCountOutputType
     * 
    **/
    select?: Mdl_course_categoriesCountOutputTypeSelect | null
  }



  /**
   * Count Type Mdl_contextCountOutputType
   */


  export type Mdl_contextCountOutputType = {
    files: number
  }

  export type Mdl_contextCountOutputTypeSelect = {
    files?: boolean
  }

  export type Mdl_contextCountOutputTypeGetPayload<S extends boolean | null | undefined | Mdl_contextCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Mdl_contextCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (Mdl_contextCountOutputTypeArgs)
    ? Mdl_contextCountOutputType 
    : S extends { select: any } & (Mdl_contextCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Mdl_contextCountOutputType ? Mdl_contextCountOutputType[P] : never
  } 
      : Mdl_contextCountOutputType




  // Custom InputTypes

  /**
   * Mdl_contextCountOutputType without action
   */
  export type Mdl_contextCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Mdl_contextCountOutputType
     * 
    **/
    select?: Mdl_contextCountOutputTypeSelect | null
  }



  /**
   * Count Type Mdl_customfield_fieldCountOutputType
   */


  export type Mdl_customfield_fieldCountOutputType = {
    datas: number
  }

  export type Mdl_customfield_fieldCountOutputTypeSelect = {
    datas?: boolean
  }

  export type Mdl_customfield_fieldCountOutputTypeGetPayload<S extends boolean | null | undefined | Mdl_customfield_fieldCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Mdl_customfield_fieldCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (Mdl_customfield_fieldCountOutputTypeArgs)
    ? Mdl_customfield_fieldCountOutputType 
    : S extends { select: any } & (Mdl_customfield_fieldCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Mdl_customfield_fieldCountOutputType ? Mdl_customfield_fieldCountOutputType[P] : never
  } 
      : Mdl_customfield_fieldCountOutputType




  // Custom InputTypes

  /**
   * Mdl_customfield_fieldCountOutputType without action
   */
  export type Mdl_customfield_fieldCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Mdl_customfield_fieldCountOutputType
     * 
    **/
    select?: Mdl_customfield_fieldCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model mdl_course
   */


  export type AggregateMdl_course = {
    _count: Mdl_courseCountAggregateOutputType | null
    _avg: Mdl_courseAvgAggregateOutputType | null
    _sum: Mdl_courseSumAggregateOutputType | null
    _min: Mdl_courseMinAggregateOutputType | null
    _max: Mdl_courseMaxAggregateOutputType | null
  }

  export type Mdl_courseAvgAggregateOutputType = {
    id: number | null
    category: number | null
    visible: number | null
    timecreated: number | null
  }

  export type Mdl_courseSumAggregateOutputType = {
    id: number | null
    category: number | null
    visible: number | null
    timecreated: number | null
  }

  export type Mdl_courseMinAggregateOutputType = {
    id: number | null
    category: number | null
    fullname: string | null
    shortname: string | null
    summary: string | null
    visible: number | null
    timecreated: number | null
  }

  export type Mdl_courseMaxAggregateOutputType = {
    id: number | null
    category: number | null
    fullname: string | null
    shortname: string | null
    summary: string | null
    visible: number | null
    timecreated: number | null
  }

  export type Mdl_courseCountAggregateOutputType = {
    id: number
    category: number
    fullname: number
    shortname: number
    summary: number
    visible: number
    timecreated: number
    _all: number
  }


  export type Mdl_courseAvgAggregateInputType = {
    id?: true
    category?: true
    visible?: true
    timecreated?: true
  }

  export type Mdl_courseSumAggregateInputType = {
    id?: true
    category?: true
    visible?: true
    timecreated?: true
  }

  export type Mdl_courseMinAggregateInputType = {
    id?: true
    category?: true
    fullname?: true
    shortname?: true
    summary?: true
    visible?: true
    timecreated?: true
  }

  export type Mdl_courseMaxAggregateInputType = {
    id?: true
    category?: true
    fullname?: true
    shortname?: true
    summary?: true
    visible?: true
    timecreated?: true
  }

  export type Mdl_courseCountAggregateInputType = {
    id?: true
    category?: true
    fullname?: true
    shortname?: true
    summary?: true
    visible?: true
    timecreated?: true
    _all?: true
  }

  export type Mdl_courseAggregateArgs = {
    /**
     * Filter which mdl_course to aggregate.
     * 
    **/
    where?: mdl_courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mdl_courses to fetch.
     * 
    **/
    orderBy?: Enumerable<mdl_courseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: mdl_courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mdl_courses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mdl_courses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mdl_courses
    **/
    _count?: true | Mdl_courseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mdl_courseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mdl_courseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mdl_courseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mdl_courseMaxAggregateInputType
  }

  export type GetMdl_courseAggregateType<T extends Mdl_courseAggregateArgs> = {
        [P in keyof T & keyof AggregateMdl_course]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMdl_course[P]>
      : GetScalarType<T[P], AggregateMdl_course[P]>
  }




  export type Mdl_courseGroupByArgs = {
    where?: mdl_courseWhereInput
    orderBy?: Enumerable<mdl_courseOrderByWithAggregationInput>
    by: Array<Mdl_courseScalarFieldEnum>
    having?: mdl_courseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mdl_courseCountAggregateInputType | true
    _avg?: Mdl_courseAvgAggregateInputType
    _sum?: Mdl_courseSumAggregateInputType
    _min?: Mdl_courseMinAggregateInputType
    _max?: Mdl_courseMaxAggregateInputType
  }


  export type Mdl_courseGroupByOutputType = {
    id: number
    category: number
    fullname: string
    shortname: string
    summary: string
    visible: number
    timecreated: number
    _count: Mdl_courseCountAggregateOutputType | null
    _avg: Mdl_courseAvgAggregateOutputType | null
    _sum: Mdl_courseSumAggregateOutputType | null
    _min: Mdl_courseMinAggregateOutputType | null
    _max: Mdl_courseMaxAggregateOutputType | null
  }

  type GetMdl_courseGroupByPayload<T extends Mdl_courseGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Mdl_courseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mdl_courseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mdl_courseGroupByOutputType[P]>
            : GetScalarType<T[P], Mdl_courseGroupByOutputType[P]>
        }
      >
    >


  export type mdl_courseSelect = {
    id?: boolean
    category?: boolean
    fullname?: boolean
    shortname?: boolean
    summary?: boolean
    visible?: boolean
    timecreated?: boolean
    category_name?: boolean | mdl_course_categoriesArgs
    custom_data?: boolean | mdl_customfield_dataFindManyArgs
    context?: boolean | mdl_contextFindManyArgs
    _count?: boolean | Mdl_courseCountOutputTypeArgs
  }


  export type mdl_courseInclude = {
    category_name?: boolean | mdl_course_categoriesArgs
    custom_data?: boolean | mdl_customfield_dataFindManyArgs
    context?: boolean | mdl_contextFindManyArgs
    _count?: boolean | Mdl_courseCountOutputTypeArgs
  } 

  export type mdl_courseGetPayload<S extends boolean | null | undefined | mdl_courseArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? mdl_course :
    S extends undefined ? never :
    S extends { include: any } & (mdl_courseArgs | mdl_courseFindManyArgs)
    ? mdl_course  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'category_name' ? mdl_course_categoriesGetPayload<S['include'][P]> :
        P extends 'custom_data' ? Array < mdl_customfield_dataGetPayload<S['include'][P]>>  :
        P extends 'context' ? Array < mdl_contextGetPayload<S['include'][P]>>  :
        P extends '_count' ? Mdl_courseCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (mdl_courseArgs | mdl_courseFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'category_name' ? mdl_course_categoriesGetPayload<S['select'][P]> :
        P extends 'custom_data' ? Array < mdl_customfield_dataGetPayload<S['select'][P]>>  :
        P extends 'context' ? Array < mdl_contextGetPayload<S['select'][P]>>  :
        P extends '_count' ? Mdl_courseCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof mdl_course ? mdl_course[P] : never
  } 
      : mdl_course


  type mdl_courseCountArgs = Merge<
    Omit<mdl_courseFindManyArgs, 'select' | 'include'> & {
      select?: Mdl_courseCountAggregateInputType | true
    }
  >

  export interface mdl_courseDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Mdl_course that matches the filter.
     * @param {mdl_courseFindUniqueArgs} args - Arguments to find a Mdl_course
     * @example
     * // Get one Mdl_course
     * const mdl_course = await prisma.mdl_course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends mdl_courseFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, mdl_courseFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'mdl_course'> extends True ? Prisma__mdl_courseClient<mdl_courseGetPayload<T>> : Prisma__mdl_courseClient<mdl_courseGetPayload<T> | null, null>

    /**
     * Find one Mdl_course that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {mdl_courseFindUniqueOrThrowArgs} args - Arguments to find a Mdl_course
     * @example
     * // Get one Mdl_course
     * const mdl_course = await prisma.mdl_course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends mdl_courseFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, mdl_courseFindUniqueOrThrowArgs>
    ): Prisma__mdl_courseClient<mdl_courseGetPayload<T>>

    /**
     * Find the first Mdl_course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mdl_courseFindFirstArgs} args - Arguments to find a Mdl_course
     * @example
     * // Get one Mdl_course
     * const mdl_course = await prisma.mdl_course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends mdl_courseFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, mdl_courseFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'mdl_course'> extends True ? Prisma__mdl_courseClient<mdl_courseGetPayload<T>> : Prisma__mdl_courseClient<mdl_courseGetPayload<T> | null, null>

    /**
     * Find the first Mdl_course that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mdl_courseFindFirstOrThrowArgs} args - Arguments to find a Mdl_course
     * @example
     * // Get one Mdl_course
     * const mdl_course = await prisma.mdl_course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends mdl_courseFindFirstOrThrowArgs>(
      args?: SelectSubset<T, mdl_courseFindFirstOrThrowArgs>
    ): Prisma__mdl_courseClient<mdl_courseGetPayload<T>>

    /**
     * Find zero or more Mdl_courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mdl_courseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mdl_courses
     * const mdl_courses = await prisma.mdl_course.findMany()
     * 
     * // Get first 10 Mdl_courses
     * const mdl_courses = await prisma.mdl_course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mdl_courseWithIdOnly = await prisma.mdl_course.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends mdl_courseFindManyArgs>(
      args?: SelectSubset<T, mdl_courseFindManyArgs>
    ): PrismaPromise<Array<mdl_courseGetPayload<T>>>

    /**
     * Create a Mdl_course.
     * @param {mdl_courseCreateArgs} args - Arguments to create a Mdl_course.
     * @example
     * // Create one Mdl_course
     * const Mdl_course = await prisma.mdl_course.create({
     *   data: {
     *     // ... data to create a Mdl_course
     *   }
     * })
     * 
    **/
    create<T extends mdl_courseCreateArgs>(
      args: SelectSubset<T, mdl_courseCreateArgs>
    ): Prisma__mdl_courseClient<mdl_courseGetPayload<T>>

    /**
     * Create many Mdl_courses.
     *     @param {mdl_courseCreateManyArgs} args - Arguments to create many Mdl_courses.
     *     @example
     *     // Create many Mdl_courses
     *     const mdl_course = await prisma.mdl_course.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends mdl_courseCreateManyArgs>(
      args?: SelectSubset<T, mdl_courseCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Mdl_course.
     * @param {mdl_courseDeleteArgs} args - Arguments to delete one Mdl_course.
     * @example
     * // Delete one Mdl_course
     * const Mdl_course = await prisma.mdl_course.delete({
     *   where: {
     *     // ... filter to delete one Mdl_course
     *   }
     * })
     * 
    **/
    delete<T extends mdl_courseDeleteArgs>(
      args: SelectSubset<T, mdl_courseDeleteArgs>
    ): Prisma__mdl_courseClient<mdl_courseGetPayload<T>>

    /**
     * Update one Mdl_course.
     * @param {mdl_courseUpdateArgs} args - Arguments to update one Mdl_course.
     * @example
     * // Update one Mdl_course
     * const mdl_course = await prisma.mdl_course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends mdl_courseUpdateArgs>(
      args: SelectSubset<T, mdl_courseUpdateArgs>
    ): Prisma__mdl_courseClient<mdl_courseGetPayload<T>>

    /**
     * Delete zero or more Mdl_courses.
     * @param {mdl_courseDeleteManyArgs} args - Arguments to filter Mdl_courses to delete.
     * @example
     * // Delete a few Mdl_courses
     * const { count } = await prisma.mdl_course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends mdl_courseDeleteManyArgs>(
      args?: SelectSubset<T, mdl_courseDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mdl_courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mdl_courseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mdl_courses
     * const mdl_course = await prisma.mdl_course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends mdl_courseUpdateManyArgs>(
      args: SelectSubset<T, mdl_courseUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Mdl_course.
     * @param {mdl_courseUpsertArgs} args - Arguments to update or create a Mdl_course.
     * @example
     * // Update or create a Mdl_course
     * const mdl_course = await prisma.mdl_course.upsert({
     *   create: {
     *     // ... data to create a Mdl_course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mdl_course we want to update
     *   }
     * })
    **/
    upsert<T extends mdl_courseUpsertArgs>(
      args: SelectSubset<T, mdl_courseUpsertArgs>
    ): Prisma__mdl_courseClient<mdl_courseGetPayload<T>>

    /**
     * Count the number of Mdl_courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mdl_courseCountArgs} args - Arguments to filter Mdl_courses to count.
     * @example
     * // Count the number of Mdl_courses
     * const count = await prisma.mdl_course.count({
     *   where: {
     *     // ... the filter for the Mdl_courses we want to count
     *   }
     * })
    **/
    count<T extends mdl_courseCountArgs>(
      args?: Subset<T, mdl_courseCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mdl_courseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mdl_course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mdl_courseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Mdl_courseAggregateArgs>(args: Subset<T, Mdl_courseAggregateArgs>): PrismaPromise<GetMdl_courseAggregateType<T>>

    /**
     * Group by Mdl_course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mdl_courseGroupByArgs} args - Group by arguments.
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
      T extends Mdl_courseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Mdl_courseGroupByArgs['orderBy'] }
        : { orderBy?: Mdl_courseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Mdl_courseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMdl_courseGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for mdl_course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__mdl_courseClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    category_name<T extends mdl_course_categoriesArgs= {}>(args?: Subset<T, mdl_course_categoriesArgs>): Prisma__mdl_course_categoriesClient<mdl_course_categoriesGetPayload<T> | Null>;

    custom_data<T extends mdl_customfield_dataFindManyArgs= {}>(args?: Subset<T, mdl_customfield_dataFindManyArgs>): PrismaPromise<Array<mdl_customfield_dataGetPayload<T>>| Null>;

    context<T extends mdl_contextFindManyArgs= {}>(args?: Subset<T, mdl_contextFindManyArgs>): PrismaPromise<Array<mdl_contextGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * mdl_course base type for findUnique actions
   */
  export type mdl_courseFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the mdl_course
     * 
    **/
    select?: mdl_courseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_courseInclude | null
    /**
     * Filter, which mdl_course to fetch.
     * 
    **/
    where: mdl_courseWhereUniqueInput
  }

  /**
   * mdl_course: findUnique
   */
  export interface mdl_courseFindUniqueArgs extends mdl_courseFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * mdl_course findUniqueOrThrow
   */
  export type mdl_courseFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the mdl_course
     * 
    **/
    select?: mdl_courseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_courseInclude | null
    /**
     * Filter, which mdl_course to fetch.
     * 
    **/
    where: mdl_courseWhereUniqueInput
  }


  /**
   * mdl_course base type for findFirst actions
   */
  export type mdl_courseFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the mdl_course
     * 
    **/
    select?: mdl_courseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_courseInclude | null
    /**
     * Filter, which mdl_course to fetch.
     * 
    **/
    where?: mdl_courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mdl_courses to fetch.
     * 
    **/
    orderBy?: Enumerable<mdl_courseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mdl_courses.
     * 
    **/
    cursor?: mdl_courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mdl_courses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mdl_courses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mdl_courses.
     * 
    **/
    distinct?: Enumerable<Mdl_courseScalarFieldEnum>
  }

  /**
   * mdl_course: findFirst
   */
  export interface mdl_courseFindFirstArgs extends mdl_courseFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * mdl_course findFirstOrThrow
   */
  export type mdl_courseFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the mdl_course
     * 
    **/
    select?: mdl_courseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_courseInclude | null
    /**
     * Filter, which mdl_course to fetch.
     * 
    **/
    where?: mdl_courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mdl_courses to fetch.
     * 
    **/
    orderBy?: Enumerable<mdl_courseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mdl_courses.
     * 
    **/
    cursor?: mdl_courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mdl_courses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mdl_courses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mdl_courses.
     * 
    **/
    distinct?: Enumerable<Mdl_courseScalarFieldEnum>
  }


  /**
   * mdl_course findMany
   */
  export type mdl_courseFindManyArgs = {
    /**
     * Select specific fields to fetch from the mdl_course
     * 
    **/
    select?: mdl_courseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_courseInclude | null
    /**
     * Filter, which mdl_courses to fetch.
     * 
    **/
    where?: mdl_courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mdl_courses to fetch.
     * 
    **/
    orderBy?: Enumerable<mdl_courseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mdl_courses.
     * 
    **/
    cursor?: mdl_courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mdl_courses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mdl_courses.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Mdl_courseScalarFieldEnum>
  }


  /**
   * mdl_course create
   */
  export type mdl_courseCreateArgs = {
    /**
     * Select specific fields to fetch from the mdl_course
     * 
    **/
    select?: mdl_courseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_courseInclude | null
    /**
     * The data needed to create a mdl_course.
     * 
    **/
    data: XOR<mdl_courseCreateInput, mdl_courseUncheckedCreateInput>
  }


  /**
   * mdl_course createMany
   */
  export type mdl_courseCreateManyArgs = {
    /**
     * The data used to create many mdl_courses.
     * 
    **/
    data: Enumerable<mdl_courseCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * mdl_course update
   */
  export type mdl_courseUpdateArgs = {
    /**
     * Select specific fields to fetch from the mdl_course
     * 
    **/
    select?: mdl_courseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_courseInclude | null
    /**
     * The data needed to update a mdl_course.
     * 
    **/
    data: XOR<mdl_courseUpdateInput, mdl_courseUncheckedUpdateInput>
    /**
     * Choose, which mdl_course to update.
     * 
    **/
    where: mdl_courseWhereUniqueInput
  }


  /**
   * mdl_course updateMany
   */
  export type mdl_courseUpdateManyArgs = {
    /**
     * The data used to update mdl_courses.
     * 
    **/
    data: XOR<mdl_courseUpdateManyMutationInput, mdl_courseUncheckedUpdateManyInput>
    /**
     * Filter which mdl_courses to update
     * 
    **/
    where?: mdl_courseWhereInput
  }


  /**
   * mdl_course upsert
   */
  export type mdl_courseUpsertArgs = {
    /**
     * Select specific fields to fetch from the mdl_course
     * 
    **/
    select?: mdl_courseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_courseInclude | null
    /**
     * The filter to search for the mdl_course to update in case it exists.
     * 
    **/
    where: mdl_courseWhereUniqueInput
    /**
     * In case the mdl_course found by the `where` argument doesn't exist, create a new mdl_course with this data.
     * 
    **/
    create: XOR<mdl_courseCreateInput, mdl_courseUncheckedCreateInput>
    /**
     * In case the mdl_course was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<mdl_courseUpdateInput, mdl_courseUncheckedUpdateInput>
  }


  /**
   * mdl_course delete
   */
  export type mdl_courseDeleteArgs = {
    /**
     * Select specific fields to fetch from the mdl_course
     * 
    **/
    select?: mdl_courseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_courseInclude | null
    /**
     * Filter which mdl_course to delete.
     * 
    **/
    where: mdl_courseWhereUniqueInput
  }


  /**
   * mdl_course deleteMany
   */
  export type mdl_courseDeleteManyArgs = {
    /**
     * Filter which mdl_courses to delete
     * 
    **/
    where?: mdl_courseWhereInput
  }


  /**
   * mdl_course without action
   */
  export type mdl_courseArgs = {
    /**
     * Select specific fields to fetch from the mdl_course
     * 
    **/
    select?: mdl_courseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_courseInclude | null
  }



  /**
   * Model mdl_course_categories
   */


  export type AggregateMdl_course_categories = {
    _count: Mdl_course_categoriesCountAggregateOutputType | null
    _avg: Mdl_course_categoriesAvgAggregateOutputType | null
    _sum: Mdl_course_categoriesSumAggregateOutputType | null
    _min: Mdl_course_categoriesMinAggregateOutputType | null
    _max: Mdl_course_categoriesMaxAggregateOutputType | null
  }

  export type Mdl_course_categoriesAvgAggregateOutputType = {
    id: number | null
    visible: number | null
  }

  export type Mdl_course_categoriesSumAggregateOutputType = {
    id: number | null
    visible: number | null
  }

  export type Mdl_course_categoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
    visible: number | null
  }

  export type Mdl_course_categoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    visible: number | null
  }

  export type Mdl_course_categoriesCountAggregateOutputType = {
    id: number
    name: number
    visible: number
    _all: number
  }


  export type Mdl_course_categoriesAvgAggregateInputType = {
    id?: true
    visible?: true
  }

  export type Mdl_course_categoriesSumAggregateInputType = {
    id?: true
    visible?: true
  }

  export type Mdl_course_categoriesMinAggregateInputType = {
    id?: true
    name?: true
    visible?: true
  }

  export type Mdl_course_categoriesMaxAggregateInputType = {
    id?: true
    name?: true
    visible?: true
  }

  export type Mdl_course_categoriesCountAggregateInputType = {
    id?: true
    name?: true
    visible?: true
    _all?: true
  }

  export type Mdl_course_categoriesAggregateArgs = {
    /**
     * Filter which mdl_course_categories to aggregate.
     * 
    **/
    where?: mdl_course_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mdl_course_categories to fetch.
     * 
    **/
    orderBy?: Enumerable<mdl_course_categoriesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: mdl_course_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mdl_course_categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mdl_course_categories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mdl_course_categories
    **/
    _count?: true | Mdl_course_categoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mdl_course_categoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mdl_course_categoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mdl_course_categoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mdl_course_categoriesMaxAggregateInputType
  }

  export type GetMdl_course_categoriesAggregateType<T extends Mdl_course_categoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateMdl_course_categories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMdl_course_categories[P]>
      : GetScalarType<T[P], AggregateMdl_course_categories[P]>
  }




  export type Mdl_course_categoriesGroupByArgs = {
    where?: mdl_course_categoriesWhereInput
    orderBy?: Enumerable<mdl_course_categoriesOrderByWithAggregationInput>
    by: Array<Mdl_course_categoriesScalarFieldEnum>
    having?: mdl_course_categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mdl_course_categoriesCountAggregateInputType | true
    _avg?: Mdl_course_categoriesAvgAggregateInputType
    _sum?: Mdl_course_categoriesSumAggregateInputType
    _min?: Mdl_course_categoriesMinAggregateInputType
    _max?: Mdl_course_categoriesMaxAggregateInputType
  }


  export type Mdl_course_categoriesGroupByOutputType = {
    id: number
    name: string
    visible: number
    _count: Mdl_course_categoriesCountAggregateOutputType | null
    _avg: Mdl_course_categoriesAvgAggregateOutputType | null
    _sum: Mdl_course_categoriesSumAggregateOutputType | null
    _min: Mdl_course_categoriesMinAggregateOutputType | null
    _max: Mdl_course_categoriesMaxAggregateOutputType | null
  }

  type GetMdl_course_categoriesGroupByPayload<T extends Mdl_course_categoriesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Mdl_course_categoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mdl_course_categoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mdl_course_categoriesGroupByOutputType[P]>
            : GetScalarType<T[P], Mdl_course_categoriesGroupByOutputType[P]>
        }
      >
    >


  export type mdl_course_categoriesSelect = {
    id?: boolean
    name?: boolean
    visible?: boolean
    courses?: boolean | mdl_courseFindManyArgs
    _count?: boolean | Mdl_course_categoriesCountOutputTypeArgs
  }


  export type mdl_course_categoriesInclude = {
    courses?: boolean | mdl_courseFindManyArgs
    _count?: boolean | Mdl_course_categoriesCountOutputTypeArgs
  } 

  export type mdl_course_categoriesGetPayload<S extends boolean | null | undefined | mdl_course_categoriesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? mdl_course_categories :
    S extends undefined ? never :
    S extends { include: any } & (mdl_course_categoriesArgs | mdl_course_categoriesFindManyArgs)
    ? mdl_course_categories  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'courses' ? Array < mdl_courseGetPayload<S['include'][P]>>  :
        P extends '_count' ? Mdl_course_categoriesCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (mdl_course_categoriesArgs | mdl_course_categoriesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'courses' ? Array < mdl_courseGetPayload<S['select'][P]>>  :
        P extends '_count' ? Mdl_course_categoriesCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof mdl_course_categories ? mdl_course_categories[P] : never
  } 
      : mdl_course_categories


  type mdl_course_categoriesCountArgs = Merge<
    Omit<mdl_course_categoriesFindManyArgs, 'select' | 'include'> & {
      select?: Mdl_course_categoriesCountAggregateInputType | true
    }
  >

  export interface mdl_course_categoriesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Mdl_course_categories that matches the filter.
     * @param {mdl_course_categoriesFindUniqueArgs} args - Arguments to find a Mdl_course_categories
     * @example
     * // Get one Mdl_course_categories
     * const mdl_course_categories = await prisma.mdl_course_categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends mdl_course_categoriesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, mdl_course_categoriesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'mdl_course_categories'> extends True ? Prisma__mdl_course_categoriesClient<mdl_course_categoriesGetPayload<T>> : Prisma__mdl_course_categoriesClient<mdl_course_categoriesGetPayload<T> | null, null>

    /**
     * Find one Mdl_course_categories that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {mdl_course_categoriesFindUniqueOrThrowArgs} args - Arguments to find a Mdl_course_categories
     * @example
     * // Get one Mdl_course_categories
     * const mdl_course_categories = await prisma.mdl_course_categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends mdl_course_categoriesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, mdl_course_categoriesFindUniqueOrThrowArgs>
    ): Prisma__mdl_course_categoriesClient<mdl_course_categoriesGetPayload<T>>

    /**
     * Find the first Mdl_course_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mdl_course_categoriesFindFirstArgs} args - Arguments to find a Mdl_course_categories
     * @example
     * // Get one Mdl_course_categories
     * const mdl_course_categories = await prisma.mdl_course_categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends mdl_course_categoriesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, mdl_course_categoriesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'mdl_course_categories'> extends True ? Prisma__mdl_course_categoriesClient<mdl_course_categoriesGetPayload<T>> : Prisma__mdl_course_categoriesClient<mdl_course_categoriesGetPayload<T> | null, null>

    /**
     * Find the first Mdl_course_categories that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mdl_course_categoriesFindFirstOrThrowArgs} args - Arguments to find a Mdl_course_categories
     * @example
     * // Get one Mdl_course_categories
     * const mdl_course_categories = await prisma.mdl_course_categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends mdl_course_categoriesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, mdl_course_categoriesFindFirstOrThrowArgs>
    ): Prisma__mdl_course_categoriesClient<mdl_course_categoriesGetPayload<T>>

    /**
     * Find zero or more Mdl_course_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mdl_course_categoriesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mdl_course_categories
     * const mdl_course_categories = await prisma.mdl_course_categories.findMany()
     * 
     * // Get first 10 Mdl_course_categories
     * const mdl_course_categories = await prisma.mdl_course_categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mdl_course_categoriesWithIdOnly = await prisma.mdl_course_categories.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends mdl_course_categoriesFindManyArgs>(
      args?: SelectSubset<T, mdl_course_categoriesFindManyArgs>
    ): PrismaPromise<Array<mdl_course_categoriesGetPayload<T>>>

    /**
     * Create a Mdl_course_categories.
     * @param {mdl_course_categoriesCreateArgs} args - Arguments to create a Mdl_course_categories.
     * @example
     * // Create one Mdl_course_categories
     * const Mdl_course_categories = await prisma.mdl_course_categories.create({
     *   data: {
     *     // ... data to create a Mdl_course_categories
     *   }
     * })
     * 
    **/
    create<T extends mdl_course_categoriesCreateArgs>(
      args: SelectSubset<T, mdl_course_categoriesCreateArgs>
    ): Prisma__mdl_course_categoriesClient<mdl_course_categoriesGetPayload<T>>

    /**
     * Create many Mdl_course_categories.
     *     @param {mdl_course_categoriesCreateManyArgs} args - Arguments to create many Mdl_course_categories.
     *     @example
     *     // Create many Mdl_course_categories
     *     const mdl_course_categories = await prisma.mdl_course_categories.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends mdl_course_categoriesCreateManyArgs>(
      args?: SelectSubset<T, mdl_course_categoriesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Mdl_course_categories.
     * @param {mdl_course_categoriesDeleteArgs} args - Arguments to delete one Mdl_course_categories.
     * @example
     * // Delete one Mdl_course_categories
     * const Mdl_course_categories = await prisma.mdl_course_categories.delete({
     *   where: {
     *     // ... filter to delete one Mdl_course_categories
     *   }
     * })
     * 
    **/
    delete<T extends mdl_course_categoriesDeleteArgs>(
      args: SelectSubset<T, mdl_course_categoriesDeleteArgs>
    ): Prisma__mdl_course_categoriesClient<mdl_course_categoriesGetPayload<T>>

    /**
     * Update one Mdl_course_categories.
     * @param {mdl_course_categoriesUpdateArgs} args - Arguments to update one Mdl_course_categories.
     * @example
     * // Update one Mdl_course_categories
     * const mdl_course_categories = await prisma.mdl_course_categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends mdl_course_categoriesUpdateArgs>(
      args: SelectSubset<T, mdl_course_categoriesUpdateArgs>
    ): Prisma__mdl_course_categoriesClient<mdl_course_categoriesGetPayload<T>>

    /**
     * Delete zero or more Mdl_course_categories.
     * @param {mdl_course_categoriesDeleteManyArgs} args - Arguments to filter Mdl_course_categories to delete.
     * @example
     * // Delete a few Mdl_course_categories
     * const { count } = await prisma.mdl_course_categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends mdl_course_categoriesDeleteManyArgs>(
      args?: SelectSubset<T, mdl_course_categoriesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mdl_course_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mdl_course_categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mdl_course_categories
     * const mdl_course_categories = await prisma.mdl_course_categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends mdl_course_categoriesUpdateManyArgs>(
      args: SelectSubset<T, mdl_course_categoriesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Mdl_course_categories.
     * @param {mdl_course_categoriesUpsertArgs} args - Arguments to update or create a Mdl_course_categories.
     * @example
     * // Update or create a Mdl_course_categories
     * const mdl_course_categories = await prisma.mdl_course_categories.upsert({
     *   create: {
     *     // ... data to create a Mdl_course_categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mdl_course_categories we want to update
     *   }
     * })
    **/
    upsert<T extends mdl_course_categoriesUpsertArgs>(
      args: SelectSubset<T, mdl_course_categoriesUpsertArgs>
    ): Prisma__mdl_course_categoriesClient<mdl_course_categoriesGetPayload<T>>

    /**
     * Count the number of Mdl_course_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mdl_course_categoriesCountArgs} args - Arguments to filter Mdl_course_categories to count.
     * @example
     * // Count the number of Mdl_course_categories
     * const count = await prisma.mdl_course_categories.count({
     *   where: {
     *     // ... the filter for the Mdl_course_categories we want to count
     *   }
     * })
    **/
    count<T extends mdl_course_categoriesCountArgs>(
      args?: Subset<T, mdl_course_categoriesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mdl_course_categoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mdl_course_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mdl_course_categoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Mdl_course_categoriesAggregateArgs>(args: Subset<T, Mdl_course_categoriesAggregateArgs>): PrismaPromise<GetMdl_course_categoriesAggregateType<T>>

    /**
     * Group by Mdl_course_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mdl_course_categoriesGroupByArgs} args - Group by arguments.
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
      T extends Mdl_course_categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Mdl_course_categoriesGroupByArgs['orderBy'] }
        : { orderBy?: Mdl_course_categoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Mdl_course_categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMdl_course_categoriesGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for mdl_course_categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__mdl_course_categoriesClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    courses<T extends mdl_courseFindManyArgs= {}>(args?: Subset<T, mdl_courseFindManyArgs>): PrismaPromise<Array<mdl_courseGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * mdl_course_categories base type for findUnique actions
   */
  export type mdl_course_categoriesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the mdl_course_categories
     * 
    **/
    select?: mdl_course_categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_course_categoriesInclude | null
    /**
     * Filter, which mdl_course_categories to fetch.
     * 
    **/
    where: mdl_course_categoriesWhereUniqueInput
  }

  /**
   * mdl_course_categories: findUnique
   */
  export interface mdl_course_categoriesFindUniqueArgs extends mdl_course_categoriesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * mdl_course_categories findUniqueOrThrow
   */
  export type mdl_course_categoriesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the mdl_course_categories
     * 
    **/
    select?: mdl_course_categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_course_categoriesInclude | null
    /**
     * Filter, which mdl_course_categories to fetch.
     * 
    **/
    where: mdl_course_categoriesWhereUniqueInput
  }


  /**
   * mdl_course_categories base type for findFirst actions
   */
  export type mdl_course_categoriesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the mdl_course_categories
     * 
    **/
    select?: mdl_course_categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_course_categoriesInclude | null
    /**
     * Filter, which mdl_course_categories to fetch.
     * 
    **/
    where?: mdl_course_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mdl_course_categories to fetch.
     * 
    **/
    orderBy?: Enumerable<mdl_course_categoriesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mdl_course_categories.
     * 
    **/
    cursor?: mdl_course_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mdl_course_categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mdl_course_categories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mdl_course_categories.
     * 
    **/
    distinct?: Enumerable<Mdl_course_categoriesScalarFieldEnum>
  }

  /**
   * mdl_course_categories: findFirst
   */
  export interface mdl_course_categoriesFindFirstArgs extends mdl_course_categoriesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * mdl_course_categories findFirstOrThrow
   */
  export type mdl_course_categoriesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the mdl_course_categories
     * 
    **/
    select?: mdl_course_categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_course_categoriesInclude | null
    /**
     * Filter, which mdl_course_categories to fetch.
     * 
    **/
    where?: mdl_course_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mdl_course_categories to fetch.
     * 
    **/
    orderBy?: Enumerable<mdl_course_categoriesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mdl_course_categories.
     * 
    **/
    cursor?: mdl_course_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mdl_course_categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mdl_course_categories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mdl_course_categories.
     * 
    **/
    distinct?: Enumerable<Mdl_course_categoriesScalarFieldEnum>
  }


  /**
   * mdl_course_categories findMany
   */
  export type mdl_course_categoriesFindManyArgs = {
    /**
     * Select specific fields to fetch from the mdl_course_categories
     * 
    **/
    select?: mdl_course_categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_course_categoriesInclude | null
    /**
     * Filter, which mdl_course_categories to fetch.
     * 
    **/
    where?: mdl_course_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mdl_course_categories to fetch.
     * 
    **/
    orderBy?: Enumerable<mdl_course_categoriesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mdl_course_categories.
     * 
    **/
    cursor?: mdl_course_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mdl_course_categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mdl_course_categories.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Mdl_course_categoriesScalarFieldEnum>
  }


  /**
   * mdl_course_categories create
   */
  export type mdl_course_categoriesCreateArgs = {
    /**
     * Select specific fields to fetch from the mdl_course_categories
     * 
    **/
    select?: mdl_course_categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_course_categoriesInclude | null
    /**
     * The data needed to create a mdl_course_categories.
     * 
    **/
    data: XOR<mdl_course_categoriesCreateInput, mdl_course_categoriesUncheckedCreateInput>
  }


  /**
   * mdl_course_categories createMany
   */
  export type mdl_course_categoriesCreateManyArgs = {
    /**
     * The data used to create many mdl_course_categories.
     * 
    **/
    data: Enumerable<mdl_course_categoriesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * mdl_course_categories update
   */
  export type mdl_course_categoriesUpdateArgs = {
    /**
     * Select specific fields to fetch from the mdl_course_categories
     * 
    **/
    select?: mdl_course_categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_course_categoriesInclude | null
    /**
     * The data needed to update a mdl_course_categories.
     * 
    **/
    data: XOR<mdl_course_categoriesUpdateInput, mdl_course_categoriesUncheckedUpdateInput>
    /**
     * Choose, which mdl_course_categories to update.
     * 
    **/
    where: mdl_course_categoriesWhereUniqueInput
  }


  /**
   * mdl_course_categories updateMany
   */
  export type mdl_course_categoriesUpdateManyArgs = {
    /**
     * The data used to update mdl_course_categories.
     * 
    **/
    data: XOR<mdl_course_categoriesUpdateManyMutationInput, mdl_course_categoriesUncheckedUpdateManyInput>
    /**
     * Filter which mdl_course_categories to update
     * 
    **/
    where?: mdl_course_categoriesWhereInput
  }


  /**
   * mdl_course_categories upsert
   */
  export type mdl_course_categoriesUpsertArgs = {
    /**
     * Select specific fields to fetch from the mdl_course_categories
     * 
    **/
    select?: mdl_course_categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_course_categoriesInclude | null
    /**
     * The filter to search for the mdl_course_categories to update in case it exists.
     * 
    **/
    where: mdl_course_categoriesWhereUniqueInput
    /**
     * In case the mdl_course_categories found by the `where` argument doesn't exist, create a new mdl_course_categories with this data.
     * 
    **/
    create: XOR<mdl_course_categoriesCreateInput, mdl_course_categoriesUncheckedCreateInput>
    /**
     * In case the mdl_course_categories was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<mdl_course_categoriesUpdateInput, mdl_course_categoriesUncheckedUpdateInput>
  }


  /**
   * mdl_course_categories delete
   */
  export type mdl_course_categoriesDeleteArgs = {
    /**
     * Select specific fields to fetch from the mdl_course_categories
     * 
    **/
    select?: mdl_course_categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_course_categoriesInclude | null
    /**
     * Filter which mdl_course_categories to delete.
     * 
    **/
    where: mdl_course_categoriesWhereUniqueInput
  }


  /**
   * mdl_course_categories deleteMany
   */
  export type mdl_course_categoriesDeleteManyArgs = {
    /**
     * Filter which mdl_course_categories to delete
     * 
    **/
    where?: mdl_course_categoriesWhereInput
  }


  /**
   * mdl_course_categories without action
   */
  export type mdl_course_categoriesArgs = {
    /**
     * Select specific fields to fetch from the mdl_course_categories
     * 
    **/
    select?: mdl_course_categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_course_categoriesInclude | null
  }



  /**
   * Model mdl_context
   */


  export type AggregateMdl_context = {
    _count: Mdl_contextCountAggregateOutputType | null
    _avg: Mdl_contextAvgAggregateOutputType | null
    _sum: Mdl_contextSumAggregateOutputType | null
    _min: Mdl_contextMinAggregateOutputType | null
    _max: Mdl_contextMaxAggregateOutputType | null
  }

  export type Mdl_contextAvgAggregateOutputType = {
    id: number | null
    instanceid: number | null
    contextlevel: number | null
  }

  export type Mdl_contextSumAggregateOutputType = {
    id: number | null
    instanceid: number | null
    contextlevel: number | null
  }

  export type Mdl_contextMinAggregateOutputType = {
    id: number | null
    instanceid: number | null
    contextlevel: number | null
  }

  export type Mdl_contextMaxAggregateOutputType = {
    id: number | null
    instanceid: number | null
    contextlevel: number | null
  }

  export type Mdl_contextCountAggregateOutputType = {
    id: number
    instanceid: number
    contextlevel: number
    _all: number
  }


  export type Mdl_contextAvgAggregateInputType = {
    id?: true
    instanceid?: true
    contextlevel?: true
  }

  export type Mdl_contextSumAggregateInputType = {
    id?: true
    instanceid?: true
    contextlevel?: true
  }

  export type Mdl_contextMinAggregateInputType = {
    id?: true
    instanceid?: true
    contextlevel?: true
  }

  export type Mdl_contextMaxAggregateInputType = {
    id?: true
    instanceid?: true
    contextlevel?: true
  }

  export type Mdl_contextCountAggregateInputType = {
    id?: true
    instanceid?: true
    contextlevel?: true
    _all?: true
  }

  export type Mdl_contextAggregateArgs = {
    /**
     * Filter which mdl_context to aggregate.
     * 
    **/
    where?: mdl_contextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mdl_contexts to fetch.
     * 
    **/
    orderBy?: Enumerable<mdl_contextOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: mdl_contextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mdl_contexts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mdl_contexts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mdl_contexts
    **/
    _count?: true | Mdl_contextCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mdl_contextAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mdl_contextSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mdl_contextMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mdl_contextMaxAggregateInputType
  }

  export type GetMdl_contextAggregateType<T extends Mdl_contextAggregateArgs> = {
        [P in keyof T & keyof AggregateMdl_context]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMdl_context[P]>
      : GetScalarType<T[P], AggregateMdl_context[P]>
  }




  export type Mdl_contextGroupByArgs = {
    where?: mdl_contextWhereInput
    orderBy?: Enumerable<mdl_contextOrderByWithAggregationInput>
    by: Array<Mdl_contextScalarFieldEnum>
    having?: mdl_contextScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mdl_contextCountAggregateInputType | true
    _avg?: Mdl_contextAvgAggregateInputType
    _sum?: Mdl_contextSumAggregateInputType
    _min?: Mdl_contextMinAggregateInputType
    _max?: Mdl_contextMaxAggregateInputType
  }


  export type Mdl_contextGroupByOutputType = {
    id: number
    instanceid: number
    contextlevel: number
    _count: Mdl_contextCountAggregateOutputType | null
    _avg: Mdl_contextAvgAggregateOutputType | null
    _sum: Mdl_contextSumAggregateOutputType | null
    _min: Mdl_contextMinAggregateOutputType | null
    _max: Mdl_contextMaxAggregateOutputType | null
  }

  type GetMdl_contextGroupByPayload<T extends Mdl_contextGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Mdl_contextGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mdl_contextGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mdl_contextGroupByOutputType[P]>
            : GetScalarType<T[P], Mdl_contextGroupByOutputType[P]>
        }
      >
    >


  export type mdl_contextSelect = {
    id?: boolean
    instanceid?: boolean
    contextlevel?: boolean
    course?: boolean | mdl_courseArgs
    files?: boolean | mdl_filesFindManyArgs
    _count?: boolean | Mdl_contextCountOutputTypeArgs
  }


  export type mdl_contextInclude = {
    course?: boolean | mdl_courseArgs
    files?: boolean | mdl_filesFindManyArgs
    _count?: boolean | Mdl_contextCountOutputTypeArgs
  } 

  export type mdl_contextGetPayload<S extends boolean | null | undefined | mdl_contextArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? mdl_context :
    S extends undefined ? never :
    S extends { include: any } & (mdl_contextArgs | mdl_contextFindManyArgs)
    ? mdl_context  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'course' ? mdl_courseGetPayload<S['include'][P]> :
        P extends 'files' ? Array < mdl_filesGetPayload<S['include'][P]>>  :
        P extends '_count' ? Mdl_contextCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (mdl_contextArgs | mdl_contextFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'course' ? mdl_courseGetPayload<S['select'][P]> :
        P extends 'files' ? Array < mdl_filesGetPayload<S['select'][P]>>  :
        P extends '_count' ? Mdl_contextCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof mdl_context ? mdl_context[P] : never
  } 
      : mdl_context


  type mdl_contextCountArgs = Merge<
    Omit<mdl_contextFindManyArgs, 'select' | 'include'> & {
      select?: Mdl_contextCountAggregateInputType | true
    }
  >

  export interface mdl_contextDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Mdl_context that matches the filter.
     * @param {mdl_contextFindUniqueArgs} args - Arguments to find a Mdl_context
     * @example
     * // Get one Mdl_context
     * const mdl_context = await prisma.mdl_context.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends mdl_contextFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, mdl_contextFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'mdl_context'> extends True ? Prisma__mdl_contextClient<mdl_contextGetPayload<T>> : Prisma__mdl_contextClient<mdl_contextGetPayload<T> | null, null>

    /**
     * Find one Mdl_context that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {mdl_contextFindUniqueOrThrowArgs} args - Arguments to find a Mdl_context
     * @example
     * // Get one Mdl_context
     * const mdl_context = await prisma.mdl_context.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends mdl_contextFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, mdl_contextFindUniqueOrThrowArgs>
    ): Prisma__mdl_contextClient<mdl_contextGetPayload<T>>

    /**
     * Find the first Mdl_context that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mdl_contextFindFirstArgs} args - Arguments to find a Mdl_context
     * @example
     * // Get one Mdl_context
     * const mdl_context = await prisma.mdl_context.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends mdl_contextFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, mdl_contextFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'mdl_context'> extends True ? Prisma__mdl_contextClient<mdl_contextGetPayload<T>> : Prisma__mdl_contextClient<mdl_contextGetPayload<T> | null, null>

    /**
     * Find the first Mdl_context that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mdl_contextFindFirstOrThrowArgs} args - Arguments to find a Mdl_context
     * @example
     * // Get one Mdl_context
     * const mdl_context = await prisma.mdl_context.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends mdl_contextFindFirstOrThrowArgs>(
      args?: SelectSubset<T, mdl_contextFindFirstOrThrowArgs>
    ): Prisma__mdl_contextClient<mdl_contextGetPayload<T>>

    /**
     * Find zero or more Mdl_contexts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mdl_contextFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mdl_contexts
     * const mdl_contexts = await prisma.mdl_context.findMany()
     * 
     * // Get first 10 Mdl_contexts
     * const mdl_contexts = await prisma.mdl_context.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mdl_contextWithIdOnly = await prisma.mdl_context.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends mdl_contextFindManyArgs>(
      args?: SelectSubset<T, mdl_contextFindManyArgs>
    ): PrismaPromise<Array<mdl_contextGetPayload<T>>>

    /**
     * Create a Mdl_context.
     * @param {mdl_contextCreateArgs} args - Arguments to create a Mdl_context.
     * @example
     * // Create one Mdl_context
     * const Mdl_context = await prisma.mdl_context.create({
     *   data: {
     *     // ... data to create a Mdl_context
     *   }
     * })
     * 
    **/
    create<T extends mdl_contextCreateArgs>(
      args: SelectSubset<T, mdl_contextCreateArgs>
    ): Prisma__mdl_contextClient<mdl_contextGetPayload<T>>

    /**
     * Create many Mdl_contexts.
     *     @param {mdl_contextCreateManyArgs} args - Arguments to create many Mdl_contexts.
     *     @example
     *     // Create many Mdl_contexts
     *     const mdl_context = await prisma.mdl_context.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends mdl_contextCreateManyArgs>(
      args?: SelectSubset<T, mdl_contextCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Mdl_context.
     * @param {mdl_contextDeleteArgs} args - Arguments to delete one Mdl_context.
     * @example
     * // Delete one Mdl_context
     * const Mdl_context = await prisma.mdl_context.delete({
     *   where: {
     *     // ... filter to delete one Mdl_context
     *   }
     * })
     * 
    **/
    delete<T extends mdl_contextDeleteArgs>(
      args: SelectSubset<T, mdl_contextDeleteArgs>
    ): Prisma__mdl_contextClient<mdl_contextGetPayload<T>>

    /**
     * Update one Mdl_context.
     * @param {mdl_contextUpdateArgs} args - Arguments to update one Mdl_context.
     * @example
     * // Update one Mdl_context
     * const mdl_context = await prisma.mdl_context.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends mdl_contextUpdateArgs>(
      args: SelectSubset<T, mdl_contextUpdateArgs>
    ): Prisma__mdl_contextClient<mdl_contextGetPayload<T>>

    /**
     * Delete zero or more Mdl_contexts.
     * @param {mdl_contextDeleteManyArgs} args - Arguments to filter Mdl_contexts to delete.
     * @example
     * // Delete a few Mdl_contexts
     * const { count } = await prisma.mdl_context.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends mdl_contextDeleteManyArgs>(
      args?: SelectSubset<T, mdl_contextDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mdl_contexts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mdl_contextUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mdl_contexts
     * const mdl_context = await prisma.mdl_context.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends mdl_contextUpdateManyArgs>(
      args: SelectSubset<T, mdl_contextUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Mdl_context.
     * @param {mdl_contextUpsertArgs} args - Arguments to update or create a Mdl_context.
     * @example
     * // Update or create a Mdl_context
     * const mdl_context = await prisma.mdl_context.upsert({
     *   create: {
     *     // ... data to create a Mdl_context
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mdl_context we want to update
     *   }
     * })
    **/
    upsert<T extends mdl_contextUpsertArgs>(
      args: SelectSubset<T, mdl_contextUpsertArgs>
    ): Prisma__mdl_contextClient<mdl_contextGetPayload<T>>

    /**
     * Count the number of Mdl_contexts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mdl_contextCountArgs} args - Arguments to filter Mdl_contexts to count.
     * @example
     * // Count the number of Mdl_contexts
     * const count = await prisma.mdl_context.count({
     *   where: {
     *     // ... the filter for the Mdl_contexts we want to count
     *   }
     * })
    **/
    count<T extends mdl_contextCountArgs>(
      args?: Subset<T, mdl_contextCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mdl_contextCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mdl_context.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mdl_contextAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Mdl_contextAggregateArgs>(args: Subset<T, Mdl_contextAggregateArgs>): PrismaPromise<GetMdl_contextAggregateType<T>>

    /**
     * Group by Mdl_context.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mdl_contextGroupByArgs} args - Group by arguments.
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
      T extends Mdl_contextGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Mdl_contextGroupByArgs['orderBy'] }
        : { orderBy?: Mdl_contextGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Mdl_contextGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMdl_contextGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for mdl_context.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__mdl_contextClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    course<T extends mdl_courseArgs= {}>(args?: Subset<T, mdl_courseArgs>): Prisma__mdl_courseClient<mdl_courseGetPayload<T> | Null>;

    files<T extends mdl_filesFindManyArgs= {}>(args?: Subset<T, mdl_filesFindManyArgs>): PrismaPromise<Array<mdl_filesGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * mdl_context base type for findUnique actions
   */
  export type mdl_contextFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the mdl_context
     * 
    **/
    select?: mdl_contextSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_contextInclude | null
    /**
     * Filter, which mdl_context to fetch.
     * 
    **/
    where: mdl_contextWhereUniqueInput
  }

  /**
   * mdl_context: findUnique
   */
  export interface mdl_contextFindUniqueArgs extends mdl_contextFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * mdl_context findUniqueOrThrow
   */
  export type mdl_contextFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the mdl_context
     * 
    **/
    select?: mdl_contextSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_contextInclude | null
    /**
     * Filter, which mdl_context to fetch.
     * 
    **/
    where: mdl_contextWhereUniqueInput
  }


  /**
   * mdl_context base type for findFirst actions
   */
  export type mdl_contextFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the mdl_context
     * 
    **/
    select?: mdl_contextSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_contextInclude | null
    /**
     * Filter, which mdl_context to fetch.
     * 
    **/
    where?: mdl_contextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mdl_contexts to fetch.
     * 
    **/
    orderBy?: Enumerable<mdl_contextOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mdl_contexts.
     * 
    **/
    cursor?: mdl_contextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mdl_contexts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mdl_contexts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mdl_contexts.
     * 
    **/
    distinct?: Enumerable<Mdl_contextScalarFieldEnum>
  }

  /**
   * mdl_context: findFirst
   */
  export interface mdl_contextFindFirstArgs extends mdl_contextFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * mdl_context findFirstOrThrow
   */
  export type mdl_contextFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the mdl_context
     * 
    **/
    select?: mdl_contextSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_contextInclude | null
    /**
     * Filter, which mdl_context to fetch.
     * 
    **/
    where?: mdl_contextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mdl_contexts to fetch.
     * 
    **/
    orderBy?: Enumerable<mdl_contextOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mdl_contexts.
     * 
    **/
    cursor?: mdl_contextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mdl_contexts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mdl_contexts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mdl_contexts.
     * 
    **/
    distinct?: Enumerable<Mdl_contextScalarFieldEnum>
  }


  /**
   * mdl_context findMany
   */
  export type mdl_contextFindManyArgs = {
    /**
     * Select specific fields to fetch from the mdl_context
     * 
    **/
    select?: mdl_contextSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_contextInclude | null
    /**
     * Filter, which mdl_contexts to fetch.
     * 
    **/
    where?: mdl_contextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mdl_contexts to fetch.
     * 
    **/
    orderBy?: Enumerable<mdl_contextOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mdl_contexts.
     * 
    **/
    cursor?: mdl_contextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mdl_contexts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mdl_contexts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Mdl_contextScalarFieldEnum>
  }


  /**
   * mdl_context create
   */
  export type mdl_contextCreateArgs = {
    /**
     * Select specific fields to fetch from the mdl_context
     * 
    **/
    select?: mdl_contextSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_contextInclude | null
    /**
     * The data needed to create a mdl_context.
     * 
    **/
    data: XOR<mdl_contextCreateInput, mdl_contextUncheckedCreateInput>
  }


  /**
   * mdl_context createMany
   */
  export type mdl_contextCreateManyArgs = {
    /**
     * The data used to create many mdl_contexts.
     * 
    **/
    data: Enumerable<mdl_contextCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * mdl_context update
   */
  export type mdl_contextUpdateArgs = {
    /**
     * Select specific fields to fetch from the mdl_context
     * 
    **/
    select?: mdl_contextSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_contextInclude | null
    /**
     * The data needed to update a mdl_context.
     * 
    **/
    data: XOR<mdl_contextUpdateInput, mdl_contextUncheckedUpdateInput>
    /**
     * Choose, which mdl_context to update.
     * 
    **/
    where: mdl_contextWhereUniqueInput
  }


  /**
   * mdl_context updateMany
   */
  export type mdl_contextUpdateManyArgs = {
    /**
     * The data used to update mdl_contexts.
     * 
    **/
    data: XOR<mdl_contextUpdateManyMutationInput, mdl_contextUncheckedUpdateManyInput>
    /**
     * Filter which mdl_contexts to update
     * 
    **/
    where?: mdl_contextWhereInput
  }


  /**
   * mdl_context upsert
   */
  export type mdl_contextUpsertArgs = {
    /**
     * Select specific fields to fetch from the mdl_context
     * 
    **/
    select?: mdl_contextSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_contextInclude | null
    /**
     * The filter to search for the mdl_context to update in case it exists.
     * 
    **/
    where: mdl_contextWhereUniqueInput
    /**
     * In case the mdl_context found by the `where` argument doesn't exist, create a new mdl_context with this data.
     * 
    **/
    create: XOR<mdl_contextCreateInput, mdl_contextUncheckedCreateInput>
    /**
     * In case the mdl_context was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<mdl_contextUpdateInput, mdl_contextUncheckedUpdateInput>
  }


  /**
   * mdl_context delete
   */
  export type mdl_contextDeleteArgs = {
    /**
     * Select specific fields to fetch from the mdl_context
     * 
    **/
    select?: mdl_contextSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_contextInclude | null
    /**
     * Filter which mdl_context to delete.
     * 
    **/
    where: mdl_contextWhereUniqueInput
  }


  /**
   * mdl_context deleteMany
   */
  export type mdl_contextDeleteManyArgs = {
    /**
     * Filter which mdl_contexts to delete
     * 
    **/
    where?: mdl_contextWhereInput
  }


  /**
   * mdl_context without action
   */
  export type mdl_contextArgs = {
    /**
     * Select specific fields to fetch from the mdl_context
     * 
    **/
    select?: mdl_contextSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_contextInclude | null
  }



  /**
   * Model mdl_files
   */


  export type AggregateMdl_files = {
    _count: Mdl_filesCountAggregateOutputType | null
    _avg: Mdl_filesAvgAggregateOutputType | null
    _sum: Mdl_filesSumAggregateOutputType | null
    _min: Mdl_filesMinAggregateOutputType | null
    _max: Mdl_filesMaxAggregateOutputType | null
  }

  export type Mdl_filesAvgAggregateOutputType = {
    id: number | null
    contextid: number | null
  }

  export type Mdl_filesSumAggregateOutputType = {
    id: number | null
    contextid: number | null
  }

  export type Mdl_filesMinAggregateOutputType = {
    id: number | null
    contextid: number | null
    filename: string | null
    component: string | null
  }

  export type Mdl_filesMaxAggregateOutputType = {
    id: number | null
    contextid: number | null
    filename: string | null
    component: string | null
  }

  export type Mdl_filesCountAggregateOutputType = {
    id: number
    contextid: number
    filename: number
    component: number
    _all: number
  }


  export type Mdl_filesAvgAggregateInputType = {
    id?: true
    contextid?: true
  }

  export type Mdl_filesSumAggregateInputType = {
    id?: true
    contextid?: true
  }

  export type Mdl_filesMinAggregateInputType = {
    id?: true
    contextid?: true
    filename?: true
    component?: true
  }

  export type Mdl_filesMaxAggregateInputType = {
    id?: true
    contextid?: true
    filename?: true
    component?: true
  }

  export type Mdl_filesCountAggregateInputType = {
    id?: true
    contextid?: true
    filename?: true
    component?: true
    _all?: true
  }

  export type Mdl_filesAggregateArgs = {
    /**
     * Filter which mdl_files to aggregate.
     * 
    **/
    where?: mdl_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mdl_files to fetch.
     * 
    **/
    orderBy?: Enumerable<mdl_filesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: mdl_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mdl_files from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mdl_files.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mdl_files
    **/
    _count?: true | Mdl_filesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mdl_filesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mdl_filesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mdl_filesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mdl_filesMaxAggregateInputType
  }

  export type GetMdl_filesAggregateType<T extends Mdl_filesAggregateArgs> = {
        [P in keyof T & keyof AggregateMdl_files]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMdl_files[P]>
      : GetScalarType<T[P], AggregateMdl_files[P]>
  }




  export type Mdl_filesGroupByArgs = {
    where?: mdl_filesWhereInput
    orderBy?: Enumerable<mdl_filesOrderByWithAggregationInput>
    by: Array<Mdl_filesScalarFieldEnum>
    having?: mdl_filesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mdl_filesCountAggregateInputType | true
    _avg?: Mdl_filesAvgAggregateInputType
    _sum?: Mdl_filesSumAggregateInputType
    _min?: Mdl_filesMinAggregateInputType
    _max?: Mdl_filesMaxAggregateInputType
  }


  export type Mdl_filesGroupByOutputType = {
    id: number
    contextid: number
    filename: string
    component: string
    _count: Mdl_filesCountAggregateOutputType | null
    _avg: Mdl_filesAvgAggregateOutputType | null
    _sum: Mdl_filesSumAggregateOutputType | null
    _min: Mdl_filesMinAggregateOutputType | null
    _max: Mdl_filesMaxAggregateOutputType | null
  }

  type GetMdl_filesGroupByPayload<T extends Mdl_filesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Mdl_filesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mdl_filesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mdl_filesGroupByOutputType[P]>
            : GetScalarType<T[P], Mdl_filesGroupByOutputType[P]>
        }
      >
    >


  export type mdl_filesSelect = {
    id?: boolean
    contextid?: boolean
    filename?: boolean
    component?: boolean
    context?: boolean | mdl_contextArgs
  }


  export type mdl_filesInclude = {
    context?: boolean | mdl_contextArgs
  } 

  export type mdl_filesGetPayload<S extends boolean | null | undefined | mdl_filesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? mdl_files :
    S extends undefined ? never :
    S extends { include: any } & (mdl_filesArgs | mdl_filesFindManyArgs)
    ? mdl_files  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'context' ? mdl_contextGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (mdl_filesArgs | mdl_filesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'context' ? mdl_contextGetPayload<S['select'][P]> :  P extends keyof mdl_files ? mdl_files[P] : never
  } 
      : mdl_files


  type mdl_filesCountArgs = Merge<
    Omit<mdl_filesFindManyArgs, 'select' | 'include'> & {
      select?: Mdl_filesCountAggregateInputType | true
    }
  >

  export interface mdl_filesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Mdl_files that matches the filter.
     * @param {mdl_filesFindUniqueArgs} args - Arguments to find a Mdl_files
     * @example
     * // Get one Mdl_files
     * const mdl_files = await prisma.mdl_files.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends mdl_filesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, mdl_filesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'mdl_files'> extends True ? Prisma__mdl_filesClient<mdl_filesGetPayload<T>> : Prisma__mdl_filesClient<mdl_filesGetPayload<T> | null, null>

    /**
     * Find one Mdl_files that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {mdl_filesFindUniqueOrThrowArgs} args - Arguments to find a Mdl_files
     * @example
     * // Get one Mdl_files
     * const mdl_files = await prisma.mdl_files.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends mdl_filesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, mdl_filesFindUniqueOrThrowArgs>
    ): Prisma__mdl_filesClient<mdl_filesGetPayload<T>>

    /**
     * Find the first Mdl_files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mdl_filesFindFirstArgs} args - Arguments to find a Mdl_files
     * @example
     * // Get one Mdl_files
     * const mdl_files = await prisma.mdl_files.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends mdl_filesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, mdl_filesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'mdl_files'> extends True ? Prisma__mdl_filesClient<mdl_filesGetPayload<T>> : Prisma__mdl_filesClient<mdl_filesGetPayload<T> | null, null>

    /**
     * Find the first Mdl_files that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mdl_filesFindFirstOrThrowArgs} args - Arguments to find a Mdl_files
     * @example
     * // Get one Mdl_files
     * const mdl_files = await prisma.mdl_files.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends mdl_filesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, mdl_filesFindFirstOrThrowArgs>
    ): Prisma__mdl_filesClient<mdl_filesGetPayload<T>>

    /**
     * Find zero or more Mdl_files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mdl_filesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mdl_files
     * const mdl_files = await prisma.mdl_files.findMany()
     * 
     * // Get first 10 Mdl_files
     * const mdl_files = await prisma.mdl_files.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mdl_filesWithIdOnly = await prisma.mdl_files.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends mdl_filesFindManyArgs>(
      args?: SelectSubset<T, mdl_filesFindManyArgs>
    ): PrismaPromise<Array<mdl_filesGetPayload<T>>>

    /**
     * Create a Mdl_files.
     * @param {mdl_filesCreateArgs} args - Arguments to create a Mdl_files.
     * @example
     * // Create one Mdl_files
     * const Mdl_files = await prisma.mdl_files.create({
     *   data: {
     *     // ... data to create a Mdl_files
     *   }
     * })
     * 
    **/
    create<T extends mdl_filesCreateArgs>(
      args: SelectSubset<T, mdl_filesCreateArgs>
    ): Prisma__mdl_filesClient<mdl_filesGetPayload<T>>

    /**
     * Create many Mdl_files.
     *     @param {mdl_filesCreateManyArgs} args - Arguments to create many Mdl_files.
     *     @example
     *     // Create many Mdl_files
     *     const mdl_files = await prisma.mdl_files.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends mdl_filesCreateManyArgs>(
      args?: SelectSubset<T, mdl_filesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Mdl_files.
     * @param {mdl_filesDeleteArgs} args - Arguments to delete one Mdl_files.
     * @example
     * // Delete one Mdl_files
     * const Mdl_files = await prisma.mdl_files.delete({
     *   where: {
     *     // ... filter to delete one Mdl_files
     *   }
     * })
     * 
    **/
    delete<T extends mdl_filesDeleteArgs>(
      args: SelectSubset<T, mdl_filesDeleteArgs>
    ): Prisma__mdl_filesClient<mdl_filesGetPayload<T>>

    /**
     * Update one Mdl_files.
     * @param {mdl_filesUpdateArgs} args - Arguments to update one Mdl_files.
     * @example
     * // Update one Mdl_files
     * const mdl_files = await prisma.mdl_files.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends mdl_filesUpdateArgs>(
      args: SelectSubset<T, mdl_filesUpdateArgs>
    ): Prisma__mdl_filesClient<mdl_filesGetPayload<T>>

    /**
     * Delete zero or more Mdl_files.
     * @param {mdl_filesDeleteManyArgs} args - Arguments to filter Mdl_files to delete.
     * @example
     * // Delete a few Mdl_files
     * const { count } = await prisma.mdl_files.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends mdl_filesDeleteManyArgs>(
      args?: SelectSubset<T, mdl_filesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mdl_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mdl_filesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mdl_files
     * const mdl_files = await prisma.mdl_files.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends mdl_filesUpdateManyArgs>(
      args: SelectSubset<T, mdl_filesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Mdl_files.
     * @param {mdl_filesUpsertArgs} args - Arguments to update or create a Mdl_files.
     * @example
     * // Update or create a Mdl_files
     * const mdl_files = await prisma.mdl_files.upsert({
     *   create: {
     *     // ... data to create a Mdl_files
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mdl_files we want to update
     *   }
     * })
    **/
    upsert<T extends mdl_filesUpsertArgs>(
      args: SelectSubset<T, mdl_filesUpsertArgs>
    ): Prisma__mdl_filesClient<mdl_filesGetPayload<T>>

    /**
     * Count the number of Mdl_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mdl_filesCountArgs} args - Arguments to filter Mdl_files to count.
     * @example
     * // Count the number of Mdl_files
     * const count = await prisma.mdl_files.count({
     *   where: {
     *     // ... the filter for the Mdl_files we want to count
     *   }
     * })
    **/
    count<T extends mdl_filesCountArgs>(
      args?: Subset<T, mdl_filesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mdl_filesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mdl_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mdl_filesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Mdl_filesAggregateArgs>(args: Subset<T, Mdl_filesAggregateArgs>): PrismaPromise<GetMdl_filesAggregateType<T>>

    /**
     * Group by Mdl_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mdl_filesGroupByArgs} args - Group by arguments.
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
      T extends Mdl_filesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Mdl_filesGroupByArgs['orderBy'] }
        : { orderBy?: Mdl_filesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Mdl_filesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMdl_filesGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for mdl_files.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__mdl_filesClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    context<T extends mdl_contextArgs= {}>(args?: Subset<T, mdl_contextArgs>): Prisma__mdl_contextClient<mdl_contextGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * mdl_files base type for findUnique actions
   */
  export type mdl_filesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the mdl_files
     * 
    **/
    select?: mdl_filesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_filesInclude | null
    /**
     * Filter, which mdl_files to fetch.
     * 
    **/
    where: mdl_filesWhereUniqueInput
  }

  /**
   * mdl_files: findUnique
   */
  export interface mdl_filesFindUniqueArgs extends mdl_filesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * mdl_files findUniqueOrThrow
   */
  export type mdl_filesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the mdl_files
     * 
    **/
    select?: mdl_filesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_filesInclude | null
    /**
     * Filter, which mdl_files to fetch.
     * 
    **/
    where: mdl_filesWhereUniqueInput
  }


  /**
   * mdl_files base type for findFirst actions
   */
  export type mdl_filesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the mdl_files
     * 
    **/
    select?: mdl_filesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_filesInclude | null
    /**
     * Filter, which mdl_files to fetch.
     * 
    **/
    where?: mdl_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mdl_files to fetch.
     * 
    **/
    orderBy?: Enumerable<mdl_filesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mdl_files.
     * 
    **/
    cursor?: mdl_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mdl_files from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mdl_files.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mdl_files.
     * 
    **/
    distinct?: Enumerable<Mdl_filesScalarFieldEnum>
  }

  /**
   * mdl_files: findFirst
   */
  export interface mdl_filesFindFirstArgs extends mdl_filesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * mdl_files findFirstOrThrow
   */
  export type mdl_filesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the mdl_files
     * 
    **/
    select?: mdl_filesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_filesInclude | null
    /**
     * Filter, which mdl_files to fetch.
     * 
    **/
    where?: mdl_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mdl_files to fetch.
     * 
    **/
    orderBy?: Enumerable<mdl_filesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mdl_files.
     * 
    **/
    cursor?: mdl_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mdl_files from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mdl_files.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mdl_files.
     * 
    **/
    distinct?: Enumerable<Mdl_filesScalarFieldEnum>
  }


  /**
   * mdl_files findMany
   */
  export type mdl_filesFindManyArgs = {
    /**
     * Select specific fields to fetch from the mdl_files
     * 
    **/
    select?: mdl_filesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_filesInclude | null
    /**
     * Filter, which mdl_files to fetch.
     * 
    **/
    where?: mdl_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mdl_files to fetch.
     * 
    **/
    orderBy?: Enumerable<mdl_filesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mdl_files.
     * 
    **/
    cursor?: mdl_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mdl_files from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mdl_files.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Mdl_filesScalarFieldEnum>
  }


  /**
   * mdl_files create
   */
  export type mdl_filesCreateArgs = {
    /**
     * Select specific fields to fetch from the mdl_files
     * 
    **/
    select?: mdl_filesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_filesInclude | null
    /**
     * The data needed to create a mdl_files.
     * 
    **/
    data: XOR<mdl_filesCreateInput, mdl_filesUncheckedCreateInput>
  }


  /**
   * mdl_files createMany
   */
  export type mdl_filesCreateManyArgs = {
    /**
     * The data used to create many mdl_files.
     * 
    **/
    data: Enumerable<mdl_filesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * mdl_files update
   */
  export type mdl_filesUpdateArgs = {
    /**
     * Select specific fields to fetch from the mdl_files
     * 
    **/
    select?: mdl_filesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_filesInclude | null
    /**
     * The data needed to update a mdl_files.
     * 
    **/
    data: XOR<mdl_filesUpdateInput, mdl_filesUncheckedUpdateInput>
    /**
     * Choose, which mdl_files to update.
     * 
    **/
    where: mdl_filesWhereUniqueInput
  }


  /**
   * mdl_files updateMany
   */
  export type mdl_filesUpdateManyArgs = {
    /**
     * The data used to update mdl_files.
     * 
    **/
    data: XOR<mdl_filesUpdateManyMutationInput, mdl_filesUncheckedUpdateManyInput>
    /**
     * Filter which mdl_files to update
     * 
    **/
    where?: mdl_filesWhereInput
  }


  /**
   * mdl_files upsert
   */
  export type mdl_filesUpsertArgs = {
    /**
     * Select specific fields to fetch from the mdl_files
     * 
    **/
    select?: mdl_filesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_filesInclude | null
    /**
     * The filter to search for the mdl_files to update in case it exists.
     * 
    **/
    where: mdl_filesWhereUniqueInput
    /**
     * In case the mdl_files found by the `where` argument doesn't exist, create a new mdl_files with this data.
     * 
    **/
    create: XOR<mdl_filesCreateInput, mdl_filesUncheckedCreateInput>
    /**
     * In case the mdl_files was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<mdl_filesUpdateInput, mdl_filesUncheckedUpdateInput>
  }


  /**
   * mdl_files delete
   */
  export type mdl_filesDeleteArgs = {
    /**
     * Select specific fields to fetch from the mdl_files
     * 
    **/
    select?: mdl_filesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_filesInclude | null
    /**
     * Filter which mdl_files to delete.
     * 
    **/
    where: mdl_filesWhereUniqueInput
  }


  /**
   * mdl_files deleteMany
   */
  export type mdl_filesDeleteManyArgs = {
    /**
     * Filter which mdl_files to delete
     * 
    **/
    where?: mdl_filesWhereInput
  }


  /**
   * mdl_files without action
   */
  export type mdl_filesArgs = {
    /**
     * Select specific fields to fetch from the mdl_files
     * 
    **/
    select?: mdl_filesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_filesInclude | null
  }



  /**
   * Model mdl_customfield_data
   */


  export type AggregateMdl_customfield_data = {
    _count: Mdl_customfield_dataCountAggregateOutputType | null
    _avg: Mdl_customfield_dataAvgAggregateOutputType | null
    _sum: Mdl_customfield_dataSumAggregateOutputType | null
    _min: Mdl_customfield_dataMinAggregateOutputType | null
    _max: Mdl_customfield_dataMaxAggregateOutputType | null
  }

  export type Mdl_customfield_dataAvgAggregateOutputType = {
    id: number | null
    instanceid: number | null
    fieldid: number | null
    valueformat: number | null
  }

  export type Mdl_customfield_dataSumAggregateOutputType = {
    id: number | null
    instanceid: number | null
    fieldid: number | null
    valueformat: number | null
  }

  export type Mdl_customfield_dataMinAggregateOutputType = {
    id: number | null
    instanceid: number | null
    fieldid: number | null
    value: string | null
    valueformat: number | null
    charvalue: string | null
  }

  export type Mdl_customfield_dataMaxAggregateOutputType = {
    id: number | null
    instanceid: number | null
    fieldid: number | null
    value: string | null
    valueformat: number | null
    charvalue: string | null
  }

  export type Mdl_customfield_dataCountAggregateOutputType = {
    id: number
    instanceid: number
    fieldid: number
    value: number
    valueformat: number
    charvalue: number
    _all: number
  }


  export type Mdl_customfield_dataAvgAggregateInputType = {
    id?: true
    instanceid?: true
    fieldid?: true
    valueformat?: true
  }

  export type Mdl_customfield_dataSumAggregateInputType = {
    id?: true
    instanceid?: true
    fieldid?: true
    valueformat?: true
  }

  export type Mdl_customfield_dataMinAggregateInputType = {
    id?: true
    instanceid?: true
    fieldid?: true
    value?: true
    valueformat?: true
    charvalue?: true
  }

  export type Mdl_customfield_dataMaxAggregateInputType = {
    id?: true
    instanceid?: true
    fieldid?: true
    value?: true
    valueformat?: true
    charvalue?: true
  }

  export type Mdl_customfield_dataCountAggregateInputType = {
    id?: true
    instanceid?: true
    fieldid?: true
    value?: true
    valueformat?: true
    charvalue?: true
    _all?: true
  }

  export type Mdl_customfield_dataAggregateArgs = {
    /**
     * Filter which mdl_customfield_data to aggregate.
     * 
    **/
    where?: mdl_customfield_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mdl_customfield_data to fetch.
     * 
    **/
    orderBy?: Enumerable<mdl_customfield_dataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: mdl_customfield_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mdl_customfield_data from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mdl_customfield_data.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mdl_customfield_data
    **/
    _count?: true | Mdl_customfield_dataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mdl_customfield_dataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mdl_customfield_dataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mdl_customfield_dataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mdl_customfield_dataMaxAggregateInputType
  }

  export type GetMdl_customfield_dataAggregateType<T extends Mdl_customfield_dataAggregateArgs> = {
        [P in keyof T & keyof AggregateMdl_customfield_data]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMdl_customfield_data[P]>
      : GetScalarType<T[P], AggregateMdl_customfield_data[P]>
  }




  export type Mdl_customfield_dataGroupByArgs = {
    where?: mdl_customfield_dataWhereInput
    orderBy?: Enumerable<mdl_customfield_dataOrderByWithAggregationInput>
    by: Array<Mdl_customfield_dataScalarFieldEnum>
    having?: mdl_customfield_dataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mdl_customfield_dataCountAggregateInputType | true
    _avg?: Mdl_customfield_dataAvgAggregateInputType
    _sum?: Mdl_customfield_dataSumAggregateInputType
    _min?: Mdl_customfield_dataMinAggregateInputType
    _max?: Mdl_customfield_dataMaxAggregateInputType
  }


  export type Mdl_customfield_dataGroupByOutputType = {
    id: number
    instanceid: number
    fieldid: number
    value: string
    valueformat: number
    charvalue: string
    _count: Mdl_customfield_dataCountAggregateOutputType | null
    _avg: Mdl_customfield_dataAvgAggregateOutputType | null
    _sum: Mdl_customfield_dataSumAggregateOutputType | null
    _min: Mdl_customfield_dataMinAggregateOutputType | null
    _max: Mdl_customfield_dataMaxAggregateOutputType | null
  }

  type GetMdl_customfield_dataGroupByPayload<T extends Mdl_customfield_dataGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Mdl_customfield_dataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mdl_customfield_dataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mdl_customfield_dataGroupByOutputType[P]>
            : GetScalarType<T[P], Mdl_customfield_dataGroupByOutputType[P]>
        }
      >
    >


  export type mdl_customfield_dataSelect = {
    id?: boolean
    instanceid?: boolean
    fieldid?: boolean
    value?: boolean
    valueformat?: boolean
    charvalue?: boolean
    field_name?: boolean | mdl_customfield_fieldArgs
    course?: boolean | mdl_courseArgs
  }


  export type mdl_customfield_dataInclude = {
    field_name?: boolean | mdl_customfield_fieldArgs
    course?: boolean | mdl_courseArgs
  } 

  export type mdl_customfield_dataGetPayload<S extends boolean | null | undefined | mdl_customfield_dataArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? mdl_customfield_data :
    S extends undefined ? never :
    S extends { include: any } & (mdl_customfield_dataArgs | mdl_customfield_dataFindManyArgs)
    ? mdl_customfield_data  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'field_name' ? mdl_customfield_fieldGetPayload<S['include'][P]> :
        P extends 'course' ? mdl_courseGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (mdl_customfield_dataArgs | mdl_customfield_dataFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'field_name' ? mdl_customfield_fieldGetPayload<S['select'][P]> :
        P extends 'course' ? mdl_courseGetPayload<S['select'][P]> :  P extends keyof mdl_customfield_data ? mdl_customfield_data[P] : never
  } 
      : mdl_customfield_data


  type mdl_customfield_dataCountArgs = Merge<
    Omit<mdl_customfield_dataFindManyArgs, 'select' | 'include'> & {
      select?: Mdl_customfield_dataCountAggregateInputType | true
    }
  >

  export interface mdl_customfield_dataDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Mdl_customfield_data that matches the filter.
     * @param {mdl_customfield_dataFindUniqueArgs} args - Arguments to find a Mdl_customfield_data
     * @example
     * // Get one Mdl_customfield_data
     * const mdl_customfield_data = await prisma.mdl_customfield_data.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends mdl_customfield_dataFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, mdl_customfield_dataFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'mdl_customfield_data'> extends True ? Prisma__mdl_customfield_dataClient<mdl_customfield_dataGetPayload<T>> : Prisma__mdl_customfield_dataClient<mdl_customfield_dataGetPayload<T> | null, null>

    /**
     * Find one Mdl_customfield_data that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {mdl_customfield_dataFindUniqueOrThrowArgs} args - Arguments to find a Mdl_customfield_data
     * @example
     * // Get one Mdl_customfield_data
     * const mdl_customfield_data = await prisma.mdl_customfield_data.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends mdl_customfield_dataFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, mdl_customfield_dataFindUniqueOrThrowArgs>
    ): Prisma__mdl_customfield_dataClient<mdl_customfield_dataGetPayload<T>>

    /**
     * Find the first Mdl_customfield_data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mdl_customfield_dataFindFirstArgs} args - Arguments to find a Mdl_customfield_data
     * @example
     * // Get one Mdl_customfield_data
     * const mdl_customfield_data = await prisma.mdl_customfield_data.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends mdl_customfield_dataFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, mdl_customfield_dataFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'mdl_customfield_data'> extends True ? Prisma__mdl_customfield_dataClient<mdl_customfield_dataGetPayload<T>> : Prisma__mdl_customfield_dataClient<mdl_customfield_dataGetPayload<T> | null, null>

    /**
     * Find the first Mdl_customfield_data that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mdl_customfield_dataFindFirstOrThrowArgs} args - Arguments to find a Mdl_customfield_data
     * @example
     * // Get one Mdl_customfield_data
     * const mdl_customfield_data = await prisma.mdl_customfield_data.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends mdl_customfield_dataFindFirstOrThrowArgs>(
      args?: SelectSubset<T, mdl_customfield_dataFindFirstOrThrowArgs>
    ): Prisma__mdl_customfield_dataClient<mdl_customfield_dataGetPayload<T>>

    /**
     * Find zero or more Mdl_customfield_data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mdl_customfield_dataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mdl_customfield_data
     * const mdl_customfield_data = await prisma.mdl_customfield_data.findMany()
     * 
     * // Get first 10 Mdl_customfield_data
     * const mdl_customfield_data = await prisma.mdl_customfield_data.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mdl_customfield_dataWithIdOnly = await prisma.mdl_customfield_data.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends mdl_customfield_dataFindManyArgs>(
      args?: SelectSubset<T, mdl_customfield_dataFindManyArgs>
    ): PrismaPromise<Array<mdl_customfield_dataGetPayload<T>>>

    /**
     * Create a Mdl_customfield_data.
     * @param {mdl_customfield_dataCreateArgs} args - Arguments to create a Mdl_customfield_data.
     * @example
     * // Create one Mdl_customfield_data
     * const Mdl_customfield_data = await prisma.mdl_customfield_data.create({
     *   data: {
     *     // ... data to create a Mdl_customfield_data
     *   }
     * })
     * 
    **/
    create<T extends mdl_customfield_dataCreateArgs>(
      args: SelectSubset<T, mdl_customfield_dataCreateArgs>
    ): Prisma__mdl_customfield_dataClient<mdl_customfield_dataGetPayload<T>>

    /**
     * Create many Mdl_customfield_data.
     *     @param {mdl_customfield_dataCreateManyArgs} args - Arguments to create many Mdl_customfield_data.
     *     @example
     *     // Create many Mdl_customfield_data
     *     const mdl_customfield_data = await prisma.mdl_customfield_data.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends mdl_customfield_dataCreateManyArgs>(
      args?: SelectSubset<T, mdl_customfield_dataCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Mdl_customfield_data.
     * @param {mdl_customfield_dataDeleteArgs} args - Arguments to delete one Mdl_customfield_data.
     * @example
     * // Delete one Mdl_customfield_data
     * const Mdl_customfield_data = await prisma.mdl_customfield_data.delete({
     *   where: {
     *     // ... filter to delete one Mdl_customfield_data
     *   }
     * })
     * 
    **/
    delete<T extends mdl_customfield_dataDeleteArgs>(
      args: SelectSubset<T, mdl_customfield_dataDeleteArgs>
    ): Prisma__mdl_customfield_dataClient<mdl_customfield_dataGetPayload<T>>

    /**
     * Update one Mdl_customfield_data.
     * @param {mdl_customfield_dataUpdateArgs} args - Arguments to update one Mdl_customfield_data.
     * @example
     * // Update one Mdl_customfield_data
     * const mdl_customfield_data = await prisma.mdl_customfield_data.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends mdl_customfield_dataUpdateArgs>(
      args: SelectSubset<T, mdl_customfield_dataUpdateArgs>
    ): Prisma__mdl_customfield_dataClient<mdl_customfield_dataGetPayload<T>>

    /**
     * Delete zero or more Mdl_customfield_data.
     * @param {mdl_customfield_dataDeleteManyArgs} args - Arguments to filter Mdl_customfield_data to delete.
     * @example
     * // Delete a few Mdl_customfield_data
     * const { count } = await prisma.mdl_customfield_data.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends mdl_customfield_dataDeleteManyArgs>(
      args?: SelectSubset<T, mdl_customfield_dataDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mdl_customfield_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mdl_customfield_dataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mdl_customfield_data
     * const mdl_customfield_data = await prisma.mdl_customfield_data.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends mdl_customfield_dataUpdateManyArgs>(
      args: SelectSubset<T, mdl_customfield_dataUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Mdl_customfield_data.
     * @param {mdl_customfield_dataUpsertArgs} args - Arguments to update or create a Mdl_customfield_data.
     * @example
     * // Update or create a Mdl_customfield_data
     * const mdl_customfield_data = await prisma.mdl_customfield_data.upsert({
     *   create: {
     *     // ... data to create a Mdl_customfield_data
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mdl_customfield_data we want to update
     *   }
     * })
    **/
    upsert<T extends mdl_customfield_dataUpsertArgs>(
      args: SelectSubset<T, mdl_customfield_dataUpsertArgs>
    ): Prisma__mdl_customfield_dataClient<mdl_customfield_dataGetPayload<T>>

    /**
     * Count the number of Mdl_customfield_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mdl_customfield_dataCountArgs} args - Arguments to filter Mdl_customfield_data to count.
     * @example
     * // Count the number of Mdl_customfield_data
     * const count = await prisma.mdl_customfield_data.count({
     *   where: {
     *     // ... the filter for the Mdl_customfield_data we want to count
     *   }
     * })
    **/
    count<T extends mdl_customfield_dataCountArgs>(
      args?: Subset<T, mdl_customfield_dataCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mdl_customfield_dataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mdl_customfield_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mdl_customfield_dataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Mdl_customfield_dataAggregateArgs>(args: Subset<T, Mdl_customfield_dataAggregateArgs>): PrismaPromise<GetMdl_customfield_dataAggregateType<T>>

    /**
     * Group by Mdl_customfield_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mdl_customfield_dataGroupByArgs} args - Group by arguments.
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
      T extends Mdl_customfield_dataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Mdl_customfield_dataGroupByArgs['orderBy'] }
        : { orderBy?: Mdl_customfield_dataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Mdl_customfield_dataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMdl_customfield_dataGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for mdl_customfield_data.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__mdl_customfield_dataClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    field_name<T extends mdl_customfield_fieldArgs= {}>(args?: Subset<T, mdl_customfield_fieldArgs>): Prisma__mdl_customfield_fieldClient<mdl_customfield_fieldGetPayload<T> | Null>;

    course<T extends mdl_courseArgs= {}>(args?: Subset<T, mdl_courseArgs>): Prisma__mdl_courseClient<mdl_courseGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * mdl_customfield_data base type for findUnique actions
   */
  export type mdl_customfield_dataFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the mdl_customfield_data
     * 
    **/
    select?: mdl_customfield_dataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_customfield_dataInclude | null
    /**
     * Filter, which mdl_customfield_data to fetch.
     * 
    **/
    where: mdl_customfield_dataWhereUniqueInput
  }

  /**
   * mdl_customfield_data: findUnique
   */
  export interface mdl_customfield_dataFindUniqueArgs extends mdl_customfield_dataFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * mdl_customfield_data findUniqueOrThrow
   */
  export type mdl_customfield_dataFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the mdl_customfield_data
     * 
    **/
    select?: mdl_customfield_dataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_customfield_dataInclude | null
    /**
     * Filter, which mdl_customfield_data to fetch.
     * 
    **/
    where: mdl_customfield_dataWhereUniqueInput
  }


  /**
   * mdl_customfield_data base type for findFirst actions
   */
  export type mdl_customfield_dataFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the mdl_customfield_data
     * 
    **/
    select?: mdl_customfield_dataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_customfield_dataInclude | null
    /**
     * Filter, which mdl_customfield_data to fetch.
     * 
    **/
    where?: mdl_customfield_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mdl_customfield_data to fetch.
     * 
    **/
    orderBy?: Enumerable<mdl_customfield_dataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mdl_customfield_data.
     * 
    **/
    cursor?: mdl_customfield_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mdl_customfield_data from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mdl_customfield_data.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mdl_customfield_data.
     * 
    **/
    distinct?: Enumerable<Mdl_customfield_dataScalarFieldEnum>
  }

  /**
   * mdl_customfield_data: findFirst
   */
  export interface mdl_customfield_dataFindFirstArgs extends mdl_customfield_dataFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * mdl_customfield_data findFirstOrThrow
   */
  export type mdl_customfield_dataFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the mdl_customfield_data
     * 
    **/
    select?: mdl_customfield_dataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_customfield_dataInclude | null
    /**
     * Filter, which mdl_customfield_data to fetch.
     * 
    **/
    where?: mdl_customfield_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mdl_customfield_data to fetch.
     * 
    **/
    orderBy?: Enumerable<mdl_customfield_dataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mdl_customfield_data.
     * 
    **/
    cursor?: mdl_customfield_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mdl_customfield_data from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mdl_customfield_data.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mdl_customfield_data.
     * 
    **/
    distinct?: Enumerable<Mdl_customfield_dataScalarFieldEnum>
  }


  /**
   * mdl_customfield_data findMany
   */
  export type mdl_customfield_dataFindManyArgs = {
    /**
     * Select specific fields to fetch from the mdl_customfield_data
     * 
    **/
    select?: mdl_customfield_dataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_customfield_dataInclude | null
    /**
     * Filter, which mdl_customfield_data to fetch.
     * 
    **/
    where?: mdl_customfield_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mdl_customfield_data to fetch.
     * 
    **/
    orderBy?: Enumerable<mdl_customfield_dataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mdl_customfield_data.
     * 
    **/
    cursor?: mdl_customfield_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mdl_customfield_data from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mdl_customfield_data.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Mdl_customfield_dataScalarFieldEnum>
  }


  /**
   * mdl_customfield_data create
   */
  export type mdl_customfield_dataCreateArgs = {
    /**
     * Select specific fields to fetch from the mdl_customfield_data
     * 
    **/
    select?: mdl_customfield_dataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_customfield_dataInclude | null
    /**
     * The data needed to create a mdl_customfield_data.
     * 
    **/
    data: XOR<mdl_customfield_dataCreateInput, mdl_customfield_dataUncheckedCreateInput>
  }


  /**
   * mdl_customfield_data createMany
   */
  export type mdl_customfield_dataCreateManyArgs = {
    /**
     * The data used to create many mdl_customfield_data.
     * 
    **/
    data: Enumerable<mdl_customfield_dataCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * mdl_customfield_data update
   */
  export type mdl_customfield_dataUpdateArgs = {
    /**
     * Select specific fields to fetch from the mdl_customfield_data
     * 
    **/
    select?: mdl_customfield_dataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_customfield_dataInclude | null
    /**
     * The data needed to update a mdl_customfield_data.
     * 
    **/
    data: XOR<mdl_customfield_dataUpdateInput, mdl_customfield_dataUncheckedUpdateInput>
    /**
     * Choose, which mdl_customfield_data to update.
     * 
    **/
    where: mdl_customfield_dataWhereUniqueInput
  }


  /**
   * mdl_customfield_data updateMany
   */
  export type mdl_customfield_dataUpdateManyArgs = {
    /**
     * The data used to update mdl_customfield_data.
     * 
    **/
    data: XOR<mdl_customfield_dataUpdateManyMutationInput, mdl_customfield_dataUncheckedUpdateManyInput>
    /**
     * Filter which mdl_customfield_data to update
     * 
    **/
    where?: mdl_customfield_dataWhereInput
  }


  /**
   * mdl_customfield_data upsert
   */
  export type mdl_customfield_dataUpsertArgs = {
    /**
     * Select specific fields to fetch from the mdl_customfield_data
     * 
    **/
    select?: mdl_customfield_dataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_customfield_dataInclude | null
    /**
     * The filter to search for the mdl_customfield_data to update in case it exists.
     * 
    **/
    where: mdl_customfield_dataWhereUniqueInput
    /**
     * In case the mdl_customfield_data found by the `where` argument doesn't exist, create a new mdl_customfield_data with this data.
     * 
    **/
    create: XOR<mdl_customfield_dataCreateInput, mdl_customfield_dataUncheckedCreateInput>
    /**
     * In case the mdl_customfield_data was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<mdl_customfield_dataUpdateInput, mdl_customfield_dataUncheckedUpdateInput>
  }


  /**
   * mdl_customfield_data delete
   */
  export type mdl_customfield_dataDeleteArgs = {
    /**
     * Select specific fields to fetch from the mdl_customfield_data
     * 
    **/
    select?: mdl_customfield_dataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_customfield_dataInclude | null
    /**
     * Filter which mdl_customfield_data to delete.
     * 
    **/
    where: mdl_customfield_dataWhereUniqueInput
  }


  /**
   * mdl_customfield_data deleteMany
   */
  export type mdl_customfield_dataDeleteManyArgs = {
    /**
     * Filter which mdl_customfield_data to delete
     * 
    **/
    where?: mdl_customfield_dataWhereInput
  }


  /**
   * mdl_customfield_data without action
   */
  export type mdl_customfield_dataArgs = {
    /**
     * Select specific fields to fetch from the mdl_customfield_data
     * 
    **/
    select?: mdl_customfield_dataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_customfield_dataInclude | null
  }



  /**
   * Model mdl_customfield_field
   */


  export type AggregateMdl_customfield_field = {
    _count: Mdl_customfield_fieldCountAggregateOutputType | null
    _avg: Mdl_customfield_fieldAvgAggregateOutputType | null
    _sum: Mdl_customfield_fieldSumAggregateOutputType | null
    _min: Mdl_customfield_fieldMinAggregateOutputType | null
    _max: Mdl_customfield_fieldMaxAggregateOutputType | null
  }

  export type Mdl_customfield_fieldAvgAggregateOutputType = {
    id: number | null
  }

  export type Mdl_customfield_fieldSumAggregateOutputType = {
    id: number | null
  }

  export type Mdl_customfield_fieldMinAggregateOutputType = {
    id: number | null
    shortname: string | null
    name: string | null
  }

  export type Mdl_customfield_fieldMaxAggregateOutputType = {
    id: number | null
    shortname: string | null
    name: string | null
  }

  export type Mdl_customfield_fieldCountAggregateOutputType = {
    id: number
    shortname: number
    name: number
    _all: number
  }


  export type Mdl_customfield_fieldAvgAggregateInputType = {
    id?: true
  }

  export type Mdl_customfield_fieldSumAggregateInputType = {
    id?: true
  }

  export type Mdl_customfield_fieldMinAggregateInputType = {
    id?: true
    shortname?: true
    name?: true
  }

  export type Mdl_customfield_fieldMaxAggregateInputType = {
    id?: true
    shortname?: true
    name?: true
  }

  export type Mdl_customfield_fieldCountAggregateInputType = {
    id?: true
    shortname?: true
    name?: true
    _all?: true
  }

  export type Mdl_customfield_fieldAggregateArgs = {
    /**
     * Filter which mdl_customfield_field to aggregate.
     * 
    **/
    where?: mdl_customfield_fieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mdl_customfield_fields to fetch.
     * 
    **/
    orderBy?: Enumerable<mdl_customfield_fieldOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: mdl_customfield_fieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mdl_customfield_fields from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mdl_customfield_fields.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mdl_customfield_fields
    **/
    _count?: true | Mdl_customfield_fieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mdl_customfield_fieldAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mdl_customfield_fieldSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mdl_customfield_fieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mdl_customfield_fieldMaxAggregateInputType
  }

  export type GetMdl_customfield_fieldAggregateType<T extends Mdl_customfield_fieldAggregateArgs> = {
        [P in keyof T & keyof AggregateMdl_customfield_field]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMdl_customfield_field[P]>
      : GetScalarType<T[P], AggregateMdl_customfield_field[P]>
  }




  export type Mdl_customfield_fieldGroupByArgs = {
    where?: mdl_customfield_fieldWhereInput
    orderBy?: Enumerable<mdl_customfield_fieldOrderByWithAggregationInput>
    by: Array<Mdl_customfield_fieldScalarFieldEnum>
    having?: mdl_customfield_fieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mdl_customfield_fieldCountAggregateInputType | true
    _avg?: Mdl_customfield_fieldAvgAggregateInputType
    _sum?: Mdl_customfield_fieldSumAggregateInputType
    _min?: Mdl_customfield_fieldMinAggregateInputType
    _max?: Mdl_customfield_fieldMaxAggregateInputType
  }


  export type Mdl_customfield_fieldGroupByOutputType = {
    id: number
    shortname: string
    name: string
    _count: Mdl_customfield_fieldCountAggregateOutputType | null
    _avg: Mdl_customfield_fieldAvgAggregateOutputType | null
    _sum: Mdl_customfield_fieldSumAggregateOutputType | null
    _min: Mdl_customfield_fieldMinAggregateOutputType | null
    _max: Mdl_customfield_fieldMaxAggregateOutputType | null
  }

  type GetMdl_customfield_fieldGroupByPayload<T extends Mdl_customfield_fieldGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Mdl_customfield_fieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mdl_customfield_fieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mdl_customfield_fieldGroupByOutputType[P]>
            : GetScalarType<T[P], Mdl_customfield_fieldGroupByOutputType[P]>
        }
      >
    >


  export type mdl_customfield_fieldSelect = {
    id?: boolean
    shortname?: boolean
    name?: boolean
    datas?: boolean | mdl_customfield_dataFindManyArgs
    _count?: boolean | Mdl_customfield_fieldCountOutputTypeArgs
  }


  export type mdl_customfield_fieldInclude = {
    datas?: boolean | mdl_customfield_dataFindManyArgs
    _count?: boolean | Mdl_customfield_fieldCountOutputTypeArgs
  } 

  export type mdl_customfield_fieldGetPayload<S extends boolean | null | undefined | mdl_customfield_fieldArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? mdl_customfield_field :
    S extends undefined ? never :
    S extends { include: any } & (mdl_customfield_fieldArgs | mdl_customfield_fieldFindManyArgs)
    ? mdl_customfield_field  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'datas' ? Array < mdl_customfield_dataGetPayload<S['include'][P]>>  :
        P extends '_count' ? Mdl_customfield_fieldCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (mdl_customfield_fieldArgs | mdl_customfield_fieldFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'datas' ? Array < mdl_customfield_dataGetPayload<S['select'][P]>>  :
        P extends '_count' ? Mdl_customfield_fieldCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof mdl_customfield_field ? mdl_customfield_field[P] : never
  } 
      : mdl_customfield_field


  type mdl_customfield_fieldCountArgs = Merge<
    Omit<mdl_customfield_fieldFindManyArgs, 'select' | 'include'> & {
      select?: Mdl_customfield_fieldCountAggregateInputType | true
    }
  >

  export interface mdl_customfield_fieldDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Mdl_customfield_field that matches the filter.
     * @param {mdl_customfield_fieldFindUniqueArgs} args - Arguments to find a Mdl_customfield_field
     * @example
     * // Get one Mdl_customfield_field
     * const mdl_customfield_field = await prisma.mdl_customfield_field.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends mdl_customfield_fieldFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, mdl_customfield_fieldFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'mdl_customfield_field'> extends True ? Prisma__mdl_customfield_fieldClient<mdl_customfield_fieldGetPayload<T>> : Prisma__mdl_customfield_fieldClient<mdl_customfield_fieldGetPayload<T> | null, null>

    /**
     * Find one Mdl_customfield_field that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {mdl_customfield_fieldFindUniqueOrThrowArgs} args - Arguments to find a Mdl_customfield_field
     * @example
     * // Get one Mdl_customfield_field
     * const mdl_customfield_field = await prisma.mdl_customfield_field.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends mdl_customfield_fieldFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, mdl_customfield_fieldFindUniqueOrThrowArgs>
    ): Prisma__mdl_customfield_fieldClient<mdl_customfield_fieldGetPayload<T>>

    /**
     * Find the first Mdl_customfield_field that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mdl_customfield_fieldFindFirstArgs} args - Arguments to find a Mdl_customfield_field
     * @example
     * // Get one Mdl_customfield_field
     * const mdl_customfield_field = await prisma.mdl_customfield_field.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends mdl_customfield_fieldFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, mdl_customfield_fieldFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'mdl_customfield_field'> extends True ? Prisma__mdl_customfield_fieldClient<mdl_customfield_fieldGetPayload<T>> : Prisma__mdl_customfield_fieldClient<mdl_customfield_fieldGetPayload<T> | null, null>

    /**
     * Find the first Mdl_customfield_field that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mdl_customfield_fieldFindFirstOrThrowArgs} args - Arguments to find a Mdl_customfield_field
     * @example
     * // Get one Mdl_customfield_field
     * const mdl_customfield_field = await prisma.mdl_customfield_field.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends mdl_customfield_fieldFindFirstOrThrowArgs>(
      args?: SelectSubset<T, mdl_customfield_fieldFindFirstOrThrowArgs>
    ): Prisma__mdl_customfield_fieldClient<mdl_customfield_fieldGetPayload<T>>

    /**
     * Find zero or more Mdl_customfield_fields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mdl_customfield_fieldFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mdl_customfield_fields
     * const mdl_customfield_fields = await prisma.mdl_customfield_field.findMany()
     * 
     * // Get first 10 Mdl_customfield_fields
     * const mdl_customfield_fields = await prisma.mdl_customfield_field.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mdl_customfield_fieldWithIdOnly = await prisma.mdl_customfield_field.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends mdl_customfield_fieldFindManyArgs>(
      args?: SelectSubset<T, mdl_customfield_fieldFindManyArgs>
    ): PrismaPromise<Array<mdl_customfield_fieldGetPayload<T>>>

    /**
     * Create a Mdl_customfield_field.
     * @param {mdl_customfield_fieldCreateArgs} args - Arguments to create a Mdl_customfield_field.
     * @example
     * // Create one Mdl_customfield_field
     * const Mdl_customfield_field = await prisma.mdl_customfield_field.create({
     *   data: {
     *     // ... data to create a Mdl_customfield_field
     *   }
     * })
     * 
    **/
    create<T extends mdl_customfield_fieldCreateArgs>(
      args: SelectSubset<T, mdl_customfield_fieldCreateArgs>
    ): Prisma__mdl_customfield_fieldClient<mdl_customfield_fieldGetPayload<T>>

    /**
     * Create many Mdl_customfield_fields.
     *     @param {mdl_customfield_fieldCreateManyArgs} args - Arguments to create many Mdl_customfield_fields.
     *     @example
     *     // Create many Mdl_customfield_fields
     *     const mdl_customfield_field = await prisma.mdl_customfield_field.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends mdl_customfield_fieldCreateManyArgs>(
      args?: SelectSubset<T, mdl_customfield_fieldCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Mdl_customfield_field.
     * @param {mdl_customfield_fieldDeleteArgs} args - Arguments to delete one Mdl_customfield_field.
     * @example
     * // Delete one Mdl_customfield_field
     * const Mdl_customfield_field = await prisma.mdl_customfield_field.delete({
     *   where: {
     *     // ... filter to delete one Mdl_customfield_field
     *   }
     * })
     * 
    **/
    delete<T extends mdl_customfield_fieldDeleteArgs>(
      args: SelectSubset<T, mdl_customfield_fieldDeleteArgs>
    ): Prisma__mdl_customfield_fieldClient<mdl_customfield_fieldGetPayload<T>>

    /**
     * Update one Mdl_customfield_field.
     * @param {mdl_customfield_fieldUpdateArgs} args - Arguments to update one Mdl_customfield_field.
     * @example
     * // Update one Mdl_customfield_field
     * const mdl_customfield_field = await prisma.mdl_customfield_field.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends mdl_customfield_fieldUpdateArgs>(
      args: SelectSubset<T, mdl_customfield_fieldUpdateArgs>
    ): Prisma__mdl_customfield_fieldClient<mdl_customfield_fieldGetPayload<T>>

    /**
     * Delete zero or more Mdl_customfield_fields.
     * @param {mdl_customfield_fieldDeleteManyArgs} args - Arguments to filter Mdl_customfield_fields to delete.
     * @example
     * // Delete a few Mdl_customfield_fields
     * const { count } = await prisma.mdl_customfield_field.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends mdl_customfield_fieldDeleteManyArgs>(
      args?: SelectSubset<T, mdl_customfield_fieldDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mdl_customfield_fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mdl_customfield_fieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mdl_customfield_fields
     * const mdl_customfield_field = await prisma.mdl_customfield_field.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends mdl_customfield_fieldUpdateManyArgs>(
      args: SelectSubset<T, mdl_customfield_fieldUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Mdl_customfield_field.
     * @param {mdl_customfield_fieldUpsertArgs} args - Arguments to update or create a Mdl_customfield_field.
     * @example
     * // Update or create a Mdl_customfield_field
     * const mdl_customfield_field = await prisma.mdl_customfield_field.upsert({
     *   create: {
     *     // ... data to create a Mdl_customfield_field
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mdl_customfield_field we want to update
     *   }
     * })
    **/
    upsert<T extends mdl_customfield_fieldUpsertArgs>(
      args: SelectSubset<T, mdl_customfield_fieldUpsertArgs>
    ): Prisma__mdl_customfield_fieldClient<mdl_customfield_fieldGetPayload<T>>

    /**
     * Count the number of Mdl_customfield_fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mdl_customfield_fieldCountArgs} args - Arguments to filter Mdl_customfield_fields to count.
     * @example
     * // Count the number of Mdl_customfield_fields
     * const count = await prisma.mdl_customfield_field.count({
     *   where: {
     *     // ... the filter for the Mdl_customfield_fields we want to count
     *   }
     * })
    **/
    count<T extends mdl_customfield_fieldCountArgs>(
      args?: Subset<T, mdl_customfield_fieldCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mdl_customfield_fieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mdl_customfield_field.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mdl_customfield_fieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Mdl_customfield_fieldAggregateArgs>(args: Subset<T, Mdl_customfield_fieldAggregateArgs>): PrismaPromise<GetMdl_customfield_fieldAggregateType<T>>

    /**
     * Group by Mdl_customfield_field.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mdl_customfield_fieldGroupByArgs} args - Group by arguments.
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
      T extends Mdl_customfield_fieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Mdl_customfield_fieldGroupByArgs['orderBy'] }
        : { orderBy?: Mdl_customfield_fieldGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Mdl_customfield_fieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMdl_customfield_fieldGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for mdl_customfield_field.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__mdl_customfield_fieldClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    datas<T extends mdl_customfield_dataFindManyArgs= {}>(args?: Subset<T, mdl_customfield_dataFindManyArgs>): PrismaPromise<Array<mdl_customfield_dataGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * mdl_customfield_field base type for findUnique actions
   */
  export type mdl_customfield_fieldFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the mdl_customfield_field
     * 
    **/
    select?: mdl_customfield_fieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_customfield_fieldInclude | null
    /**
     * Filter, which mdl_customfield_field to fetch.
     * 
    **/
    where: mdl_customfield_fieldWhereUniqueInput
  }

  /**
   * mdl_customfield_field: findUnique
   */
  export interface mdl_customfield_fieldFindUniqueArgs extends mdl_customfield_fieldFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * mdl_customfield_field findUniqueOrThrow
   */
  export type mdl_customfield_fieldFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the mdl_customfield_field
     * 
    **/
    select?: mdl_customfield_fieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_customfield_fieldInclude | null
    /**
     * Filter, which mdl_customfield_field to fetch.
     * 
    **/
    where: mdl_customfield_fieldWhereUniqueInput
  }


  /**
   * mdl_customfield_field base type for findFirst actions
   */
  export type mdl_customfield_fieldFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the mdl_customfield_field
     * 
    **/
    select?: mdl_customfield_fieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_customfield_fieldInclude | null
    /**
     * Filter, which mdl_customfield_field to fetch.
     * 
    **/
    where?: mdl_customfield_fieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mdl_customfield_fields to fetch.
     * 
    **/
    orderBy?: Enumerable<mdl_customfield_fieldOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mdl_customfield_fields.
     * 
    **/
    cursor?: mdl_customfield_fieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mdl_customfield_fields from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mdl_customfield_fields.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mdl_customfield_fields.
     * 
    **/
    distinct?: Enumerable<Mdl_customfield_fieldScalarFieldEnum>
  }

  /**
   * mdl_customfield_field: findFirst
   */
  export interface mdl_customfield_fieldFindFirstArgs extends mdl_customfield_fieldFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * mdl_customfield_field findFirstOrThrow
   */
  export type mdl_customfield_fieldFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the mdl_customfield_field
     * 
    **/
    select?: mdl_customfield_fieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_customfield_fieldInclude | null
    /**
     * Filter, which mdl_customfield_field to fetch.
     * 
    **/
    where?: mdl_customfield_fieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mdl_customfield_fields to fetch.
     * 
    **/
    orderBy?: Enumerable<mdl_customfield_fieldOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mdl_customfield_fields.
     * 
    **/
    cursor?: mdl_customfield_fieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mdl_customfield_fields from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mdl_customfield_fields.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mdl_customfield_fields.
     * 
    **/
    distinct?: Enumerable<Mdl_customfield_fieldScalarFieldEnum>
  }


  /**
   * mdl_customfield_field findMany
   */
  export type mdl_customfield_fieldFindManyArgs = {
    /**
     * Select specific fields to fetch from the mdl_customfield_field
     * 
    **/
    select?: mdl_customfield_fieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_customfield_fieldInclude | null
    /**
     * Filter, which mdl_customfield_fields to fetch.
     * 
    **/
    where?: mdl_customfield_fieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mdl_customfield_fields to fetch.
     * 
    **/
    orderBy?: Enumerable<mdl_customfield_fieldOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mdl_customfield_fields.
     * 
    **/
    cursor?: mdl_customfield_fieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mdl_customfield_fields from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mdl_customfield_fields.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Mdl_customfield_fieldScalarFieldEnum>
  }


  /**
   * mdl_customfield_field create
   */
  export type mdl_customfield_fieldCreateArgs = {
    /**
     * Select specific fields to fetch from the mdl_customfield_field
     * 
    **/
    select?: mdl_customfield_fieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_customfield_fieldInclude | null
    /**
     * The data needed to create a mdl_customfield_field.
     * 
    **/
    data: XOR<mdl_customfield_fieldCreateInput, mdl_customfield_fieldUncheckedCreateInput>
  }


  /**
   * mdl_customfield_field createMany
   */
  export type mdl_customfield_fieldCreateManyArgs = {
    /**
     * The data used to create many mdl_customfield_fields.
     * 
    **/
    data: Enumerable<mdl_customfield_fieldCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * mdl_customfield_field update
   */
  export type mdl_customfield_fieldUpdateArgs = {
    /**
     * Select specific fields to fetch from the mdl_customfield_field
     * 
    **/
    select?: mdl_customfield_fieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_customfield_fieldInclude | null
    /**
     * The data needed to update a mdl_customfield_field.
     * 
    **/
    data: XOR<mdl_customfield_fieldUpdateInput, mdl_customfield_fieldUncheckedUpdateInput>
    /**
     * Choose, which mdl_customfield_field to update.
     * 
    **/
    where: mdl_customfield_fieldWhereUniqueInput
  }


  /**
   * mdl_customfield_field updateMany
   */
  export type mdl_customfield_fieldUpdateManyArgs = {
    /**
     * The data used to update mdl_customfield_fields.
     * 
    **/
    data: XOR<mdl_customfield_fieldUpdateManyMutationInput, mdl_customfield_fieldUncheckedUpdateManyInput>
    /**
     * Filter which mdl_customfield_fields to update
     * 
    **/
    where?: mdl_customfield_fieldWhereInput
  }


  /**
   * mdl_customfield_field upsert
   */
  export type mdl_customfield_fieldUpsertArgs = {
    /**
     * Select specific fields to fetch from the mdl_customfield_field
     * 
    **/
    select?: mdl_customfield_fieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_customfield_fieldInclude | null
    /**
     * The filter to search for the mdl_customfield_field to update in case it exists.
     * 
    **/
    where: mdl_customfield_fieldWhereUniqueInput
    /**
     * In case the mdl_customfield_field found by the `where` argument doesn't exist, create a new mdl_customfield_field with this data.
     * 
    **/
    create: XOR<mdl_customfield_fieldCreateInput, mdl_customfield_fieldUncheckedCreateInput>
    /**
     * In case the mdl_customfield_field was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<mdl_customfield_fieldUpdateInput, mdl_customfield_fieldUncheckedUpdateInput>
  }


  /**
   * mdl_customfield_field delete
   */
  export type mdl_customfield_fieldDeleteArgs = {
    /**
     * Select specific fields to fetch from the mdl_customfield_field
     * 
    **/
    select?: mdl_customfield_fieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_customfield_fieldInclude | null
    /**
     * Filter which mdl_customfield_field to delete.
     * 
    **/
    where: mdl_customfield_fieldWhereUniqueInput
  }


  /**
   * mdl_customfield_field deleteMany
   */
  export type mdl_customfield_fieldDeleteManyArgs = {
    /**
     * Filter which mdl_customfield_fields to delete
     * 
    **/
    where?: mdl_customfield_fieldWhereInput
  }


  /**
   * mdl_customfield_field without action
   */
  export type mdl_customfield_fieldArgs = {
    /**
     * Select specific fields to fetch from the mdl_customfield_field
     * 
    **/
    select?: mdl_customfield_fieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: mdl_customfield_fieldInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const Mdl_contextScalarFieldEnum: {
    id: 'id',
    instanceid: 'instanceid',
    contextlevel: 'contextlevel'
  };

  export type Mdl_contextScalarFieldEnum = (typeof Mdl_contextScalarFieldEnum)[keyof typeof Mdl_contextScalarFieldEnum]


  export const Mdl_courseScalarFieldEnum: {
    id: 'id',
    category: 'category',
    fullname: 'fullname',
    shortname: 'shortname',
    summary: 'summary',
    visible: 'visible',
    timecreated: 'timecreated'
  };

  export type Mdl_courseScalarFieldEnum = (typeof Mdl_courseScalarFieldEnum)[keyof typeof Mdl_courseScalarFieldEnum]


  export const Mdl_course_categoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    visible: 'visible'
  };

  export type Mdl_course_categoriesScalarFieldEnum = (typeof Mdl_course_categoriesScalarFieldEnum)[keyof typeof Mdl_course_categoriesScalarFieldEnum]


  export const Mdl_customfield_dataScalarFieldEnum: {
    id: 'id',
    instanceid: 'instanceid',
    fieldid: 'fieldid',
    value: 'value',
    valueformat: 'valueformat',
    charvalue: 'charvalue'
  };

  export type Mdl_customfield_dataScalarFieldEnum = (typeof Mdl_customfield_dataScalarFieldEnum)[keyof typeof Mdl_customfield_dataScalarFieldEnum]


  export const Mdl_customfield_fieldScalarFieldEnum: {
    id: 'id',
    shortname: 'shortname',
    name: 'name'
  };

  export type Mdl_customfield_fieldScalarFieldEnum = (typeof Mdl_customfield_fieldScalarFieldEnum)[keyof typeof Mdl_customfield_fieldScalarFieldEnum]


  export const Mdl_filesScalarFieldEnum: {
    id: 'id',
    contextid: 'contextid',
    filename: 'filename',
    component: 'component'
  };

  export type Mdl_filesScalarFieldEnum = (typeof Mdl_filesScalarFieldEnum)[keyof typeof Mdl_filesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type mdl_courseWhereInput = {
    AND?: Enumerable<mdl_courseWhereInput>
    OR?: Enumerable<mdl_courseWhereInput>
    NOT?: Enumerable<mdl_courseWhereInput>
    id?: IntFilter | number
    category?: IntFilter | number
    fullname?: StringFilter | string
    shortname?: StringFilter | string
    summary?: StringFilter | string
    visible?: IntFilter | number
    timecreated?: IntFilter | number
    category_name?: XOR<Mdl_course_categoriesRelationFilter, mdl_course_categoriesWhereInput>
    custom_data?: Mdl_customfield_dataListRelationFilter
    context?: Mdl_contextListRelationFilter
  }

  export type mdl_courseOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    fullname?: SortOrder
    shortname?: SortOrder
    summary?: SortOrder
    visible?: SortOrder
    timecreated?: SortOrder
    category_name?: mdl_course_categoriesOrderByWithRelationInput
    custom_data?: mdl_customfield_dataOrderByRelationAggregateInput
    context?: mdl_contextOrderByRelationAggregateInput
  }

  export type mdl_courseWhereUniqueInput = {
    id?: number
  }

  export type mdl_courseOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrder
    fullname?: SortOrder
    shortname?: SortOrder
    summary?: SortOrder
    visible?: SortOrder
    timecreated?: SortOrder
    _count?: mdl_courseCountOrderByAggregateInput
    _avg?: mdl_courseAvgOrderByAggregateInput
    _max?: mdl_courseMaxOrderByAggregateInput
    _min?: mdl_courseMinOrderByAggregateInput
    _sum?: mdl_courseSumOrderByAggregateInput
  }

  export type mdl_courseScalarWhereWithAggregatesInput = {
    AND?: Enumerable<mdl_courseScalarWhereWithAggregatesInput>
    OR?: Enumerable<mdl_courseScalarWhereWithAggregatesInput>
    NOT?: Enumerable<mdl_courseScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    category?: IntWithAggregatesFilter | number
    fullname?: StringWithAggregatesFilter | string
    shortname?: StringWithAggregatesFilter | string
    summary?: StringWithAggregatesFilter | string
    visible?: IntWithAggregatesFilter | number
    timecreated?: IntWithAggregatesFilter | number
  }

  export type mdl_course_categoriesWhereInput = {
    AND?: Enumerable<mdl_course_categoriesWhereInput>
    OR?: Enumerable<mdl_course_categoriesWhereInput>
    NOT?: Enumerable<mdl_course_categoriesWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    visible?: IntFilter | number
    courses?: Mdl_courseListRelationFilter
  }

  export type mdl_course_categoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    visible?: SortOrder
    courses?: mdl_courseOrderByRelationAggregateInput
  }

  export type mdl_course_categoriesWhereUniqueInput = {
    id?: number
  }

  export type mdl_course_categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    visible?: SortOrder
    _count?: mdl_course_categoriesCountOrderByAggregateInput
    _avg?: mdl_course_categoriesAvgOrderByAggregateInput
    _max?: mdl_course_categoriesMaxOrderByAggregateInput
    _min?: mdl_course_categoriesMinOrderByAggregateInput
    _sum?: mdl_course_categoriesSumOrderByAggregateInput
  }

  export type mdl_course_categoriesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<mdl_course_categoriesScalarWhereWithAggregatesInput>
    OR?: Enumerable<mdl_course_categoriesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<mdl_course_categoriesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    visible?: IntWithAggregatesFilter | number
  }

  export type mdl_contextWhereInput = {
    AND?: Enumerable<mdl_contextWhereInput>
    OR?: Enumerable<mdl_contextWhereInput>
    NOT?: Enumerable<mdl_contextWhereInput>
    id?: IntFilter | number
    instanceid?: IntFilter | number
    contextlevel?: IntFilter | number
    course?: XOR<Mdl_courseRelationFilter, mdl_courseWhereInput>
    files?: Mdl_filesListRelationFilter
  }

  export type mdl_contextOrderByWithRelationInput = {
    id?: SortOrder
    instanceid?: SortOrder
    contextlevel?: SortOrder
    course?: mdl_courseOrderByWithRelationInput
    files?: mdl_filesOrderByRelationAggregateInput
  }

  export type mdl_contextWhereUniqueInput = {
    id?: number
  }

  export type mdl_contextOrderByWithAggregationInput = {
    id?: SortOrder
    instanceid?: SortOrder
    contextlevel?: SortOrder
    _count?: mdl_contextCountOrderByAggregateInput
    _avg?: mdl_contextAvgOrderByAggregateInput
    _max?: mdl_contextMaxOrderByAggregateInput
    _min?: mdl_contextMinOrderByAggregateInput
    _sum?: mdl_contextSumOrderByAggregateInput
  }

  export type mdl_contextScalarWhereWithAggregatesInput = {
    AND?: Enumerable<mdl_contextScalarWhereWithAggregatesInput>
    OR?: Enumerable<mdl_contextScalarWhereWithAggregatesInput>
    NOT?: Enumerable<mdl_contextScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    instanceid?: IntWithAggregatesFilter | number
    contextlevel?: IntWithAggregatesFilter | number
  }

  export type mdl_filesWhereInput = {
    AND?: Enumerable<mdl_filesWhereInput>
    OR?: Enumerable<mdl_filesWhereInput>
    NOT?: Enumerable<mdl_filesWhereInput>
    id?: IntFilter | number
    contextid?: IntFilter | number
    filename?: StringFilter | string
    component?: StringFilter | string
    context?: XOR<Mdl_contextRelationFilter, mdl_contextWhereInput>
  }

  export type mdl_filesOrderByWithRelationInput = {
    id?: SortOrder
    contextid?: SortOrder
    filename?: SortOrder
    component?: SortOrder
    context?: mdl_contextOrderByWithRelationInput
  }

  export type mdl_filesWhereUniqueInput = {
    id?: number
    contextid?: number
  }

  export type mdl_filesOrderByWithAggregationInput = {
    id?: SortOrder
    contextid?: SortOrder
    filename?: SortOrder
    component?: SortOrder
    _count?: mdl_filesCountOrderByAggregateInput
    _avg?: mdl_filesAvgOrderByAggregateInput
    _max?: mdl_filesMaxOrderByAggregateInput
    _min?: mdl_filesMinOrderByAggregateInput
    _sum?: mdl_filesSumOrderByAggregateInput
  }

  export type mdl_filesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<mdl_filesScalarWhereWithAggregatesInput>
    OR?: Enumerable<mdl_filesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<mdl_filesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    contextid?: IntWithAggregatesFilter | number
    filename?: StringWithAggregatesFilter | string
    component?: StringWithAggregatesFilter | string
  }

  export type mdl_customfield_dataWhereInput = {
    AND?: Enumerable<mdl_customfield_dataWhereInput>
    OR?: Enumerable<mdl_customfield_dataWhereInput>
    NOT?: Enumerable<mdl_customfield_dataWhereInput>
    id?: IntFilter | number
    instanceid?: IntFilter | number
    fieldid?: IntFilter | number
    value?: StringFilter | string
    valueformat?: IntFilter | number
    charvalue?: StringFilter | string
    field_name?: XOR<Mdl_customfield_fieldRelationFilter, mdl_customfield_fieldWhereInput>
    course?: XOR<Mdl_courseRelationFilter, mdl_courseWhereInput>
  }

  export type mdl_customfield_dataOrderByWithRelationInput = {
    id?: SortOrder
    instanceid?: SortOrder
    fieldid?: SortOrder
    value?: SortOrder
    valueformat?: SortOrder
    charvalue?: SortOrder
    field_name?: mdl_customfield_fieldOrderByWithRelationInput
    course?: mdl_courseOrderByWithRelationInput
  }

  export type mdl_customfield_dataWhereUniqueInput = {
    id?: number
    fieldid?: number
  }

  export type mdl_customfield_dataOrderByWithAggregationInput = {
    id?: SortOrder
    instanceid?: SortOrder
    fieldid?: SortOrder
    value?: SortOrder
    valueformat?: SortOrder
    charvalue?: SortOrder
    _count?: mdl_customfield_dataCountOrderByAggregateInput
    _avg?: mdl_customfield_dataAvgOrderByAggregateInput
    _max?: mdl_customfield_dataMaxOrderByAggregateInput
    _min?: mdl_customfield_dataMinOrderByAggregateInput
    _sum?: mdl_customfield_dataSumOrderByAggregateInput
  }

  export type mdl_customfield_dataScalarWhereWithAggregatesInput = {
    AND?: Enumerable<mdl_customfield_dataScalarWhereWithAggregatesInput>
    OR?: Enumerable<mdl_customfield_dataScalarWhereWithAggregatesInput>
    NOT?: Enumerable<mdl_customfield_dataScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    instanceid?: IntWithAggregatesFilter | number
    fieldid?: IntWithAggregatesFilter | number
    value?: StringWithAggregatesFilter | string
    valueformat?: IntWithAggregatesFilter | number
    charvalue?: StringWithAggregatesFilter | string
  }

  export type mdl_customfield_fieldWhereInput = {
    AND?: Enumerable<mdl_customfield_fieldWhereInput>
    OR?: Enumerable<mdl_customfield_fieldWhereInput>
    NOT?: Enumerable<mdl_customfield_fieldWhereInput>
    id?: IntFilter | number
    shortname?: StringFilter | string
    name?: StringFilter | string
    datas?: Mdl_customfield_dataListRelationFilter
  }

  export type mdl_customfield_fieldOrderByWithRelationInput = {
    id?: SortOrder
    shortname?: SortOrder
    name?: SortOrder
    datas?: mdl_customfield_dataOrderByRelationAggregateInput
  }

  export type mdl_customfield_fieldWhereUniqueInput = {
    id?: number
  }

  export type mdl_customfield_fieldOrderByWithAggregationInput = {
    id?: SortOrder
    shortname?: SortOrder
    name?: SortOrder
    _count?: mdl_customfield_fieldCountOrderByAggregateInput
    _avg?: mdl_customfield_fieldAvgOrderByAggregateInput
    _max?: mdl_customfield_fieldMaxOrderByAggregateInput
    _min?: mdl_customfield_fieldMinOrderByAggregateInput
    _sum?: mdl_customfield_fieldSumOrderByAggregateInput
  }

  export type mdl_customfield_fieldScalarWhereWithAggregatesInput = {
    AND?: Enumerable<mdl_customfield_fieldScalarWhereWithAggregatesInput>
    OR?: Enumerable<mdl_customfield_fieldScalarWhereWithAggregatesInput>
    NOT?: Enumerable<mdl_customfield_fieldScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    shortname?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type mdl_courseCreateInput = {
    fullname: string
    shortname: string
    summary: string
    visible?: number
    timecreated: number
    category_name: mdl_course_categoriesCreateNestedOneWithoutCoursesInput
    custom_data?: mdl_customfield_dataCreateNestedManyWithoutCourseInput
    context?: mdl_contextCreateNestedManyWithoutCourseInput
  }

  export type mdl_courseUncheckedCreateInput = {
    id?: number
    category: number
    fullname: string
    shortname: string
    summary: string
    visible?: number
    timecreated: number
    custom_data?: mdl_customfield_dataUncheckedCreateNestedManyWithoutCourseInput
    context?: mdl_contextUncheckedCreateNestedManyWithoutCourseInput
  }

  export type mdl_courseUpdateInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    shortname?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    visible?: IntFieldUpdateOperationsInput | number
    timecreated?: IntFieldUpdateOperationsInput | number
    category_name?: mdl_course_categoriesUpdateOneRequiredWithoutCoursesNestedInput
    custom_data?: mdl_customfield_dataUpdateManyWithoutCourseNestedInput
    context?: mdl_contextUpdateManyWithoutCourseNestedInput
  }

  export type mdl_courseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    shortname?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    visible?: IntFieldUpdateOperationsInput | number
    timecreated?: IntFieldUpdateOperationsInput | number
    custom_data?: mdl_customfield_dataUncheckedUpdateManyWithoutCourseNestedInput
    context?: mdl_contextUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type mdl_courseCreateManyInput = {
    id?: number
    category: number
    fullname: string
    shortname: string
    summary: string
    visible?: number
    timecreated: number
  }

  export type mdl_courseUpdateManyMutationInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    shortname?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    visible?: IntFieldUpdateOperationsInput | number
    timecreated?: IntFieldUpdateOperationsInput | number
  }

  export type mdl_courseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    shortname?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    visible?: IntFieldUpdateOperationsInput | number
    timecreated?: IntFieldUpdateOperationsInput | number
  }

  export type mdl_course_categoriesCreateInput = {
    name: string
    visible?: number
    courses?: mdl_courseCreateNestedManyWithoutCategory_nameInput
  }

  export type mdl_course_categoriesUncheckedCreateInput = {
    id?: number
    name: string
    visible?: number
    courses?: mdl_courseUncheckedCreateNestedManyWithoutCategory_nameInput
  }

  export type mdl_course_categoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    visible?: IntFieldUpdateOperationsInput | number
    courses?: mdl_courseUpdateManyWithoutCategory_nameNestedInput
  }

  export type mdl_course_categoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    visible?: IntFieldUpdateOperationsInput | number
    courses?: mdl_courseUncheckedUpdateManyWithoutCategory_nameNestedInput
  }

  export type mdl_course_categoriesCreateManyInput = {
    id?: number
    name: string
    visible?: number
  }

  export type mdl_course_categoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    visible?: IntFieldUpdateOperationsInput | number
  }

  export type mdl_course_categoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    visible?: IntFieldUpdateOperationsInput | number
  }

  export type mdl_contextCreateInput = {
    contextlevel: number
    course: mdl_courseCreateNestedOneWithoutContextInput
    files?: mdl_filesCreateNestedManyWithoutContextInput
  }

  export type mdl_contextUncheckedCreateInput = {
    id?: number
    instanceid: number
    contextlevel: number
    files?: mdl_filesUncheckedCreateNestedManyWithoutContextInput
  }

  export type mdl_contextUpdateInput = {
    contextlevel?: IntFieldUpdateOperationsInput | number
    course?: mdl_courseUpdateOneRequiredWithoutContextNestedInput
    files?: mdl_filesUpdateManyWithoutContextNestedInput
  }

  export type mdl_contextUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    instanceid?: IntFieldUpdateOperationsInput | number
    contextlevel?: IntFieldUpdateOperationsInput | number
    files?: mdl_filesUncheckedUpdateManyWithoutContextNestedInput
  }

  export type mdl_contextCreateManyInput = {
    id?: number
    instanceid: number
    contextlevel: number
  }

  export type mdl_contextUpdateManyMutationInput = {
    contextlevel?: IntFieldUpdateOperationsInput | number
  }

  export type mdl_contextUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    instanceid?: IntFieldUpdateOperationsInput | number
    contextlevel?: IntFieldUpdateOperationsInput | number
  }

  export type mdl_filesCreateInput = {
    id: number
    filename: string
    component: string
    context: mdl_contextCreateNestedOneWithoutFilesInput
  }

  export type mdl_filesUncheckedCreateInput = {
    id: number
    contextid: number
    filename: string
    component: string
  }

  export type mdl_filesUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    component?: StringFieldUpdateOperationsInput | string
    context?: mdl_contextUpdateOneRequiredWithoutFilesNestedInput
  }

  export type mdl_filesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    contextid?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    component?: StringFieldUpdateOperationsInput | string
  }

  export type mdl_filesCreateManyInput = {
    id: number
    contextid: number
    filename: string
    component: string
  }

  export type mdl_filesUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    component?: StringFieldUpdateOperationsInput | string
  }

  export type mdl_filesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    contextid?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    component?: StringFieldUpdateOperationsInput | string
  }

  export type mdl_customfield_dataCreateInput = {
    id: number
    value: string
    valueformat: number
    charvalue: string
    field_name: mdl_customfield_fieldCreateNestedOneWithoutDatasInput
    course: mdl_courseCreateNestedOneWithoutCustom_dataInput
  }

  export type mdl_customfield_dataUncheckedCreateInput = {
    id: number
    instanceid: number
    fieldid: number
    value: string
    valueformat: number
    charvalue: string
  }

  export type mdl_customfield_dataUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    valueformat?: IntFieldUpdateOperationsInput | number
    charvalue?: StringFieldUpdateOperationsInput | string
    field_name?: mdl_customfield_fieldUpdateOneRequiredWithoutDatasNestedInput
    course?: mdl_courseUpdateOneRequiredWithoutCustom_dataNestedInput
  }

  export type mdl_customfield_dataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    instanceid?: IntFieldUpdateOperationsInput | number
    fieldid?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    valueformat?: IntFieldUpdateOperationsInput | number
    charvalue?: StringFieldUpdateOperationsInput | string
  }

  export type mdl_customfield_dataCreateManyInput = {
    id: number
    instanceid: number
    fieldid: number
    value: string
    valueformat: number
    charvalue: string
  }

  export type mdl_customfield_dataUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    valueformat?: IntFieldUpdateOperationsInput | number
    charvalue?: StringFieldUpdateOperationsInput | string
  }

  export type mdl_customfield_dataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    instanceid?: IntFieldUpdateOperationsInput | number
    fieldid?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    valueformat?: IntFieldUpdateOperationsInput | number
    charvalue?: StringFieldUpdateOperationsInput | string
  }

  export type mdl_customfield_fieldCreateInput = {
    id: number
    shortname: string
    name: string
    datas?: mdl_customfield_dataCreateNestedManyWithoutField_nameInput
  }

  export type mdl_customfield_fieldUncheckedCreateInput = {
    id: number
    shortname: string
    name: string
    datas?: mdl_customfield_dataUncheckedCreateNestedManyWithoutField_nameInput
  }

  export type mdl_customfield_fieldUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    shortname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    datas?: mdl_customfield_dataUpdateManyWithoutField_nameNestedInput
  }

  export type mdl_customfield_fieldUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    shortname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    datas?: mdl_customfield_dataUncheckedUpdateManyWithoutField_nameNestedInput
  }

  export type mdl_customfield_fieldCreateManyInput = {
    id: number
    shortname: string
    name: string
  }

  export type mdl_customfield_fieldUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    shortname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type mdl_customfield_fieldUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    shortname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type Mdl_course_categoriesRelationFilter = {
    is?: mdl_course_categoriesWhereInput
    isNot?: mdl_course_categoriesWhereInput
  }

  export type Mdl_customfield_dataListRelationFilter = {
    every?: mdl_customfield_dataWhereInput
    some?: mdl_customfield_dataWhereInput
    none?: mdl_customfield_dataWhereInput
  }

  export type Mdl_contextListRelationFilter = {
    every?: mdl_contextWhereInput
    some?: mdl_contextWhereInput
    none?: mdl_contextWhereInput
  }

  export type mdl_customfield_dataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type mdl_contextOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type mdl_courseCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    fullname?: SortOrder
    shortname?: SortOrder
    summary?: SortOrder
    visible?: SortOrder
    timecreated?: SortOrder
  }

  export type mdl_courseAvgOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    visible?: SortOrder
    timecreated?: SortOrder
  }

  export type mdl_courseMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    fullname?: SortOrder
    shortname?: SortOrder
    summary?: SortOrder
    visible?: SortOrder
    timecreated?: SortOrder
  }

  export type mdl_courseMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    fullname?: SortOrder
    shortname?: SortOrder
    summary?: SortOrder
    visible?: SortOrder
    timecreated?: SortOrder
  }

  export type mdl_courseSumOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    visible?: SortOrder
    timecreated?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type Mdl_courseListRelationFilter = {
    every?: mdl_courseWhereInput
    some?: mdl_courseWhereInput
    none?: mdl_courseWhereInput
  }

  export type mdl_courseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type mdl_course_categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    visible?: SortOrder
  }

  export type mdl_course_categoriesAvgOrderByAggregateInput = {
    id?: SortOrder
    visible?: SortOrder
  }

  export type mdl_course_categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    visible?: SortOrder
  }

  export type mdl_course_categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    visible?: SortOrder
  }

  export type mdl_course_categoriesSumOrderByAggregateInput = {
    id?: SortOrder
    visible?: SortOrder
  }

  export type Mdl_courseRelationFilter = {
    is?: mdl_courseWhereInput
    isNot?: mdl_courseWhereInput
  }

  export type Mdl_filesListRelationFilter = {
    every?: mdl_filesWhereInput
    some?: mdl_filesWhereInput
    none?: mdl_filesWhereInput
  }

  export type mdl_filesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type mdl_contextCountOrderByAggregateInput = {
    id?: SortOrder
    instanceid?: SortOrder
    contextlevel?: SortOrder
  }

  export type mdl_contextAvgOrderByAggregateInput = {
    id?: SortOrder
    instanceid?: SortOrder
    contextlevel?: SortOrder
  }

  export type mdl_contextMaxOrderByAggregateInput = {
    id?: SortOrder
    instanceid?: SortOrder
    contextlevel?: SortOrder
  }

  export type mdl_contextMinOrderByAggregateInput = {
    id?: SortOrder
    instanceid?: SortOrder
    contextlevel?: SortOrder
  }

  export type mdl_contextSumOrderByAggregateInput = {
    id?: SortOrder
    instanceid?: SortOrder
    contextlevel?: SortOrder
  }

  export type Mdl_contextRelationFilter = {
    is?: mdl_contextWhereInput
    isNot?: mdl_contextWhereInput
  }

  export type mdl_filesCountOrderByAggregateInput = {
    id?: SortOrder
    contextid?: SortOrder
    filename?: SortOrder
    component?: SortOrder
  }

  export type mdl_filesAvgOrderByAggregateInput = {
    id?: SortOrder
    contextid?: SortOrder
  }

  export type mdl_filesMaxOrderByAggregateInput = {
    id?: SortOrder
    contextid?: SortOrder
    filename?: SortOrder
    component?: SortOrder
  }

  export type mdl_filesMinOrderByAggregateInput = {
    id?: SortOrder
    contextid?: SortOrder
    filename?: SortOrder
    component?: SortOrder
  }

  export type mdl_filesSumOrderByAggregateInput = {
    id?: SortOrder
    contextid?: SortOrder
  }

  export type Mdl_customfield_fieldRelationFilter = {
    is?: mdl_customfield_fieldWhereInput
    isNot?: mdl_customfield_fieldWhereInput
  }

  export type mdl_customfield_dataCountOrderByAggregateInput = {
    id?: SortOrder
    instanceid?: SortOrder
    fieldid?: SortOrder
    value?: SortOrder
    valueformat?: SortOrder
    charvalue?: SortOrder
  }

  export type mdl_customfield_dataAvgOrderByAggregateInput = {
    id?: SortOrder
    instanceid?: SortOrder
    fieldid?: SortOrder
    valueformat?: SortOrder
  }

  export type mdl_customfield_dataMaxOrderByAggregateInput = {
    id?: SortOrder
    instanceid?: SortOrder
    fieldid?: SortOrder
    value?: SortOrder
    valueformat?: SortOrder
    charvalue?: SortOrder
  }

  export type mdl_customfield_dataMinOrderByAggregateInput = {
    id?: SortOrder
    instanceid?: SortOrder
    fieldid?: SortOrder
    value?: SortOrder
    valueformat?: SortOrder
    charvalue?: SortOrder
  }

  export type mdl_customfield_dataSumOrderByAggregateInput = {
    id?: SortOrder
    instanceid?: SortOrder
    fieldid?: SortOrder
    valueformat?: SortOrder
  }

  export type mdl_customfield_fieldCountOrderByAggregateInput = {
    id?: SortOrder
    shortname?: SortOrder
    name?: SortOrder
  }

  export type mdl_customfield_fieldAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type mdl_customfield_fieldMaxOrderByAggregateInput = {
    id?: SortOrder
    shortname?: SortOrder
    name?: SortOrder
  }

  export type mdl_customfield_fieldMinOrderByAggregateInput = {
    id?: SortOrder
    shortname?: SortOrder
    name?: SortOrder
  }

  export type mdl_customfield_fieldSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type mdl_course_categoriesCreateNestedOneWithoutCoursesInput = {
    create?: XOR<mdl_course_categoriesCreateWithoutCoursesInput, mdl_course_categoriesUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: mdl_course_categoriesCreateOrConnectWithoutCoursesInput
    connect?: mdl_course_categoriesWhereUniqueInput
  }

  export type mdl_customfield_dataCreateNestedManyWithoutCourseInput = {
    create?: XOR<Enumerable<mdl_customfield_dataCreateWithoutCourseInput>, Enumerable<mdl_customfield_dataUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<mdl_customfield_dataCreateOrConnectWithoutCourseInput>
    createMany?: mdl_customfield_dataCreateManyCourseInputEnvelope
    connect?: Enumerable<mdl_customfield_dataWhereUniqueInput>
  }

  export type mdl_contextCreateNestedManyWithoutCourseInput = {
    create?: XOR<Enumerable<mdl_contextCreateWithoutCourseInput>, Enumerable<mdl_contextUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<mdl_contextCreateOrConnectWithoutCourseInput>
    createMany?: mdl_contextCreateManyCourseInputEnvelope
    connect?: Enumerable<mdl_contextWhereUniqueInput>
  }

  export type mdl_customfield_dataUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<Enumerable<mdl_customfield_dataCreateWithoutCourseInput>, Enumerable<mdl_customfield_dataUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<mdl_customfield_dataCreateOrConnectWithoutCourseInput>
    createMany?: mdl_customfield_dataCreateManyCourseInputEnvelope
    connect?: Enumerable<mdl_customfield_dataWhereUniqueInput>
  }

  export type mdl_contextUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<Enumerable<mdl_contextCreateWithoutCourseInput>, Enumerable<mdl_contextUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<mdl_contextCreateOrConnectWithoutCourseInput>
    createMany?: mdl_contextCreateManyCourseInputEnvelope
    connect?: Enumerable<mdl_contextWhereUniqueInput>
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

  export type mdl_course_categoriesUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<mdl_course_categoriesCreateWithoutCoursesInput, mdl_course_categoriesUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: mdl_course_categoriesCreateOrConnectWithoutCoursesInput
    upsert?: mdl_course_categoriesUpsertWithoutCoursesInput
    connect?: mdl_course_categoriesWhereUniqueInput
    update?: XOR<mdl_course_categoriesUpdateWithoutCoursesInput, mdl_course_categoriesUncheckedUpdateWithoutCoursesInput>
  }

  export type mdl_customfield_dataUpdateManyWithoutCourseNestedInput = {
    create?: XOR<Enumerable<mdl_customfield_dataCreateWithoutCourseInput>, Enumerable<mdl_customfield_dataUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<mdl_customfield_dataCreateOrConnectWithoutCourseInput>
    upsert?: Enumerable<mdl_customfield_dataUpsertWithWhereUniqueWithoutCourseInput>
    createMany?: mdl_customfield_dataCreateManyCourseInputEnvelope
    set?: Enumerable<mdl_customfield_dataWhereUniqueInput>
    disconnect?: Enumerable<mdl_customfield_dataWhereUniqueInput>
    delete?: Enumerable<mdl_customfield_dataWhereUniqueInput>
    connect?: Enumerable<mdl_customfield_dataWhereUniqueInput>
    update?: Enumerable<mdl_customfield_dataUpdateWithWhereUniqueWithoutCourseInput>
    updateMany?: Enumerable<mdl_customfield_dataUpdateManyWithWhereWithoutCourseInput>
    deleteMany?: Enumerable<mdl_customfield_dataScalarWhereInput>
  }

  export type mdl_contextUpdateManyWithoutCourseNestedInput = {
    create?: XOR<Enumerable<mdl_contextCreateWithoutCourseInput>, Enumerable<mdl_contextUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<mdl_contextCreateOrConnectWithoutCourseInput>
    upsert?: Enumerable<mdl_contextUpsertWithWhereUniqueWithoutCourseInput>
    createMany?: mdl_contextCreateManyCourseInputEnvelope
    set?: Enumerable<mdl_contextWhereUniqueInput>
    disconnect?: Enumerable<mdl_contextWhereUniqueInput>
    delete?: Enumerable<mdl_contextWhereUniqueInput>
    connect?: Enumerable<mdl_contextWhereUniqueInput>
    update?: Enumerable<mdl_contextUpdateWithWhereUniqueWithoutCourseInput>
    updateMany?: Enumerable<mdl_contextUpdateManyWithWhereWithoutCourseInput>
    deleteMany?: Enumerable<mdl_contextScalarWhereInput>
  }

  export type mdl_customfield_dataUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<Enumerable<mdl_customfield_dataCreateWithoutCourseInput>, Enumerable<mdl_customfield_dataUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<mdl_customfield_dataCreateOrConnectWithoutCourseInput>
    upsert?: Enumerable<mdl_customfield_dataUpsertWithWhereUniqueWithoutCourseInput>
    createMany?: mdl_customfield_dataCreateManyCourseInputEnvelope
    set?: Enumerable<mdl_customfield_dataWhereUniqueInput>
    disconnect?: Enumerable<mdl_customfield_dataWhereUniqueInput>
    delete?: Enumerable<mdl_customfield_dataWhereUniqueInput>
    connect?: Enumerable<mdl_customfield_dataWhereUniqueInput>
    update?: Enumerable<mdl_customfield_dataUpdateWithWhereUniqueWithoutCourseInput>
    updateMany?: Enumerable<mdl_customfield_dataUpdateManyWithWhereWithoutCourseInput>
    deleteMany?: Enumerable<mdl_customfield_dataScalarWhereInput>
  }

  export type mdl_contextUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<Enumerable<mdl_contextCreateWithoutCourseInput>, Enumerable<mdl_contextUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<mdl_contextCreateOrConnectWithoutCourseInput>
    upsert?: Enumerable<mdl_contextUpsertWithWhereUniqueWithoutCourseInput>
    createMany?: mdl_contextCreateManyCourseInputEnvelope
    set?: Enumerable<mdl_contextWhereUniqueInput>
    disconnect?: Enumerable<mdl_contextWhereUniqueInput>
    delete?: Enumerable<mdl_contextWhereUniqueInput>
    connect?: Enumerable<mdl_contextWhereUniqueInput>
    update?: Enumerable<mdl_contextUpdateWithWhereUniqueWithoutCourseInput>
    updateMany?: Enumerable<mdl_contextUpdateManyWithWhereWithoutCourseInput>
    deleteMany?: Enumerable<mdl_contextScalarWhereInput>
  }

  export type mdl_courseCreateNestedManyWithoutCategory_nameInput = {
    create?: XOR<Enumerable<mdl_courseCreateWithoutCategory_nameInput>, Enumerable<mdl_courseUncheckedCreateWithoutCategory_nameInput>>
    connectOrCreate?: Enumerable<mdl_courseCreateOrConnectWithoutCategory_nameInput>
    createMany?: mdl_courseCreateManyCategory_nameInputEnvelope
    connect?: Enumerable<mdl_courseWhereUniqueInput>
  }

  export type mdl_courseUncheckedCreateNestedManyWithoutCategory_nameInput = {
    create?: XOR<Enumerable<mdl_courseCreateWithoutCategory_nameInput>, Enumerable<mdl_courseUncheckedCreateWithoutCategory_nameInput>>
    connectOrCreate?: Enumerable<mdl_courseCreateOrConnectWithoutCategory_nameInput>
    createMany?: mdl_courseCreateManyCategory_nameInputEnvelope
    connect?: Enumerable<mdl_courseWhereUniqueInput>
  }

  export type mdl_courseUpdateManyWithoutCategory_nameNestedInput = {
    create?: XOR<Enumerable<mdl_courseCreateWithoutCategory_nameInput>, Enumerable<mdl_courseUncheckedCreateWithoutCategory_nameInput>>
    connectOrCreate?: Enumerable<mdl_courseCreateOrConnectWithoutCategory_nameInput>
    upsert?: Enumerable<mdl_courseUpsertWithWhereUniqueWithoutCategory_nameInput>
    createMany?: mdl_courseCreateManyCategory_nameInputEnvelope
    set?: Enumerable<mdl_courseWhereUniqueInput>
    disconnect?: Enumerable<mdl_courseWhereUniqueInput>
    delete?: Enumerable<mdl_courseWhereUniqueInput>
    connect?: Enumerable<mdl_courseWhereUniqueInput>
    update?: Enumerable<mdl_courseUpdateWithWhereUniqueWithoutCategory_nameInput>
    updateMany?: Enumerable<mdl_courseUpdateManyWithWhereWithoutCategory_nameInput>
    deleteMany?: Enumerable<mdl_courseScalarWhereInput>
  }

  export type mdl_courseUncheckedUpdateManyWithoutCategory_nameNestedInput = {
    create?: XOR<Enumerable<mdl_courseCreateWithoutCategory_nameInput>, Enumerable<mdl_courseUncheckedCreateWithoutCategory_nameInput>>
    connectOrCreate?: Enumerable<mdl_courseCreateOrConnectWithoutCategory_nameInput>
    upsert?: Enumerable<mdl_courseUpsertWithWhereUniqueWithoutCategory_nameInput>
    createMany?: mdl_courseCreateManyCategory_nameInputEnvelope
    set?: Enumerable<mdl_courseWhereUniqueInput>
    disconnect?: Enumerable<mdl_courseWhereUniqueInput>
    delete?: Enumerable<mdl_courseWhereUniqueInput>
    connect?: Enumerable<mdl_courseWhereUniqueInput>
    update?: Enumerable<mdl_courseUpdateWithWhereUniqueWithoutCategory_nameInput>
    updateMany?: Enumerable<mdl_courseUpdateManyWithWhereWithoutCategory_nameInput>
    deleteMany?: Enumerable<mdl_courseScalarWhereInput>
  }

  export type mdl_courseCreateNestedOneWithoutContextInput = {
    create?: XOR<mdl_courseCreateWithoutContextInput, mdl_courseUncheckedCreateWithoutContextInput>
    connectOrCreate?: mdl_courseCreateOrConnectWithoutContextInput
    connect?: mdl_courseWhereUniqueInput
  }

  export type mdl_filesCreateNestedManyWithoutContextInput = {
    create?: XOR<Enumerable<mdl_filesCreateWithoutContextInput>, Enumerable<mdl_filesUncheckedCreateWithoutContextInput>>
    connectOrCreate?: Enumerable<mdl_filesCreateOrConnectWithoutContextInput>
    createMany?: mdl_filesCreateManyContextInputEnvelope
    connect?: Enumerable<mdl_filesWhereUniqueInput>
  }

  export type mdl_filesUncheckedCreateNestedManyWithoutContextInput = {
    create?: XOR<Enumerable<mdl_filesCreateWithoutContextInput>, Enumerable<mdl_filesUncheckedCreateWithoutContextInput>>
    connectOrCreate?: Enumerable<mdl_filesCreateOrConnectWithoutContextInput>
    createMany?: mdl_filesCreateManyContextInputEnvelope
    connect?: Enumerable<mdl_filesWhereUniqueInput>
  }

  export type mdl_courseUpdateOneRequiredWithoutContextNestedInput = {
    create?: XOR<mdl_courseCreateWithoutContextInput, mdl_courseUncheckedCreateWithoutContextInput>
    connectOrCreate?: mdl_courseCreateOrConnectWithoutContextInput
    upsert?: mdl_courseUpsertWithoutContextInput
    connect?: mdl_courseWhereUniqueInput
    update?: XOR<mdl_courseUpdateWithoutContextInput, mdl_courseUncheckedUpdateWithoutContextInput>
  }

  export type mdl_filesUpdateManyWithoutContextNestedInput = {
    create?: XOR<Enumerable<mdl_filesCreateWithoutContextInput>, Enumerable<mdl_filesUncheckedCreateWithoutContextInput>>
    connectOrCreate?: Enumerable<mdl_filesCreateOrConnectWithoutContextInput>
    upsert?: Enumerable<mdl_filesUpsertWithWhereUniqueWithoutContextInput>
    createMany?: mdl_filesCreateManyContextInputEnvelope
    set?: Enumerable<mdl_filesWhereUniqueInput>
    disconnect?: Enumerable<mdl_filesWhereUniqueInput>
    delete?: Enumerable<mdl_filesWhereUniqueInput>
    connect?: Enumerable<mdl_filesWhereUniqueInput>
    update?: Enumerable<mdl_filesUpdateWithWhereUniqueWithoutContextInput>
    updateMany?: Enumerable<mdl_filesUpdateManyWithWhereWithoutContextInput>
    deleteMany?: Enumerable<mdl_filesScalarWhereInput>
  }

  export type mdl_filesUncheckedUpdateManyWithoutContextNestedInput = {
    create?: XOR<Enumerable<mdl_filesCreateWithoutContextInput>, Enumerable<mdl_filesUncheckedCreateWithoutContextInput>>
    connectOrCreate?: Enumerable<mdl_filesCreateOrConnectWithoutContextInput>
    upsert?: Enumerable<mdl_filesUpsertWithWhereUniqueWithoutContextInput>
    createMany?: mdl_filesCreateManyContextInputEnvelope
    set?: Enumerable<mdl_filesWhereUniqueInput>
    disconnect?: Enumerable<mdl_filesWhereUniqueInput>
    delete?: Enumerable<mdl_filesWhereUniqueInput>
    connect?: Enumerable<mdl_filesWhereUniqueInput>
    update?: Enumerable<mdl_filesUpdateWithWhereUniqueWithoutContextInput>
    updateMany?: Enumerable<mdl_filesUpdateManyWithWhereWithoutContextInput>
    deleteMany?: Enumerable<mdl_filesScalarWhereInput>
  }

  export type mdl_contextCreateNestedOneWithoutFilesInput = {
    create?: XOR<mdl_contextCreateWithoutFilesInput, mdl_contextUncheckedCreateWithoutFilesInput>
    connectOrCreate?: mdl_contextCreateOrConnectWithoutFilesInput
    connect?: mdl_contextWhereUniqueInput
  }

  export type mdl_contextUpdateOneRequiredWithoutFilesNestedInput = {
    create?: XOR<mdl_contextCreateWithoutFilesInput, mdl_contextUncheckedCreateWithoutFilesInput>
    connectOrCreate?: mdl_contextCreateOrConnectWithoutFilesInput
    upsert?: mdl_contextUpsertWithoutFilesInput
    connect?: mdl_contextWhereUniqueInput
    update?: XOR<mdl_contextUpdateWithoutFilesInput, mdl_contextUncheckedUpdateWithoutFilesInput>
  }

  export type mdl_customfield_fieldCreateNestedOneWithoutDatasInput = {
    create?: XOR<mdl_customfield_fieldCreateWithoutDatasInput, mdl_customfield_fieldUncheckedCreateWithoutDatasInput>
    connectOrCreate?: mdl_customfield_fieldCreateOrConnectWithoutDatasInput
    connect?: mdl_customfield_fieldWhereUniqueInput
  }

  export type mdl_courseCreateNestedOneWithoutCustom_dataInput = {
    create?: XOR<mdl_courseCreateWithoutCustom_dataInput, mdl_courseUncheckedCreateWithoutCustom_dataInput>
    connectOrCreate?: mdl_courseCreateOrConnectWithoutCustom_dataInput
    connect?: mdl_courseWhereUniqueInput
  }

  export type mdl_customfield_fieldUpdateOneRequiredWithoutDatasNestedInput = {
    create?: XOR<mdl_customfield_fieldCreateWithoutDatasInput, mdl_customfield_fieldUncheckedCreateWithoutDatasInput>
    connectOrCreate?: mdl_customfield_fieldCreateOrConnectWithoutDatasInput
    upsert?: mdl_customfield_fieldUpsertWithoutDatasInput
    connect?: mdl_customfield_fieldWhereUniqueInput
    update?: XOR<mdl_customfield_fieldUpdateWithoutDatasInput, mdl_customfield_fieldUncheckedUpdateWithoutDatasInput>
  }

  export type mdl_courseUpdateOneRequiredWithoutCustom_dataNestedInput = {
    create?: XOR<mdl_courseCreateWithoutCustom_dataInput, mdl_courseUncheckedCreateWithoutCustom_dataInput>
    connectOrCreate?: mdl_courseCreateOrConnectWithoutCustom_dataInput
    upsert?: mdl_courseUpsertWithoutCustom_dataInput
    connect?: mdl_courseWhereUniqueInput
    update?: XOR<mdl_courseUpdateWithoutCustom_dataInput, mdl_courseUncheckedUpdateWithoutCustom_dataInput>
  }

  export type mdl_customfield_dataCreateNestedManyWithoutField_nameInput = {
    create?: XOR<Enumerable<mdl_customfield_dataCreateWithoutField_nameInput>, Enumerable<mdl_customfield_dataUncheckedCreateWithoutField_nameInput>>
    connectOrCreate?: Enumerable<mdl_customfield_dataCreateOrConnectWithoutField_nameInput>
    createMany?: mdl_customfield_dataCreateManyField_nameInputEnvelope
    connect?: Enumerable<mdl_customfield_dataWhereUniqueInput>
  }

  export type mdl_customfield_dataUncheckedCreateNestedManyWithoutField_nameInput = {
    create?: XOR<Enumerable<mdl_customfield_dataCreateWithoutField_nameInput>, Enumerable<mdl_customfield_dataUncheckedCreateWithoutField_nameInput>>
    connectOrCreate?: Enumerable<mdl_customfield_dataCreateOrConnectWithoutField_nameInput>
    createMany?: mdl_customfield_dataCreateManyField_nameInputEnvelope
    connect?: Enumerable<mdl_customfield_dataWhereUniqueInput>
  }

  export type mdl_customfield_dataUpdateManyWithoutField_nameNestedInput = {
    create?: XOR<Enumerable<mdl_customfield_dataCreateWithoutField_nameInput>, Enumerable<mdl_customfield_dataUncheckedCreateWithoutField_nameInput>>
    connectOrCreate?: Enumerable<mdl_customfield_dataCreateOrConnectWithoutField_nameInput>
    upsert?: Enumerable<mdl_customfield_dataUpsertWithWhereUniqueWithoutField_nameInput>
    createMany?: mdl_customfield_dataCreateManyField_nameInputEnvelope
    set?: Enumerable<mdl_customfield_dataWhereUniqueInput>
    disconnect?: Enumerable<mdl_customfield_dataWhereUniqueInput>
    delete?: Enumerable<mdl_customfield_dataWhereUniqueInput>
    connect?: Enumerable<mdl_customfield_dataWhereUniqueInput>
    update?: Enumerable<mdl_customfield_dataUpdateWithWhereUniqueWithoutField_nameInput>
    updateMany?: Enumerable<mdl_customfield_dataUpdateManyWithWhereWithoutField_nameInput>
    deleteMany?: Enumerable<mdl_customfield_dataScalarWhereInput>
  }

  export type mdl_customfield_dataUncheckedUpdateManyWithoutField_nameNestedInput = {
    create?: XOR<Enumerable<mdl_customfield_dataCreateWithoutField_nameInput>, Enumerable<mdl_customfield_dataUncheckedCreateWithoutField_nameInput>>
    connectOrCreate?: Enumerable<mdl_customfield_dataCreateOrConnectWithoutField_nameInput>
    upsert?: Enumerable<mdl_customfield_dataUpsertWithWhereUniqueWithoutField_nameInput>
    createMany?: mdl_customfield_dataCreateManyField_nameInputEnvelope
    set?: Enumerable<mdl_customfield_dataWhereUniqueInput>
    disconnect?: Enumerable<mdl_customfield_dataWhereUniqueInput>
    delete?: Enumerable<mdl_customfield_dataWhereUniqueInput>
    connect?: Enumerable<mdl_customfield_dataWhereUniqueInput>
    update?: Enumerable<mdl_customfield_dataUpdateWithWhereUniqueWithoutField_nameInput>
    updateMany?: Enumerable<mdl_customfield_dataUpdateManyWithWhereWithoutField_nameInput>
    deleteMany?: Enumerable<mdl_customfield_dataScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type mdl_course_categoriesCreateWithoutCoursesInput = {
    name: string
    visible?: number
  }

  export type mdl_course_categoriesUncheckedCreateWithoutCoursesInput = {
    id?: number
    name: string
    visible?: number
  }

  export type mdl_course_categoriesCreateOrConnectWithoutCoursesInput = {
    where: mdl_course_categoriesWhereUniqueInput
    create: XOR<mdl_course_categoriesCreateWithoutCoursesInput, mdl_course_categoriesUncheckedCreateWithoutCoursesInput>
  }

  export type mdl_customfield_dataCreateWithoutCourseInput = {
    id: number
    value: string
    valueformat: number
    charvalue: string
    field_name: mdl_customfield_fieldCreateNestedOneWithoutDatasInput
  }

  export type mdl_customfield_dataUncheckedCreateWithoutCourseInput = {
    id: number
    fieldid: number
    value: string
    valueformat: number
    charvalue: string
  }

  export type mdl_customfield_dataCreateOrConnectWithoutCourseInput = {
    where: mdl_customfield_dataWhereUniqueInput
    create: XOR<mdl_customfield_dataCreateWithoutCourseInput, mdl_customfield_dataUncheckedCreateWithoutCourseInput>
  }

  export type mdl_customfield_dataCreateManyCourseInputEnvelope = {
    data: Enumerable<mdl_customfield_dataCreateManyCourseInput>
    skipDuplicates?: boolean
  }

  export type mdl_contextCreateWithoutCourseInput = {
    contextlevel: number
    files?: mdl_filesCreateNestedManyWithoutContextInput
  }

  export type mdl_contextUncheckedCreateWithoutCourseInput = {
    id?: number
    contextlevel: number
    files?: mdl_filesUncheckedCreateNestedManyWithoutContextInput
  }

  export type mdl_contextCreateOrConnectWithoutCourseInput = {
    where: mdl_contextWhereUniqueInput
    create: XOR<mdl_contextCreateWithoutCourseInput, mdl_contextUncheckedCreateWithoutCourseInput>
  }

  export type mdl_contextCreateManyCourseInputEnvelope = {
    data: Enumerable<mdl_contextCreateManyCourseInput>
    skipDuplicates?: boolean
  }

  export type mdl_course_categoriesUpsertWithoutCoursesInput = {
    update: XOR<mdl_course_categoriesUpdateWithoutCoursesInput, mdl_course_categoriesUncheckedUpdateWithoutCoursesInput>
    create: XOR<mdl_course_categoriesCreateWithoutCoursesInput, mdl_course_categoriesUncheckedCreateWithoutCoursesInput>
  }

  export type mdl_course_categoriesUpdateWithoutCoursesInput = {
    name?: StringFieldUpdateOperationsInput | string
    visible?: IntFieldUpdateOperationsInput | number
  }

  export type mdl_course_categoriesUncheckedUpdateWithoutCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    visible?: IntFieldUpdateOperationsInput | number
  }

  export type mdl_customfield_dataUpsertWithWhereUniqueWithoutCourseInput = {
    where: mdl_customfield_dataWhereUniqueInput
    update: XOR<mdl_customfield_dataUpdateWithoutCourseInput, mdl_customfield_dataUncheckedUpdateWithoutCourseInput>
    create: XOR<mdl_customfield_dataCreateWithoutCourseInput, mdl_customfield_dataUncheckedCreateWithoutCourseInput>
  }

  export type mdl_customfield_dataUpdateWithWhereUniqueWithoutCourseInput = {
    where: mdl_customfield_dataWhereUniqueInput
    data: XOR<mdl_customfield_dataUpdateWithoutCourseInput, mdl_customfield_dataUncheckedUpdateWithoutCourseInput>
  }

  export type mdl_customfield_dataUpdateManyWithWhereWithoutCourseInput = {
    where: mdl_customfield_dataScalarWhereInput
    data: XOR<mdl_customfield_dataUpdateManyMutationInput, mdl_customfield_dataUncheckedUpdateManyWithoutCustom_dataInput>
  }

  export type mdl_customfield_dataScalarWhereInput = {
    AND?: Enumerable<mdl_customfield_dataScalarWhereInput>
    OR?: Enumerable<mdl_customfield_dataScalarWhereInput>
    NOT?: Enumerable<mdl_customfield_dataScalarWhereInput>
    id?: IntFilter | number
    instanceid?: IntFilter | number
    fieldid?: IntFilter | number
    value?: StringFilter | string
    valueformat?: IntFilter | number
    charvalue?: StringFilter | string
  }

  export type mdl_contextUpsertWithWhereUniqueWithoutCourseInput = {
    where: mdl_contextWhereUniqueInput
    update: XOR<mdl_contextUpdateWithoutCourseInput, mdl_contextUncheckedUpdateWithoutCourseInput>
    create: XOR<mdl_contextCreateWithoutCourseInput, mdl_contextUncheckedCreateWithoutCourseInput>
  }

  export type mdl_contextUpdateWithWhereUniqueWithoutCourseInput = {
    where: mdl_contextWhereUniqueInput
    data: XOR<mdl_contextUpdateWithoutCourseInput, mdl_contextUncheckedUpdateWithoutCourseInput>
  }

  export type mdl_contextUpdateManyWithWhereWithoutCourseInput = {
    where: mdl_contextScalarWhereInput
    data: XOR<mdl_contextUpdateManyMutationInput, mdl_contextUncheckedUpdateManyWithoutContextInput>
  }

  export type mdl_contextScalarWhereInput = {
    AND?: Enumerable<mdl_contextScalarWhereInput>
    OR?: Enumerable<mdl_contextScalarWhereInput>
    NOT?: Enumerable<mdl_contextScalarWhereInput>
    id?: IntFilter | number
    instanceid?: IntFilter | number
    contextlevel?: IntFilter | number
  }

  export type mdl_courseCreateWithoutCategory_nameInput = {
    fullname: string
    shortname: string
    summary: string
    visible?: number
    timecreated: number
    custom_data?: mdl_customfield_dataCreateNestedManyWithoutCourseInput
    context?: mdl_contextCreateNestedManyWithoutCourseInput
  }

  export type mdl_courseUncheckedCreateWithoutCategory_nameInput = {
    id?: number
    fullname: string
    shortname: string
    summary: string
    visible?: number
    timecreated: number
    custom_data?: mdl_customfield_dataUncheckedCreateNestedManyWithoutCourseInput
    context?: mdl_contextUncheckedCreateNestedManyWithoutCourseInput
  }

  export type mdl_courseCreateOrConnectWithoutCategory_nameInput = {
    where: mdl_courseWhereUniqueInput
    create: XOR<mdl_courseCreateWithoutCategory_nameInput, mdl_courseUncheckedCreateWithoutCategory_nameInput>
  }

  export type mdl_courseCreateManyCategory_nameInputEnvelope = {
    data: Enumerable<mdl_courseCreateManyCategory_nameInput>
    skipDuplicates?: boolean
  }

  export type mdl_courseUpsertWithWhereUniqueWithoutCategory_nameInput = {
    where: mdl_courseWhereUniqueInput
    update: XOR<mdl_courseUpdateWithoutCategory_nameInput, mdl_courseUncheckedUpdateWithoutCategory_nameInput>
    create: XOR<mdl_courseCreateWithoutCategory_nameInput, mdl_courseUncheckedCreateWithoutCategory_nameInput>
  }

  export type mdl_courseUpdateWithWhereUniqueWithoutCategory_nameInput = {
    where: mdl_courseWhereUniqueInput
    data: XOR<mdl_courseUpdateWithoutCategory_nameInput, mdl_courseUncheckedUpdateWithoutCategory_nameInput>
  }

  export type mdl_courseUpdateManyWithWhereWithoutCategory_nameInput = {
    where: mdl_courseScalarWhereInput
    data: XOR<mdl_courseUpdateManyMutationInput, mdl_courseUncheckedUpdateManyWithoutCoursesInput>
  }

  export type mdl_courseScalarWhereInput = {
    AND?: Enumerable<mdl_courseScalarWhereInput>
    OR?: Enumerable<mdl_courseScalarWhereInput>
    NOT?: Enumerable<mdl_courseScalarWhereInput>
    id?: IntFilter | number
    category?: IntFilter | number
    fullname?: StringFilter | string
    shortname?: StringFilter | string
    summary?: StringFilter | string
    visible?: IntFilter | number
    timecreated?: IntFilter | number
  }

  export type mdl_courseCreateWithoutContextInput = {
    fullname: string
    shortname: string
    summary: string
    visible?: number
    timecreated: number
    category_name: mdl_course_categoriesCreateNestedOneWithoutCoursesInput
    custom_data?: mdl_customfield_dataCreateNestedManyWithoutCourseInput
  }

  export type mdl_courseUncheckedCreateWithoutContextInput = {
    id?: number
    category: number
    fullname: string
    shortname: string
    summary: string
    visible?: number
    timecreated: number
    custom_data?: mdl_customfield_dataUncheckedCreateNestedManyWithoutCourseInput
  }

  export type mdl_courseCreateOrConnectWithoutContextInput = {
    where: mdl_courseWhereUniqueInput
    create: XOR<mdl_courseCreateWithoutContextInput, mdl_courseUncheckedCreateWithoutContextInput>
  }

  export type mdl_filesCreateWithoutContextInput = {
    id: number
    filename: string
    component: string
  }

  export type mdl_filesUncheckedCreateWithoutContextInput = {
    id: number
    filename: string
    component: string
  }

  export type mdl_filesCreateOrConnectWithoutContextInput = {
    where: mdl_filesWhereUniqueInput
    create: XOR<mdl_filesCreateWithoutContextInput, mdl_filesUncheckedCreateWithoutContextInput>
  }

  export type mdl_filesCreateManyContextInputEnvelope = {
    data: Enumerable<mdl_filesCreateManyContextInput>
    skipDuplicates?: boolean
  }

  export type mdl_courseUpsertWithoutContextInput = {
    update: XOR<mdl_courseUpdateWithoutContextInput, mdl_courseUncheckedUpdateWithoutContextInput>
    create: XOR<mdl_courseCreateWithoutContextInput, mdl_courseUncheckedCreateWithoutContextInput>
  }

  export type mdl_courseUpdateWithoutContextInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    shortname?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    visible?: IntFieldUpdateOperationsInput | number
    timecreated?: IntFieldUpdateOperationsInput | number
    category_name?: mdl_course_categoriesUpdateOneRequiredWithoutCoursesNestedInput
    custom_data?: mdl_customfield_dataUpdateManyWithoutCourseNestedInput
  }

  export type mdl_courseUncheckedUpdateWithoutContextInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    shortname?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    visible?: IntFieldUpdateOperationsInput | number
    timecreated?: IntFieldUpdateOperationsInput | number
    custom_data?: mdl_customfield_dataUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type mdl_filesUpsertWithWhereUniqueWithoutContextInput = {
    where: mdl_filesWhereUniqueInput
    update: XOR<mdl_filesUpdateWithoutContextInput, mdl_filesUncheckedUpdateWithoutContextInput>
    create: XOR<mdl_filesCreateWithoutContextInput, mdl_filesUncheckedCreateWithoutContextInput>
  }

  export type mdl_filesUpdateWithWhereUniqueWithoutContextInput = {
    where: mdl_filesWhereUniqueInput
    data: XOR<mdl_filesUpdateWithoutContextInput, mdl_filesUncheckedUpdateWithoutContextInput>
  }

  export type mdl_filesUpdateManyWithWhereWithoutContextInput = {
    where: mdl_filesScalarWhereInput
    data: XOR<mdl_filesUpdateManyMutationInput, mdl_filesUncheckedUpdateManyWithoutFilesInput>
  }

  export type mdl_filesScalarWhereInput = {
    AND?: Enumerable<mdl_filesScalarWhereInput>
    OR?: Enumerable<mdl_filesScalarWhereInput>
    NOT?: Enumerable<mdl_filesScalarWhereInput>
    id?: IntFilter | number
    contextid?: IntFilter | number
    filename?: StringFilter | string
    component?: StringFilter | string
  }

  export type mdl_contextCreateWithoutFilesInput = {
    contextlevel: number
    course: mdl_courseCreateNestedOneWithoutContextInput
  }

  export type mdl_contextUncheckedCreateWithoutFilesInput = {
    id?: number
    instanceid: number
    contextlevel: number
  }

  export type mdl_contextCreateOrConnectWithoutFilesInput = {
    where: mdl_contextWhereUniqueInput
    create: XOR<mdl_contextCreateWithoutFilesInput, mdl_contextUncheckedCreateWithoutFilesInput>
  }

  export type mdl_contextUpsertWithoutFilesInput = {
    update: XOR<mdl_contextUpdateWithoutFilesInput, mdl_contextUncheckedUpdateWithoutFilesInput>
    create: XOR<mdl_contextCreateWithoutFilesInput, mdl_contextUncheckedCreateWithoutFilesInput>
  }

  export type mdl_contextUpdateWithoutFilesInput = {
    contextlevel?: IntFieldUpdateOperationsInput | number
    course?: mdl_courseUpdateOneRequiredWithoutContextNestedInput
  }

  export type mdl_contextUncheckedUpdateWithoutFilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    instanceid?: IntFieldUpdateOperationsInput | number
    contextlevel?: IntFieldUpdateOperationsInput | number
  }

  export type mdl_customfield_fieldCreateWithoutDatasInput = {
    id: number
    shortname: string
    name: string
  }

  export type mdl_customfield_fieldUncheckedCreateWithoutDatasInput = {
    id: number
    shortname: string
    name: string
  }

  export type mdl_customfield_fieldCreateOrConnectWithoutDatasInput = {
    where: mdl_customfield_fieldWhereUniqueInput
    create: XOR<mdl_customfield_fieldCreateWithoutDatasInput, mdl_customfield_fieldUncheckedCreateWithoutDatasInput>
  }

  export type mdl_courseCreateWithoutCustom_dataInput = {
    fullname: string
    shortname: string
    summary: string
    visible?: number
    timecreated: number
    category_name: mdl_course_categoriesCreateNestedOneWithoutCoursesInput
    context?: mdl_contextCreateNestedManyWithoutCourseInput
  }

  export type mdl_courseUncheckedCreateWithoutCustom_dataInput = {
    id?: number
    category: number
    fullname: string
    shortname: string
    summary: string
    visible?: number
    timecreated: number
    context?: mdl_contextUncheckedCreateNestedManyWithoutCourseInput
  }

  export type mdl_courseCreateOrConnectWithoutCustom_dataInput = {
    where: mdl_courseWhereUniqueInput
    create: XOR<mdl_courseCreateWithoutCustom_dataInput, mdl_courseUncheckedCreateWithoutCustom_dataInput>
  }

  export type mdl_customfield_fieldUpsertWithoutDatasInput = {
    update: XOR<mdl_customfield_fieldUpdateWithoutDatasInput, mdl_customfield_fieldUncheckedUpdateWithoutDatasInput>
    create: XOR<mdl_customfield_fieldCreateWithoutDatasInput, mdl_customfield_fieldUncheckedCreateWithoutDatasInput>
  }

  export type mdl_customfield_fieldUpdateWithoutDatasInput = {
    id?: IntFieldUpdateOperationsInput | number
    shortname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type mdl_customfield_fieldUncheckedUpdateWithoutDatasInput = {
    id?: IntFieldUpdateOperationsInput | number
    shortname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type mdl_courseUpsertWithoutCustom_dataInput = {
    update: XOR<mdl_courseUpdateWithoutCustom_dataInput, mdl_courseUncheckedUpdateWithoutCustom_dataInput>
    create: XOR<mdl_courseCreateWithoutCustom_dataInput, mdl_courseUncheckedCreateWithoutCustom_dataInput>
  }

  export type mdl_courseUpdateWithoutCustom_dataInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    shortname?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    visible?: IntFieldUpdateOperationsInput | number
    timecreated?: IntFieldUpdateOperationsInput | number
    category_name?: mdl_course_categoriesUpdateOneRequiredWithoutCoursesNestedInput
    context?: mdl_contextUpdateManyWithoutCourseNestedInput
  }

  export type mdl_courseUncheckedUpdateWithoutCustom_dataInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    shortname?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    visible?: IntFieldUpdateOperationsInput | number
    timecreated?: IntFieldUpdateOperationsInput | number
    context?: mdl_contextUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type mdl_customfield_dataCreateWithoutField_nameInput = {
    id: number
    value: string
    valueformat: number
    charvalue: string
    course: mdl_courseCreateNestedOneWithoutCustom_dataInput
  }

  export type mdl_customfield_dataUncheckedCreateWithoutField_nameInput = {
    id: number
    instanceid: number
    value: string
    valueformat: number
    charvalue: string
  }

  export type mdl_customfield_dataCreateOrConnectWithoutField_nameInput = {
    where: mdl_customfield_dataWhereUniqueInput
    create: XOR<mdl_customfield_dataCreateWithoutField_nameInput, mdl_customfield_dataUncheckedCreateWithoutField_nameInput>
  }

  export type mdl_customfield_dataCreateManyField_nameInputEnvelope = {
    data: Enumerable<mdl_customfield_dataCreateManyField_nameInput>
    skipDuplicates?: boolean
  }

  export type mdl_customfield_dataUpsertWithWhereUniqueWithoutField_nameInput = {
    where: mdl_customfield_dataWhereUniqueInput
    update: XOR<mdl_customfield_dataUpdateWithoutField_nameInput, mdl_customfield_dataUncheckedUpdateWithoutField_nameInput>
    create: XOR<mdl_customfield_dataCreateWithoutField_nameInput, mdl_customfield_dataUncheckedCreateWithoutField_nameInput>
  }

  export type mdl_customfield_dataUpdateWithWhereUniqueWithoutField_nameInput = {
    where: mdl_customfield_dataWhereUniqueInput
    data: XOR<mdl_customfield_dataUpdateWithoutField_nameInput, mdl_customfield_dataUncheckedUpdateWithoutField_nameInput>
  }

  export type mdl_customfield_dataUpdateManyWithWhereWithoutField_nameInput = {
    where: mdl_customfield_dataScalarWhereInput
    data: XOR<mdl_customfield_dataUpdateManyMutationInput, mdl_customfield_dataUncheckedUpdateManyWithoutDatasInput>
  }

  export type mdl_customfield_dataCreateManyCourseInput = {
    id: number
    fieldid: number
    value: string
    valueformat: number
    charvalue: string
  }

  export type mdl_contextCreateManyCourseInput = {
    id?: number
    contextlevel: number
  }

  export type mdl_customfield_dataUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    valueformat?: IntFieldUpdateOperationsInput | number
    charvalue?: StringFieldUpdateOperationsInput | string
    field_name?: mdl_customfield_fieldUpdateOneRequiredWithoutDatasNestedInput
  }

  export type mdl_customfield_dataUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    fieldid?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    valueformat?: IntFieldUpdateOperationsInput | number
    charvalue?: StringFieldUpdateOperationsInput | string
  }

  export type mdl_customfield_dataUncheckedUpdateManyWithoutCustom_dataInput = {
    id?: IntFieldUpdateOperationsInput | number
    fieldid?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    valueformat?: IntFieldUpdateOperationsInput | number
    charvalue?: StringFieldUpdateOperationsInput | string
  }

  export type mdl_contextUpdateWithoutCourseInput = {
    contextlevel?: IntFieldUpdateOperationsInput | number
    files?: mdl_filesUpdateManyWithoutContextNestedInput
  }

  export type mdl_contextUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    contextlevel?: IntFieldUpdateOperationsInput | number
    files?: mdl_filesUncheckedUpdateManyWithoutContextNestedInput
  }

  export type mdl_contextUncheckedUpdateManyWithoutContextInput = {
    id?: IntFieldUpdateOperationsInput | number
    contextlevel?: IntFieldUpdateOperationsInput | number
  }

  export type mdl_courseCreateManyCategory_nameInput = {
    id?: number
    fullname: string
    shortname: string
    summary: string
    visible?: number
    timecreated: number
  }

  export type mdl_courseUpdateWithoutCategory_nameInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    shortname?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    visible?: IntFieldUpdateOperationsInput | number
    timecreated?: IntFieldUpdateOperationsInput | number
    custom_data?: mdl_customfield_dataUpdateManyWithoutCourseNestedInput
    context?: mdl_contextUpdateManyWithoutCourseNestedInput
  }

  export type mdl_courseUncheckedUpdateWithoutCategory_nameInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    shortname?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    visible?: IntFieldUpdateOperationsInput | number
    timecreated?: IntFieldUpdateOperationsInput | number
    custom_data?: mdl_customfield_dataUncheckedUpdateManyWithoutCourseNestedInput
    context?: mdl_contextUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type mdl_courseUncheckedUpdateManyWithoutCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    shortname?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    visible?: IntFieldUpdateOperationsInput | number
    timecreated?: IntFieldUpdateOperationsInput | number
  }

  export type mdl_filesCreateManyContextInput = {
    id: number
    filename: string
    component: string
  }

  export type mdl_filesUpdateWithoutContextInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    component?: StringFieldUpdateOperationsInput | string
  }

  export type mdl_filesUncheckedUpdateWithoutContextInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    component?: StringFieldUpdateOperationsInput | string
  }

  export type mdl_filesUncheckedUpdateManyWithoutFilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    component?: StringFieldUpdateOperationsInput | string
  }

  export type mdl_customfield_dataCreateManyField_nameInput = {
    id: number
    instanceid: number
    value: string
    valueformat: number
    charvalue: string
  }

  export type mdl_customfield_dataUpdateWithoutField_nameInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    valueformat?: IntFieldUpdateOperationsInput | number
    charvalue?: StringFieldUpdateOperationsInput | string
    course?: mdl_courseUpdateOneRequiredWithoutCustom_dataNestedInput
  }

  export type mdl_customfield_dataUncheckedUpdateWithoutField_nameInput = {
    id?: IntFieldUpdateOperationsInput | number
    instanceid?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    valueformat?: IntFieldUpdateOperationsInput | number
    charvalue?: StringFieldUpdateOperationsInput | string
  }

  export type mdl_customfield_dataUncheckedUpdateManyWithoutDatasInput = {
    id?: IntFieldUpdateOperationsInput | number
    instanceid?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    valueformat?: IntFieldUpdateOperationsInput | number
    charvalue?: StringFieldUpdateOperationsInput | string
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
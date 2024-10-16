
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type UserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "User"
  objects: {
    roles: RolePayload<ExtArgs>[]
    enrolments: EnrolmentPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    name: string
    last_name: string
    email: string
    email_verified: number
    password: string
    country: string | null
    region: string | null
    username: string
    birth_day: Date | null
    deleted: number
    created_at: Date
    updated_at: Date
    remember_token: string | null
  }, ExtArgs["result"]["user"]>
  composites: {}
}

/**
 * Model User
 * 
 */
export type User = runtime.Types.DefaultSelection<UserPayload>
export type RolePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Role"
  objects: {
    permissions: PermissionPayload<ExtArgs>[]
    users: UserPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    name: string
    active: number
    created_at: Date
    updated_at: Date
  }, ExtArgs["result"]["role"]>
  composites: {}
}

/**
 * Model Role
 * 
 */
export type Role = runtime.Types.DefaultSelection<RolePayload>
export type PermissionPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Permission"
  objects: {
    roles: RolePayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    name: string
    created_at: Date
    updated_at: Date
  }, ExtArgs["result"]["permission"]>
  composites: {}
}

/**
 * Model Permission
 * 
 */
export type Permission = runtime.Types.DefaultSelection<PermissionPayload>
export type CoursePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Course"
  objects: {
    enrolments: EnrolmentPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    moodle_id: number
    fullname: string
    shortname: string
    category: string
    destacado: number
    created_at: Date
    updated_at: Date
  }, ExtArgs["result"]["course"]>
  composites: {}
}

/**
 * Model Course
 * 
 */
export type Course = runtime.Types.DefaultSelection<CoursePayload>
export type EnrolmentStatusPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "EnrolmentStatus"
  objects: {
    enrolements: EnrolmentPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    name: string
    description: string
    created_at: Date
    updated_at: Date
  }, ExtArgs["result"]["enrolmentStatus"]>
  composites: {}
}

/**
 * Model EnrolmentStatus
 * 
 */
export type EnrolmentStatus = runtime.Types.DefaultSelection<EnrolmentStatusPayload>
export type PaymentMethodPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "PaymentMethod"
  objects: {
    payments: PaymentPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    name: string
    label: string
    active: number
    created_at: Date
    updated_at: Date
  }, ExtArgs["result"]["paymentMethod"]>
  composites: {}
}

/**
 * Model PaymentMethod
 * 
 */
export type PaymentMethod = runtime.Types.DefaultSelection<PaymentMethodPayload>
export type PaymentPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Payment"
  objects: {
    payment_method: PaymentMethodPayload<ExtArgs>
    enrolments: EnrolmentPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    amount: number
    currency: string
    payment_status: string
    payment_id: string
    payer_id: string
    payer_email: string
    payer_name: string
    transaction_id: string
    file: string | null
    created_at: Date
    updated_at: Date
    payment_method_id: number
  }, ExtArgs["result"]["payment"]>
  composites: {}
}

/**
 * Model Payment
 * 
 */
export type Payment = runtime.Types.DefaultSelection<PaymentPayload>
export type EnrolmentPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Enrolment"
  objects: {
    user: UserPayload<ExtArgs>
    enrolment_status: EnrolmentStatusPayload<ExtArgs>
    payment: PaymentPayload<ExtArgs> | null
    course: CoursePayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: number
    username: string | null
    curso_moodle_id: number
    description: string
    created_at: Date
    updated_at: Date
    user_id: number
    enrolment_status_id: number
    payment_id: number | null
    course_id: number
  }, ExtArgs["result"]["enrolment"]>
  composites: {}
}

/**
 * Model Enrolment
 * 
 */
export type Enrolment = runtime.Types.DefaultSelection<EnrolmentPayload>
export type TestimonialPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Testimonial"
  objects: {}
  scalars: $Extensions.GetResult<{
    id: number
    autor: string
    updated_by: number
    text: string
    active: number
    file: string | null
    created_at: Date
    updated_at: Date
  }, ExtArgs["result"]["testimonial"]>
  composites: {}
}

/**
 * Model Testimonial
 * 
 */
export type Testimonial = runtime.Types.DefaultSelection<TestimonialPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
    : false,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.permission`: Exposes CRUD operations for the **Permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permission.findMany()
    * ```
    */
  get permission(): Prisma.PermissionDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.enrolmentStatus`: Exposes CRUD operations for the **EnrolmentStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EnrolmentStatuses
    * const enrolmentStatuses = await prisma.enrolmentStatus.findMany()
    * ```
    */
  get enrolmentStatus(): Prisma.EnrolmentStatusDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.paymentMethod`: Exposes CRUD operations for the **PaymentMethod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentMethods
    * const paymentMethods = await prisma.paymentMethod.findMany()
    * ```
    */
  get paymentMethod(): Prisma.PaymentMethodDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.enrolment`: Exposes CRUD operations for the **Enrolment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enrolments
    * const enrolments = await prisma.enrolment.findMany()
    * ```
    */
  get enrolment(): Prisma.EnrolmentDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.testimonial`: Exposes CRUD operations for the **Testimonial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Testimonials
    * const testimonials = await prisma.testimonial.findMany()
    * ```
    */
  get testimonial(): Prisma.TestimonialDelegate<GlobalReject, ExtArgs>;
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
  * Extensions
  */
  export type Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<T, A, F>
  export type Exact<T, W> = $Public.Exact<T, W>

  /**
   * Prisma Client JS version: 4.16.2
   * Query Engine version: 4bc8b6e1b66cb932731fb1bdbbc550d1e010de81
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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Role: 'Role',
    Permission: 'Permission',
    Course: 'Course',
    EnrolmentStatus: 'EnrolmentStatus',
    PaymentMethod: 'PaymentMethod',
    Payment: 'Payment',
    Enrolment: 'Enrolment',
    Testimonial: 'Testimonial'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'role' | 'permission' | 'course' | 'enrolmentStatus' | 'paymentMethod' | 'payment' | 'enrolment' | 'testimonial'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: UserPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: RolePayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>,
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Permission: {
        payload: PermissionPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.PermissionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PermissionPayload>
          }
          findFirst: {
            args: Prisma.PermissionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PermissionPayload>
          }
          findMany: {
            args: Prisma.PermissionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PermissionPayload>[]
          }
          create: {
            args: Prisma.PermissionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PermissionPayload>
          }
          createMany: {
            args: Prisma.PermissionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PermissionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PermissionPayload>
          }
          update: {
            args: Prisma.PermissionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PermissionPayload>
          }
          deleteMany: {
            args: Prisma.PermissionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PermissionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PermissionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PermissionPayload>
          }
          aggregate: {
            args: Prisma.PermissionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePermission>
          }
          groupBy: {
            args: Prisma.PermissionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissionCountArgs<ExtArgs>,
            result: $Utils.Optional<PermissionCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: CoursePayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>,
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      EnrolmentStatus: {
        payload: EnrolmentStatusPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.EnrolmentStatusFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EnrolmentStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnrolmentStatusFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EnrolmentStatusPayload>
          }
          findFirst: {
            args: Prisma.EnrolmentStatusFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EnrolmentStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnrolmentStatusFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EnrolmentStatusPayload>
          }
          findMany: {
            args: Prisma.EnrolmentStatusFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EnrolmentStatusPayload>[]
          }
          create: {
            args: Prisma.EnrolmentStatusCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EnrolmentStatusPayload>
          }
          createMany: {
            args: Prisma.EnrolmentStatusCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EnrolmentStatusDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EnrolmentStatusPayload>
          }
          update: {
            args: Prisma.EnrolmentStatusUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EnrolmentStatusPayload>
          }
          deleteMany: {
            args: Prisma.EnrolmentStatusDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EnrolmentStatusUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EnrolmentStatusUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EnrolmentStatusPayload>
          }
          aggregate: {
            args: Prisma.EnrolmentStatusAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEnrolmentStatus>
          }
          groupBy: {
            args: Prisma.EnrolmentStatusGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EnrolmentStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnrolmentStatusCountArgs<ExtArgs>,
            result: $Utils.Optional<EnrolmentStatusCountAggregateOutputType> | number
          }
        }
      }
      PaymentMethod: {
        payload: PaymentMethodPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.PaymentMethodFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PaymentMethodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentMethodFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PaymentMethodPayload>
          }
          findFirst: {
            args: Prisma.PaymentMethodFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PaymentMethodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentMethodFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PaymentMethodPayload>
          }
          findMany: {
            args: Prisma.PaymentMethodFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PaymentMethodPayload>[]
          }
          create: {
            args: Prisma.PaymentMethodCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PaymentMethodPayload>
          }
          createMany: {
            args: Prisma.PaymentMethodCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PaymentMethodDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PaymentMethodPayload>
          }
          update: {
            args: Prisma.PaymentMethodUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PaymentMethodPayload>
          }
          deleteMany: {
            args: Prisma.PaymentMethodDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentMethodUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PaymentMethodUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PaymentMethodPayload>
          }
          aggregate: {
            args: Prisma.PaymentMethodAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePaymentMethod>
          }
          groupBy: {
            args: Prisma.PaymentMethodGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PaymentMethodGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentMethodCountArgs<ExtArgs>,
            result: $Utils.Optional<PaymentMethodCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: PaymentPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>,
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Enrolment: {
        payload: EnrolmentPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.EnrolmentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EnrolmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnrolmentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EnrolmentPayload>
          }
          findFirst: {
            args: Prisma.EnrolmentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EnrolmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnrolmentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EnrolmentPayload>
          }
          findMany: {
            args: Prisma.EnrolmentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EnrolmentPayload>[]
          }
          create: {
            args: Prisma.EnrolmentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EnrolmentPayload>
          }
          createMany: {
            args: Prisma.EnrolmentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EnrolmentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EnrolmentPayload>
          }
          update: {
            args: Prisma.EnrolmentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EnrolmentPayload>
          }
          deleteMany: {
            args: Prisma.EnrolmentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EnrolmentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EnrolmentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EnrolmentPayload>
          }
          aggregate: {
            args: Prisma.EnrolmentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEnrolment>
          }
          groupBy: {
            args: Prisma.EnrolmentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EnrolmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnrolmentCountArgs<ExtArgs>,
            result: $Utils.Optional<EnrolmentCountAggregateOutputType> | number
          }
        }
      }
      Testimonial: {
        payload: TestimonialPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.TestimonialFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TestimonialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestimonialFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TestimonialPayload>
          }
          findFirst: {
            args: Prisma.TestimonialFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TestimonialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestimonialFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TestimonialPayload>
          }
          findMany: {
            args: Prisma.TestimonialFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TestimonialPayload>[]
          }
          create: {
            args: Prisma.TestimonialCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TestimonialPayload>
          }
          createMany: {
            args: Prisma.TestimonialCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TestimonialDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TestimonialPayload>
          }
          update: {
            args: Prisma.TestimonialUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TestimonialPayload>
          }
          deleteMany: {
            args: Prisma.TestimonialDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TestimonialUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TestimonialUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TestimonialPayload>
          }
          aggregate: {
            args: Prisma.TestimonialAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTestimonial>
          }
          groupBy: {
            args: Prisma.TestimonialGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TestimonialGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestimonialCountArgs<ExtArgs>,
            result: $Utils.Optional<TestimonialCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
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
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    roles: number
    enrolments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    roles?: boolean | UserCountOutputTypeCountRolesArgs
    enrolments?: boolean | UserCountOutputTypeCountEnrolmentsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEnrolmentsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: EnrolmentWhereInput
  }



  /**
   * Count Type RoleCountOutputType
   */


  export type RoleCountOutputType = {
    permissions: number
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    permissions?: boolean | RoleCountOutputTypeCountPermissionsArgs
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountPermissionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
  }


  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }



  /**
   * Count Type PermissionCountOutputType
   */


  export type PermissionCountOutputType = {
    roles: number
  }

  export type PermissionCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    roles?: boolean | PermissionCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes

  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionCountOutputType
     */
    select?: PermissionCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
  }



  /**
   * Count Type CourseCountOutputType
   */


  export type CourseCountOutputType = {
    enrolments: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    enrolments?: boolean | CourseCountOutputTypeCountEnrolmentsArgs
  }

  // Custom InputTypes

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountEnrolmentsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: EnrolmentWhereInput
  }



  /**
   * Count Type EnrolmentStatusCountOutputType
   */


  export type EnrolmentStatusCountOutputType = {
    enrolements: number
  }

  export type EnrolmentStatusCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    enrolements?: boolean | EnrolmentStatusCountOutputTypeCountEnrolementsArgs
  }

  // Custom InputTypes

  /**
   * EnrolmentStatusCountOutputType without action
   */
  export type EnrolmentStatusCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolmentStatusCountOutputType
     */
    select?: EnrolmentStatusCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * EnrolmentStatusCountOutputType without action
   */
  export type EnrolmentStatusCountOutputTypeCountEnrolementsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: EnrolmentWhereInput
  }



  /**
   * Count Type PaymentMethodCountOutputType
   */


  export type PaymentMethodCountOutputType = {
    payments: number
  }

  export type PaymentMethodCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    payments?: boolean | PaymentMethodCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes

  /**
   * PaymentMethodCountOutputType without action
   */
  export type PaymentMethodCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethodCountOutputType
     */
    select?: PaymentMethodCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PaymentMethodCountOutputType without action
   */
  export type PaymentMethodCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }



  /**
   * Count Type PaymentCountOutputType
   */


  export type PaymentCountOutputType = {
    enrolments: number
  }

  export type PaymentCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    enrolments?: boolean | PaymentCountOutputTypeCountEnrolmentsArgs
  }

  // Custom InputTypes

  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentCountOutputType
     */
    select?: PaymentCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeCountEnrolmentsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: EnrolmentWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    email_verified: number | null
    deleted: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    email_verified: number | null
    deleted: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    last_name: string | null
    email: string | null
    email_verified: number | null
    password: string | null
    country: string | null
    region: string | null
    username: string | null
    birth_day: Date | null
    deleted: number | null
    created_at: Date | null
    updated_at: Date | null
    remember_token: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    last_name: string | null
    email: string | null
    email_verified: number | null
    password: string | null
    country: string | null
    region: string | null
    username: string | null
    birth_day: Date | null
    deleted: number | null
    created_at: Date | null
    updated_at: Date | null
    remember_token: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    last_name: number
    email: number
    email_verified: number
    password: number
    country: number
    region: number
    username: number
    birth_day: number
    deleted: number
    created_at: number
    updated_at: number
    remember_token: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    email_verified?: true
    deleted?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    email_verified?: true
    deleted?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    last_name?: true
    email?: true
    email_verified?: true
    password?: true
    country?: true
    region?: true
    username?: true
    birth_day?: true
    deleted?: true
    created_at?: true
    updated_at?: true
    remember_token?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    last_name?: true
    email?: true
    email_verified?: true
    password?: true
    country?: true
    region?: true
    username?: true
    birth_day?: true
    deleted?: true
    created_at?: true
    updated_at?: true
    remember_token?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    last_name?: true
    email?: true
    email_verified?: true
    password?: true
    country?: true
    region?: true
    username?: true
    birth_day?: true
    deleted?: true
    created_at?: true
    updated_at?: true
    remember_token?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    name: string
    last_name: string
    email: string
    email_verified: number
    password: string
    country: string | null
    region: string | null
    username: string
    birth_day: Date | null
    deleted: number
    created_at: Date
    updated_at: Date
    remember_token: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    last_name?: boolean
    email?: boolean
    email_verified?: boolean
    password?: boolean
    country?: boolean
    region?: boolean
    username?: boolean
    birth_day?: boolean
    deleted?: boolean
    created_at?: boolean
    updated_at?: boolean
    remember_token?: boolean
    roles?: boolean | User$rolesArgs<ExtArgs>
    enrolments?: boolean | User$enrolmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    last_name?: boolean
    email?: boolean
    email_verified?: boolean
    password?: boolean
    country?: boolean
    region?: boolean
    username?: boolean
    birth_day?: boolean
    deleted?: boolean
    created_at?: boolean
    updated_at?: boolean
    remember_token?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    roles?: boolean | User$rolesArgs<ExtArgs>
    enrolments?: boolean | User$enrolmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeArgs<ExtArgs>
  }


  type UserGetPayload<S extends boolean | null | undefined | UserArgs> = $Types.GetResult<UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<UserPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    roles<T extends User$rolesArgs<ExtArgs> = {}>(args?: Subset<T, User$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<RolePayload<ExtArgs>, T, 'findMany', never>| Null>;

    enrolments<T extends User$enrolmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$enrolmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<EnrolmentPayload<ExtArgs>, T, 'findMany', never>| Null>;

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
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends UserFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends UserFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.roles
   */
  export type User$rolesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
    orderBy?: Enumerable<RoleOrderByWithRelationInput>
    cursor?: RoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RoleScalarFieldEnum>
  }


  /**
   * User.enrolments
   */
  export type User$enrolmentsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrolment
     */
    select?: EnrolmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrolmentInclude<ExtArgs> | null
    where?: EnrolmentWhereInput
    orderBy?: Enumerable<EnrolmentOrderByWithRelationInput>
    cursor?: EnrolmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<EnrolmentScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Role
   */


  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
    active: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
    active: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    name: string | null
    active: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    active: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
    active?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
    active?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    active?: true
    created_at?: true
    updated_at?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    active?: true
    created_at?: true
    updated_at?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: Enumerable<RoleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: Enumerable<RoleOrderByWithAggregationInput>
    by: RoleScalarFieldEnum[]
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }


  export type RoleGroupByOutputType = {
    id: number
    name: string
    active: number
    created_at: Date
    updated_at: Date
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
    permissions?: boolean | Role$permissionsArgs<ExtArgs>
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type RoleInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    permissions?: boolean | Role$permissionsArgs<ExtArgs>
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeArgs<ExtArgs>
  }


  type RoleGetPayload<S extends boolean | null | undefined | RoleArgs> = $Types.GetResult<RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<RoleFindManyArgs, 'select' | 'include'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RoleFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Role'> extends True ? Prisma__RoleClient<$Types.GetResult<RolePayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__RoleClient<$Types.GetResult<RolePayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Role that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RoleClient<$Types.GetResult<RolePayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RoleFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Role'> extends True ? Prisma__RoleClient<$Types.GetResult<RolePayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__RoleClient<$Types.GetResult<RolePayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Role that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RoleClient<$Types.GetResult<RolePayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RoleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<RolePayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
    **/
    create<T extends RoleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RoleCreateArgs<ExtArgs>>
    ): Prisma__RoleClient<$Types.GetResult<RolePayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Roles.
     *     @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     *     @example
     *     // Create many Roles
     *     const role = await prisma.role.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RoleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
    **/
    delete<T extends RoleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>
    ): Prisma__RoleClient<$Types.GetResult<RolePayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RoleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>
    ): Prisma__RoleClient<$Types.GetResult<RolePayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RoleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RoleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
    **/
    upsert<T extends RoleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>
    ): Prisma__RoleClient<$Types.GetResult<RolePayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    permissions<T extends Role$permissionsArgs<ExtArgs> = {}>(args?: Subset<T, Role$permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<PermissionPayload<ExtArgs>, T, 'findMany', never>| Null>;

    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<UserPayload<ExtArgs>, T, 'findMany', never>| Null>;

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
   * Role base type for findUnique actions
   */
  export type RoleFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUnique
   */
  export interface RoleFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends RoleFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }


  /**
   * Role base type for findFirst actions
   */
  export type RoleFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: Enumerable<RoleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: Enumerable<RoleScalarFieldEnum>
  }

  /**
   * Role findFirst
   */
  export interface RoleFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends RoleFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: Enumerable<RoleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: Enumerable<RoleScalarFieldEnum>
  }


  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: Enumerable<RoleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: Enumerable<RoleScalarFieldEnum>
  }


  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }


  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: Enumerable<RoleCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }


  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
  }


  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }


  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }


  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
  }


  /**
   * Role.permissions
   */
  export type Role$permissionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude<ExtArgs> | null
    where?: PermissionWhereInput
    orderBy?: Enumerable<PermissionOrderByWithRelationInput>
    cursor?: PermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PermissionScalarFieldEnum>
  }


  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * Role without action
   */
  export type RoleArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
  }



  /**
   * Model Permission
   */


  export type AggregatePermission = {
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  export type PermissionAvgAggregateOutputType = {
    id: number | null
  }

  export type PermissionSumAggregateOutputType = {
    id: number | null
  }

  export type PermissionMinAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PermissionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PermissionCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PermissionAvgAggregateInputType = {
    id?: true
  }

  export type PermissionSumAggregateInputType = {
    id?: true
  }

  export type PermissionMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type PermissionMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type PermissionCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PermissionAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permission to aggregate.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: Enumerable<PermissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permissions
    **/
    _count?: true | PermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionMaxAggregateInputType
  }

  export type GetPermissionAggregateType<T extends PermissionAggregateArgs> = {
        [P in keyof T & keyof AggregatePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermission[P]>
      : GetScalarType<T[P], AggregatePermission[P]>
  }




  export type PermissionGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
    orderBy?: Enumerable<PermissionOrderByWithAggregationInput>
    by: PermissionScalarFieldEnum[]
    having?: PermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionCountAggregateInputType | true
    _avg?: PermissionAvgAggregateInputType
    _sum?: PermissionSumAggregateInputType
    _min?: PermissionMinAggregateInputType
    _max?: PermissionMaxAggregateInputType
  }


  export type PermissionGroupByOutputType = {
    id: number
    name: string
    created_at: Date
    updated_at: Date
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  type GetPermissionGroupByPayload<T extends PermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionGroupByOutputType[P]>
        }
      >
    >


  export type PermissionSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    roles?: boolean | Permission$rolesArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type PermissionInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    roles?: boolean | Permission$rolesArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeArgs<ExtArgs>
  }


  type PermissionGetPayload<S extends boolean | null | undefined | PermissionArgs> = $Types.GetResult<PermissionPayload, S>

  type PermissionCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PermissionFindManyArgs, 'select' | 'include'> & {
      select?: PermissionCountAggregateInputType | true
    }

  export interface PermissionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permission'], meta: { name: 'Permission' } }
    /**
     * Find zero or one Permission that matches the filter.
     * @param {PermissionFindUniqueArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PermissionFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PermissionFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Permission'> extends True ? Prisma__PermissionClient<$Types.GetResult<PermissionPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__PermissionClient<$Types.GetResult<PermissionPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Permission that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PermissionFindUniqueOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PermissionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PermissionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PermissionClient<$Types.GetResult<PermissionPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PermissionFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PermissionFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Permission'> extends True ? Prisma__PermissionClient<$Types.GetResult<PermissionPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__PermissionClient<$Types.GetResult<PermissionPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Permission that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PermissionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PermissionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PermissionClient<$Types.GetResult<PermissionPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permission.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionWithIdOnly = await prisma.permission.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PermissionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PermissionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<PermissionPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Permission.
     * @param {PermissionCreateArgs} args - Arguments to create a Permission.
     * @example
     * // Create one Permission
     * const Permission = await prisma.permission.create({
     *   data: {
     *     // ... data to create a Permission
     *   }
     * })
     * 
    **/
    create<T extends PermissionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PermissionCreateArgs<ExtArgs>>
    ): Prisma__PermissionClient<$Types.GetResult<PermissionPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Permissions.
     *     @param {PermissionCreateManyArgs} args - Arguments to create many Permissions.
     *     @example
     *     // Create many Permissions
     *     const permission = await prisma.permission.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PermissionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PermissionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Permission.
     * @param {PermissionDeleteArgs} args - Arguments to delete one Permission.
     * @example
     * // Delete one Permission
     * const Permission = await prisma.permission.delete({
     *   where: {
     *     // ... filter to delete one Permission
     *   }
     * })
     * 
    **/
    delete<T extends PermissionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PermissionDeleteArgs<ExtArgs>>
    ): Prisma__PermissionClient<$Types.GetResult<PermissionPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Permission.
     * @param {PermissionUpdateArgs} args - Arguments to update one Permission.
     * @example
     * // Update one Permission
     * const permission = await prisma.permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PermissionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PermissionUpdateArgs<ExtArgs>>
    ): Prisma__PermissionClient<$Types.GetResult<PermissionPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Permissions.
     * @param {PermissionDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PermissionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PermissionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PermissionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PermissionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Permission.
     * @param {PermissionUpsertArgs} args - Arguments to update or create a Permission.
     * @example
     * // Update or create a Permission
     * const permission = await prisma.permission.upsert({
     *   create: {
     *     // ... data to create a Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permission we want to update
     *   }
     * })
    **/
    upsert<T extends PermissionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PermissionUpsertArgs<ExtArgs>>
    ): Prisma__PermissionClient<$Types.GetResult<PermissionPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permission.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends PermissionCountArgs>(
      args?: Subset<T, PermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PermissionAggregateArgs>(args: Subset<T, PermissionAggregateArgs>): Prisma.PrismaPromise<GetPermissionAggregateType<T>>

    /**
     * Group by Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionGroupByArgs} args - Group by arguments.
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
      T extends PermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionGroupByArgs['orderBy'] }
        : { orderBy?: PermissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PermissionClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    roles<T extends Permission$rolesArgs<ExtArgs> = {}>(args?: Subset<T, Permission$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<RolePayload<ExtArgs>, T, 'findMany', never>| Null>;

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
   * Permission base type for findUnique actions
   */
  export type PermissionFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findUnique
   */
  export interface PermissionFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends PermissionFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Permission findUniqueOrThrow
   */
  export type PermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }


  /**
   * Permission base type for findFirst actions
   */
  export type PermissionFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: Enumerable<PermissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: Enumerable<PermissionScalarFieldEnum>
  }

  /**
   * Permission findFirst
   */
  export interface PermissionFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends PermissionFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Permission findFirstOrThrow
   */
  export type PermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: Enumerable<PermissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: Enumerable<PermissionScalarFieldEnum>
  }


  /**
   * Permission findMany
   */
  export type PermissionFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: Enumerable<PermissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    distinct?: Enumerable<PermissionScalarFieldEnum>
  }


  /**
   * Permission create
   */
  export type PermissionCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Permission.
     */
    data: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
  }


  /**
   * Permission createMany
   */
  export type PermissionCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permissions.
     */
    data: Enumerable<PermissionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Permission update
   */
  export type PermissionUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Permission.
     */
    data: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
    /**
     * Choose, which Permission to update.
     */
    where: PermissionWhereUniqueInput
  }


  /**
   * Permission updateMany
   */
  export type PermissionUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
  }


  /**
   * Permission upsert
   */
  export type PermissionUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Permission to update in case it exists.
     */
    where: PermissionWhereUniqueInput
    /**
     * In case the Permission found by the `where` argument doesn't exist, create a new Permission with this data.
     */
    create: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
    /**
     * In case the Permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
  }


  /**
   * Permission delete
   */
  export type PermissionDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter which Permission to delete.
     */
    where: PermissionWhereUniqueInput
  }


  /**
   * Permission deleteMany
   */
  export type PermissionDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissions to delete
     */
    where?: PermissionWhereInput
  }


  /**
   * Permission.roles
   */
  export type Permission$rolesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
    orderBy?: Enumerable<RoleOrderByWithRelationInput>
    cursor?: RoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RoleScalarFieldEnum>
  }


  /**
   * Permission without action
   */
  export type PermissionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude<ExtArgs> | null
  }



  /**
   * Model Course
   */


  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    id: number | null
    moodle_id: number | null
    destacado: number | null
  }

  export type CourseSumAggregateOutputType = {
    id: number | null
    moodle_id: number | null
    destacado: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: number | null
    moodle_id: number | null
    fullname: string | null
    shortname: string | null
    category: string | null
    destacado: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    id: number | null
    moodle_id: number | null
    fullname: string | null
    shortname: string | null
    category: string | null
    destacado: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    moodle_id: number
    fullname: number
    shortname: number
    category: number
    destacado: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    id?: true
    moodle_id?: true
    destacado?: true
  }

  export type CourseSumAggregateInputType = {
    id?: true
    moodle_id?: true
    destacado?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    moodle_id?: true
    fullname?: true
    shortname?: true
    category?: true
    destacado?: true
    created_at?: true
    updated_at?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    moodle_id?: true
    fullname?: true
    shortname?: true
    category?: true
    destacado?: true
    created_at?: true
    updated_at?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    moodle_id?: true
    fullname?: true
    shortname?: true
    category?: true
    destacado?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: Enumerable<CourseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: Enumerable<CourseOrderByWithAggregationInput>
    by: CourseScalarFieldEnum[]
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }


  export type CourseGroupByOutputType = {
    id: number
    moodle_id: number
    fullname: string
    shortname: string
    category: string
    destacado: number
    created_at: Date
    updated_at: Date
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    moodle_id?: boolean
    fullname?: boolean
    shortname?: boolean
    category?: boolean
    destacado?: boolean
    created_at?: boolean
    updated_at?: boolean
    enrolments?: boolean | Course$enrolmentsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    moodle_id?: boolean
    fullname?: boolean
    shortname?: boolean
    category?: boolean
    destacado?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CourseInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    enrolments?: boolean | Course$enrolmentsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeArgs<ExtArgs>
  }


  type CourseGetPayload<S extends boolean | null | undefined | CourseArgs> = $Types.GetResult<CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<CourseFindManyArgs, 'select' | 'include'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CourseFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Course'> extends True ? Prisma__CourseClient<$Types.GetResult<CoursePayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__CourseClient<$Types.GetResult<CoursePayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Course that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CourseClient<$Types.GetResult<CoursePayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CourseFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Course'> extends True ? Prisma__CourseClient<$Types.GetResult<CoursePayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__CourseClient<$Types.GetResult<CoursePayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Course that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CourseClient<$Types.GetResult<CoursePayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CourseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<CoursePayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
    **/
    create<T extends CourseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CourseCreateArgs<ExtArgs>>
    ): Prisma__CourseClient<$Types.GetResult<CoursePayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Courses.
     *     @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     *     @example
     *     // Create many Courses
     *     const course = await prisma.course.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CourseCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
    **/
    delete<T extends CourseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>
    ): Prisma__CourseClient<$Types.GetResult<CoursePayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CourseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>
    ): Prisma__CourseClient<$Types.GetResult<CoursePayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CourseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CourseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
    **/
    upsert<T extends CourseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>
    ): Prisma__CourseClient<$Types.GetResult<CoursePayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
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
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    enrolments<T extends Course$enrolmentsArgs<ExtArgs> = {}>(args?: Subset<T, Course$enrolmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<EnrolmentPayload<ExtArgs>, T, 'findMany', never>| Null>;

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
   * Course base type for findUnique actions
   */
  export type CourseFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUnique
   */
  export interface CourseFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends CourseFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }


  /**
   * Course base type for findFirst actions
   */
  export type CourseFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: Enumerable<CourseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: Enumerable<CourseScalarFieldEnum>
  }

  /**
   * Course findFirst
   */
  export interface CourseFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends CourseFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: Enumerable<CourseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: Enumerable<CourseScalarFieldEnum>
  }


  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: Enumerable<CourseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: Enumerable<CourseScalarFieldEnum>
  }


  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }


  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: Enumerable<CourseCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }


  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
  }


  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }


  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }


  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
  }


  /**
   * Course.enrolments
   */
  export type Course$enrolmentsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrolment
     */
    select?: EnrolmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrolmentInclude<ExtArgs> | null
    where?: EnrolmentWhereInput
    orderBy?: Enumerable<EnrolmentOrderByWithRelationInput>
    cursor?: EnrolmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<EnrolmentScalarFieldEnum>
  }


  /**
   * Course without action
   */
  export type CourseArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
  }



  /**
   * Model EnrolmentStatus
   */


  export type AggregateEnrolmentStatus = {
    _count: EnrolmentStatusCountAggregateOutputType | null
    _avg: EnrolmentStatusAvgAggregateOutputType | null
    _sum: EnrolmentStatusSumAggregateOutputType | null
    _min: EnrolmentStatusMinAggregateOutputType | null
    _max: EnrolmentStatusMaxAggregateOutputType | null
  }

  export type EnrolmentStatusAvgAggregateOutputType = {
    id: number | null
  }

  export type EnrolmentStatusSumAggregateOutputType = {
    id: number | null
  }

  export type EnrolmentStatusMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EnrolmentStatusMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EnrolmentStatusCountAggregateOutputType = {
    id: number
    name: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type EnrolmentStatusAvgAggregateInputType = {
    id?: true
  }

  export type EnrolmentStatusSumAggregateInputType = {
    id?: true
  }

  export type EnrolmentStatusMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type EnrolmentStatusMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type EnrolmentStatusCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type EnrolmentStatusAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnrolmentStatus to aggregate.
     */
    where?: EnrolmentStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnrolmentStatuses to fetch.
     */
    orderBy?: Enumerable<EnrolmentStatusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnrolmentStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnrolmentStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnrolmentStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EnrolmentStatuses
    **/
    _count?: true | EnrolmentStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnrolmentStatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnrolmentStatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrolmentStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrolmentStatusMaxAggregateInputType
  }

  export type GetEnrolmentStatusAggregateType<T extends EnrolmentStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateEnrolmentStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrolmentStatus[P]>
      : GetScalarType<T[P], AggregateEnrolmentStatus[P]>
  }




  export type EnrolmentStatusGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: EnrolmentStatusWhereInput
    orderBy?: Enumerable<EnrolmentStatusOrderByWithAggregationInput>
    by: EnrolmentStatusScalarFieldEnum[]
    having?: EnrolmentStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrolmentStatusCountAggregateInputType | true
    _avg?: EnrolmentStatusAvgAggregateInputType
    _sum?: EnrolmentStatusSumAggregateInputType
    _min?: EnrolmentStatusMinAggregateInputType
    _max?: EnrolmentStatusMaxAggregateInputType
  }


  export type EnrolmentStatusGroupByOutputType = {
    id: number
    name: string
    description: string
    created_at: Date
    updated_at: Date
    _count: EnrolmentStatusCountAggregateOutputType | null
    _avg: EnrolmentStatusAvgAggregateOutputType | null
    _sum: EnrolmentStatusSumAggregateOutputType | null
    _min: EnrolmentStatusMinAggregateOutputType | null
    _max: EnrolmentStatusMaxAggregateOutputType | null
  }

  type GetEnrolmentStatusGroupByPayload<T extends EnrolmentStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<EnrolmentStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrolmentStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrolmentStatusGroupByOutputType[P]>
            : GetScalarType<T[P], EnrolmentStatusGroupByOutputType[P]>
        }
      >
    >


  export type EnrolmentStatusSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    enrolements?: boolean | EnrolmentStatus$enrolementsArgs<ExtArgs>
    _count?: boolean | EnrolmentStatusCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["enrolmentStatus"]>

  export type EnrolmentStatusSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type EnrolmentStatusInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    enrolements?: boolean | EnrolmentStatus$enrolementsArgs<ExtArgs>
    _count?: boolean | EnrolmentStatusCountOutputTypeArgs<ExtArgs>
  }


  type EnrolmentStatusGetPayload<S extends boolean | null | undefined | EnrolmentStatusArgs> = $Types.GetResult<EnrolmentStatusPayload, S>

  type EnrolmentStatusCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<EnrolmentStatusFindManyArgs, 'select' | 'include'> & {
      select?: EnrolmentStatusCountAggregateInputType | true
    }

  export interface EnrolmentStatusDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EnrolmentStatus'], meta: { name: 'EnrolmentStatus' } }
    /**
     * Find zero or one EnrolmentStatus that matches the filter.
     * @param {EnrolmentStatusFindUniqueArgs} args - Arguments to find a EnrolmentStatus
     * @example
     * // Get one EnrolmentStatus
     * const enrolmentStatus = await prisma.enrolmentStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EnrolmentStatusFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EnrolmentStatusFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'EnrolmentStatus'> extends True ? Prisma__EnrolmentStatusClient<$Types.GetResult<EnrolmentStatusPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__EnrolmentStatusClient<$Types.GetResult<EnrolmentStatusPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one EnrolmentStatus that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EnrolmentStatusFindUniqueOrThrowArgs} args - Arguments to find a EnrolmentStatus
     * @example
     * // Get one EnrolmentStatus
     * const enrolmentStatus = await prisma.enrolmentStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EnrolmentStatusFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EnrolmentStatusFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EnrolmentStatusClient<$Types.GetResult<EnrolmentStatusPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first EnrolmentStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolmentStatusFindFirstArgs} args - Arguments to find a EnrolmentStatus
     * @example
     * // Get one EnrolmentStatus
     * const enrolmentStatus = await prisma.enrolmentStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EnrolmentStatusFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EnrolmentStatusFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'EnrolmentStatus'> extends True ? Prisma__EnrolmentStatusClient<$Types.GetResult<EnrolmentStatusPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__EnrolmentStatusClient<$Types.GetResult<EnrolmentStatusPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first EnrolmentStatus that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolmentStatusFindFirstOrThrowArgs} args - Arguments to find a EnrolmentStatus
     * @example
     * // Get one EnrolmentStatus
     * const enrolmentStatus = await prisma.enrolmentStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EnrolmentStatusFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EnrolmentStatusFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EnrolmentStatusClient<$Types.GetResult<EnrolmentStatusPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more EnrolmentStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolmentStatusFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EnrolmentStatuses
     * const enrolmentStatuses = await prisma.enrolmentStatus.findMany()
     * 
     * // Get first 10 EnrolmentStatuses
     * const enrolmentStatuses = await prisma.enrolmentStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enrolmentStatusWithIdOnly = await prisma.enrolmentStatus.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EnrolmentStatusFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EnrolmentStatusFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<EnrolmentStatusPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a EnrolmentStatus.
     * @param {EnrolmentStatusCreateArgs} args - Arguments to create a EnrolmentStatus.
     * @example
     * // Create one EnrolmentStatus
     * const EnrolmentStatus = await prisma.enrolmentStatus.create({
     *   data: {
     *     // ... data to create a EnrolmentStatus
     *   }
     * })
     * 
    **/
    create<T extends EnrolmentStatusCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EnrolmentStatusCreateArgs<ExtArgs>>
    ): Prisma__EnrolmentStatusClient<$Types.GetResult<EnrolmentStatusPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many EnrolmentStatuses.
     *     @param {EnrolmentStatusCreateManyArgs} args - Arguments to create many EnrolmentStatuses.
     *     @example
     *     // Create many EnrolmentStatuses
     *     const enrolmentStatus = await prisma.enrolmentStatus.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EnrolmentStatusCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EnrolmentStatusCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EnrolmentStatus.
     * @param {EnrolmentStatusDeleteArgs} args - Arguments to delete one EnrolmentStatus.
     * @example
     * // Delete one EnrolmentStatus
     * const EnrolmentStatus = await prisma.enrolmentStatus.delete({
     *   where: {
     *     // ... filter to delete one EnrolmentStatus
     *   }
     * })
     * 
    **/
    delete<T extends EnrolmentStatusDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EnrolmentStatusDeleteArgs<ExtArgs>>
    ): Prisma__EnrolmentStatusClient<$Types.GetResult<EnrolmentStatusPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one EnrolmentStatus.
     * @param {EnrolmentStatusUpdateArgs} args - Arguments to update one EnrolmentStatus.
     * @example
     * // Update one EnrolmentStatus
     * const enrolmentStatus = await prisma.enrolmentStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EnrolmentStatusUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EnrolmentStatusUpdateArgs<ExtArgs>>
    ): Prisma__EnrolmentStatusClient<$Types.GetResult<EnrolmentStatusPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more EnrolmentStatuses.
     * @param {EnrolmentStatusDeleteManyArgs} args - Arguments to filter EnrolmentStatuses to delete.
     * @example
     * // Delete a few EnrolmentStatuses
     * const { count } = await prisma.enrolmentStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EnrolmentStatusDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EnrolmentStatusDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnrolmentStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolmentStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EnrolmentStatuses
     * const enrolmentStatus = await prisma.enrolmentStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EnrolmentStatusUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EnrolmentStatusUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EnrolmentStatus.
     * @param {EnrolmentStatusUpsertArgs} args - Arguments to update or create a EnrolmentStatus.
     * @example
     * // Update or create a EnrolmentStatus
     * const enrolmentStatus = await prisma.enrolmentStatus.upsert({
     *   create: {
     *     // ... data to create a EnrolmentStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EnrolmentStatus we want to update
     *   }
     * })
    **/
    upsert<T extends EnrolmentStatusUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EnrolmentStatusUpsertArgs<ExtArgs>>
    ): Prisma__EnrolmentStatusClient<$Types.GetResult<EnrolmentStatusPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of EnrolmentStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolmentStatusCountArgs} args - Arguments to filter EnrolmentStatuses to count.
     * @example
     * // Count the number of EnrolmentStatuses
     * const count = await prisma.enrolmentStatus.count({
     *   where: {
     *     // ... the filter for the EnrolmentStatuses we want to count
     *   }
     * })
    **/
    count<T extends EnrolmentStatusCountArgs>(
      args?: Subset<T, EnrolmentStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrolmentStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EnrolmentStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolmentStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnrolmentStatusAggregateArgs>(args: Subset<T, EnrolmentStatusAggregateArgs>): Prisma.PrismaPromise<GetEnrolmentStatusAggregateType<T>>

    /**
     * Group by EnrolmentStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolmentStatusGroupByArgs} args - Group by arguments.
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
      T extends EnrolmentStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnrolmentStatusGroupByArgs['orderBy'] }
        : { orderBy?: EnrolmentStatusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnrolmentStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrolmentStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for EnrolmentStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EnrolmentStatusClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    enrolements<T extends EnrolmentStatus$enrolementsArgs<ExtArgs> = {}>(args?: Subset<T, EnrolmentStatus$enrolementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<EnrolmentPayload<ExtArgs>, T, 'findMany', never>| Null>;

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
   * EnrolmentStatus base type for findUnique actions
   */
  export type EnrolmentStatusFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolmentStatus
     */
    select?: EnrolmentStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrolmentStatusInclude<ExtArgs> | null
    /**
     * Filter, which EnrolmentStatus to fetch.
     */
    where: EnrolmentStatusWhereUniqueInput
  }

  /**
   * EnrolmentStatus findUnique
   */
  export interface EnrolmentStatusFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends EnrolmentStatusFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * EnrolmentStatus findUniqueOrThrow
   */
  export type EnrolmentStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolmentStatus
     */
    select?: EnrolmentStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrolmentStatusInclude<ExtArgs> | null
    /**
     * Filter, which EnrolmentStatus to fetch.
     */
    where: EnrolmentStatusWhereUniqueInput
  }


  /**
   * EnrolmentStatus base type for findFirst actions
   */
  export type EnrolmentStatusFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolmentStatus
     */
    select?: EnrolmentStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrolmentStatusInclude<ExtArgs> | null
    /**
     * Filter, which EnrolmentStatus to fetch.
     */
    where?: EnrolmentStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnrolmentStatuses to fetch.
     */
    orderBy?: Enumerable<EnrolmentStatusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnrolmentStatuses.
     */
    cursor?: EnrolmentStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnrolmentStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnrolmentStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnrolmentStatuses.
     */
    distinct?: Enumerable<EnrolmentStatusScalarFieldEnum>
  }

  /**
   * EnrolmentStatus findFirst
   */
  export interface EnrolmentStatusFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends EnrolmentStatusFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * EnrolmentStatus findFirstOrThrow
   */
  export type EnrolmentStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolmentStatus
     */
    select?: EnrolmentStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrolmentStatusInclude<ExtArgs> | null
    /**
     * Filter, which EnrolmentStatus to fetch.
     */
    where?: EnrolmentStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnrolmentStatuses to fetch.
     */
    orderBy?: Enumerable<EnrolmentStatusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnrolmentStatuses.
     */
    cursor?: EnrolmentStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnrolmentStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnrolmentStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnrolmentStatuses.
     */
    distinct?: Enumerable<EnrolmentStatusScalarFieldEnum>
  }


  /**
   * EnrolmentStatus findMany
   */
  export type EnrolmentStatusFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolmentStatus
     */
    select?: EnrolmentStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrolmentStatusInclude<ExtArgs> | null
    /**
     * Filter, which EnrolmentStatuses to fetch.
     */
    where?: EnrolmentStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnrolmentStatuses to fetch.
     */
    orderBy?: Enumerable<EnrolmentStatusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EnrolmentStatuses.
     */
    cursor?: EnrolmentStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnrolmentStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnrolmentStatuses.
     */
    skip?: number
    distinct?: Enumerable<EnrolmentStatusScalarFieldEnum>
  }


  /**
   * EnrolmentStatus create
   */
  export type EnrolmentStatusCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolmentStatus
     */
    select?: EnrolmentStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrolmentStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a EnrolmentStatus.
     */
    data: XOR<EnrolmentStatusCreateInput, EnrolmentStatusUncheckedCreateInput>
  }


  /**
   * EnrolmentStatus createMany
   */
  export type EnrolmentStatusCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EnrolmentStatuses.
     */
    data: Enumerable<EnrolmentStatusCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * EnrolmentStatus update
   */
  export type EnrolmentStatusUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolmentStatus
     */
    select?: EnrolmentStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrolmentStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a EnrolmentStatus.
     */
    data: XOR<EnrolmentStatusUpdateInput, EnrolmentStatusUncheckedUpdateInput>
    /**
     * Choose, which EnrolmentStatus to update.
     */
    where: EnrolmentStatusWhereUniqueInput
  }


  /**
   * EnrolmentStatus updateMany
   */
  export type EnrolmentStatusUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EnrolmentStatuses.
     */
    data: XOR<EnrolmentStatusUpdateManyMutationInput, EnrolmentStatusUncheckedUpdateManyInput>
    /**
     * Filter which EnrolmentStatuses to update
     */
    where?: EnrolmentStatusWhereInput
  }


  /**
   * EnrolmentStatus upsert
   */
  export type EnrolmentStatusUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolmentStatus
     */
    select?: EnrolmentStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrolmentStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the EnrolmentStatus to update in case it exists.
     */
    where: EnrolmentStatusWhereUniqueInput
    /**
     * In case the EnrolmentStatus found by the `where` argument doesn't exist, create a new EnrolmentStatus with this data.
     */
    create: XOR<EnrolmentStatusCreateInput, EnrolmentStatusUncheckedCreateInput>
    /**
     * In case the EnrolmentStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnrolmentStatusUpdateInput, EnrolmentStatusUncheckedUpdateInput>
  }


  /**
   * EnrolmentStatus delete
   */
  export type EnrolmentStatusDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolmentStatus
     */
    select?: EnrolmentStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrolmentStatusInclude<ExtArgs> | null
    /**
     * Filter which EnrolmentStatus to delete.
     */
    where: EnrolmentStatusWhereUniqueInput
  }


  /**
   * EnrolmentStatus deleteMany
   */
  export type EnrolmentStatusDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnrolmentStatuses to delete
     */
    where?: EnrolmentStatusWhereInput
  }


  /**
   * EnrolmentStatus.enrolements
   */
  export type EnrolmentStatus$enrolementsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrolment
     */
    select?: EnrolmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrolmentInclude<ExtArgs> | null
    where?: EnrolmentWhereInput
    orderBy?: Enumerable<EnrolmentOrderByWithRelationInput>
    cursor?: EnrolmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<EnrolmentScalarFieldEnum>
  }


  /**
   * EnrolmentStatus without action
   */
  export type EnrolmentStatusArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolmentStatus
     */
    select?: EnrolmentStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrolmentStatusInclude<ExtArgs> | null
  }



  /**
   * Model PaymentMethod
   */


  export type AggregatePaymentMethod = {
    _count: PaymentMethodCountAggregateOutputType | null
    _avg: PaymentMethodAvgAggregateOutputType | null
    _sum: PaymentMethodSumAggregateOutputType | null
    _min: PaymentMethodMinAggregateOutputType | null
    _max: PaymentMethodMaxAggregateOutputType | null
  }

  export type PaymentMethodAvgAggregateOutputType = {
    id: number | null
    active: number | null
  }

  export type PaymentMethodSumAggregateOutputType = {
    id: number | null
    active: number | null
  }

  export type PaymentMethodMinAggregateOutputType = {
    id: number | null
    name: string | null
    label: string | null
    active: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PaymentMethodMaxAggregateOutputType = {
    id: number | null
    name: string | null
    label: string | null
    active: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PaymentMethodCountAggregateOutputType = {
    id: number
    name: number
    label: number
    active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PaymentMethodAvgAggregateInputType = {
    id?: true
    active?: true
  }

  export type PaymentMethodSumAggregateInputType = {
    id?: true
    active?: true
  }

  export type PaymentMethodMinAggregateInputType = {
    id?: true
    name?: true
    label?: true
    active?: true
    created_at?: true
    updated_at?: true
  }

  export type PaymentMethodMaxAggregateInputType = {
    id?: true
    name?: true
    label?: true
    active?: true
    created_at?: true
    updated_at?: true
  }

  export type PaymentMethodCountAggregateInputType = {
    id?: true
    name?: true
    label?: true
    active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PaymentMethodAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentMethod to aggregate.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: Enumerable<PaymentMethodOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentMethods
    **/
    _count?: true | PaymentMethodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentMethodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentMethodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMethodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMethodMaxAggregateInputType
  }

  export type GetPaymentMethodAggregateType<T extends PaymentMethodAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentMethod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentMethod[P]>
      : GetScalarType<T[P], AggregatePaymentMethod[P]>
  }




  export type PaymentMethodGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PaymentMethodWhereInput
    orderBy?: Enumerable<PaymentMethodOrderByWithAggregationInput>
    by: PaymentMethodScalarFieldEnum[]
    having?: PaymentMethodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentMethodCountAggregateInputType | true
    _avg?: PaymentMethodAvgAggregateInputType
    _sum?: PaymentMethodSumAggregateInputType
    _min?: PaymentMethodMinAggregateInputType
    _max?: PaymentMethodMaxAggregateInputType
  }


  export type PaymentMethodGroupByOutputType = {
    id: number
    name: string
    label: string
    active: number
    created_at: Date
    updated_at: Date
    _count: PaymentMethodCountAggregateOutputType | null
    _avg: PaymentMethodAvgAggregateOutputType | null
    _sum: PaymentMethodSumAggregateOutputType | null
    _min: PaymentMethodMinAggregateOutputType | null
    _max: PaymentMethodMaxAggregateOutputType | null
  }

  type GetPaymentMethodGroupByPayload<T extends PaymentMethodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PaymentMethodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentMethodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentMethodGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentMethodGroupByOutputType[P]>
        }
      >
    >


  export type PaymentMethodSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    label?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
    payments?: boolean | PaymentMethod$paymentsArgs<ExtArgs>
    _count?: boolean | PaymentMethodCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["paymentMethod"]>

  export type PaymentMethodSelectScalar = {
    id?: boolean
    name?: boolean
    label?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type PaymentMethodInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    payments?: boolean | PaymentMethod$paymentsArgs<ExtArgs>
    _count?: boolean | PaymentMethodCountOutputTypeArgs<ExtArgs>
  }


  type PaymentMethodGetPayload<S extends boolean | null | undefined | PaymentMethodArgs> = $Types.GetResult<PaymentMethodPayload, S>

  type PaymentMethodCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PaymentMethodFindManyArgs, 'select' | 'include'> & {
      select?: PaymentMethodCountAggregateInputType | true
    }

  export interface PaymentMethodDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentMethod'], meta: { name: 'PaymentMethod' } }
    /**
     * Find zero or one PaymentMethod that matches the filter.
     * @param {PaymentMethodFindUniqueArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PaymentMethodFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PaymentMethodFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PaymentMethod'> extends True ? Prisma__PaymentMethodClient<$Types.GetResult<PaymentMethodPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__PaymentMethodClient<$Types.GetResult<PaymentMethodPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one PaymentMethod that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PaymentMethodFindUniqueOrThrowArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PaymentMethodFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentMethodFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PaymentMethodClient<$Types.GetResult<PaymentMethodPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first PaymentMethod that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindFirstArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PaymentMethodFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PaymentMethodFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PaymentMethod'> extends True ? Prisma__PaymentMethodClient<$Types.GetResult<PaymentMethodPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__PaymentMethodClient<$Types.GetResult<PaymentMethodPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first PaymentMethod that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindFirstOrThrowArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PaymentMethodFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentMethodFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PaymentMethodClient<$Types.GetResult<PaymentMethodPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more PaymentMethods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentMethods
     * const paymentMethods = await prisma.paymentMethod.findMany()
     * 
     * // Get first 10 PaymentMethods
     * const paymentMethods = await prisma.paymentMethod.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentMethodWithIdOnly = await prisma.paymentMethod.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PaymentMethodFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentMethodFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<PaymentMethodPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a PaymentMethod.
     * @param {PaymentMethodCreateArgs} args - Arguments to create a PaymentMethod.
     * @example
     * // Create one PaymentMethod
     * const PaymentMethod = await prisma.paymentMethod.create({
     *   data: {
     *     // ... data to create a PaymentMethod
     *   }
     * })
     * 
    **/
    create<T extends PaymentMethodCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentMethodCreateArgs<ExtArgs>>
    ): Prisma__PaymentMethodClient<$Types.GetResult<PaymentMethodPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many PaymentMethods.
     *     @param {PaymentMethodCreateManyArgs} args - Arguments to create many PaymentMethods.
     *     @example
     *     // Create many PaymentMethods
     *     const paymentMethod = await prisma.paymentMethod.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PaymentMethodCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentMethodCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PaymentMethod.
     * @param {PaymentMethodDeleteArgs} args - Arguments to delete one PaymentMethod.
     * @example
     * // Delete one PaymentMethod
     * const PaymentMethod = await prisma.paymentMethod.delete({
     *   where: {
     *     // ... filter to delete one PaymentMethod
     *   }
     * })
     * 
    **/
    delete<T extends PaymentMethodDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentMethodDeleteArgs<ExtArgs>>
    ): Prisma__PaymentMethodClient<$Types.GetResult<PaymentMethodPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one PaymentMethod.
     * @param {PaymentMethodUpdateArgs} args - Arguments to update one PaymentMethod.
     * @example
     * // Update one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PaymentMethodUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentMethodUpdateArgs<ExtArgs>>
    ): Prisma__PaymentMethodClient<$Types.GetResult<PaymentMethodPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more PaymentMethods.
     * @param {PaymentMethodDeleteManyArgs} args - Arguments to filter PaymentMethods to delete.
     * @example
     * // Delete a few PaymentMethods
     * const { count } = await prisma.paymentMethod.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PaymentMethodDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentMethodDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PaymentMethodUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentMethodUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaymentMethod.
     * @param {PaymentMethodUpsertArgs} args - Arguments to update or create a PaymentMethod.
     * @example
     * // Update or create a PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.upsert({
     *   create: {
     *     // ... data to create a PaymentMethod
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentMethod we want to update
     *   }
     * })
    **/
    upsert<T extends PaymentMethodUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentMethodUpsertArgs<ExtArgs>>
    ): Prisma__PaymentMethodClient<$Types.GetResult<PaymentMethodPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodCountArgs} args - Arguments to filter PaymentMethods to count.
     * @example
     * // Count the number of PaymentMethods
     * const count = await prisma.paymentMethod.count({
     *   where: {
     *     // ... the filter for the PaymentMethods we want to count
     *   }
     * })
    **/
    count<T extends PaymentMethodCountArgs>(
      args?: Subset<T, PaymentMethodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentMethodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentMethodAggregateArgs>(args: Subset<T, PaymentMethodAggregateArgs>): Prisma.PrismaPromise<GetPaymentMethodAggregateType<T>>

    /**
     * Group by PaymentMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodGroupByArgs} args - Group by arguments.
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
      T extends PaymentMethodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentMethodGroupByArgs['orderBy'] }
        : { orderBy?: PaymentMethodGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentMethodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentMethodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentMethod.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PaymentMethodClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    payments<T extends PaymentMethod$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, PaymentMethod$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<PaymentPayload<ExtArgs>, T, 'findMany', never>| Null>;

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
   * PaymentMethod base type for findUnique actions
   */
  export type PaymentMethodFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod findUnique
   */
  export interface PaymentMethodFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends PaymentMethodFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PaymentMethod findUniqueOrThrow
   */
  export type PaymentMethodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where: PaymentMethodWhereUniqueInput
  }


  /**
   * PaymentMethod base type for findFirst actions
   */
  export type PaymentMethodFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: Enumerable<PaymentMethodOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentMethods.
     */
    distinct?: Enumerable<PaymentMethodScalarFieldEnum>
  }

  /**
   * PaymentMethod findFirst
   */
  export interface PaymentMethodFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends PaymentMethodFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PaymentMethod findFirstOrThrow
   */
  export type PaymentMethodFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: Enumerable<PaymentMethodOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentMethods.
     */
    distinct?: Enumerable<PaymentMethodScalarFieldEnum>
  }


  /**
   * PaymentMethod findMany
   */
  export type PaymentMethodFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethods to fetch.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: Enumerable<PaymentMethodOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    distinct?: Enumerable<PaymentMethodScalarFieldEnum>
  }


  /**
   * PaymentMethod create
   */
  export type PaymentMethodCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentMethod.
     */
    data: XOR<PaymentMethodCreateInput, PaymentMethodUncheckedCreateInput>
  }


  /**
   * PaymentMethod createMany
   */
  export type PaymentMethodCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentMethods.
     */
    data: Enumerable<PaymentMethodCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PaymentMethod update
   */
  export type PaymentMethodUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentMethod.
     */
    data: XOR<PaymentMethodUpdateInput, PaymentMethodUncheckedUpdateInput>
    /**
     * Choose, which PaymentMethod to update.
     */
    where: PaymentMethodWhereUniqueInput
  }


  /**
   * PaymentMethod updateMany
   */
  export type PaymentMethodUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentMethods.
     */
    data: XOR<PaymentMethodUpdateManyMutationInput, PaymentMethodUncheckedUpdateManyInput>
    /**
     * Filter which PaymentMethods to update
     */
    where?: PaymentMethodWhereInput
  }


  /**
   * PaymentMethod upsert
   */
  export type PaymentMethodUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentMethod to update in case it exists.
     */
    where: PaymentMethodWhereUniqueInput
    /**
     * In case the PaymentMethod found by the `where` argument doesn't exist, create a new PaymentMethod with this data.
     */
    create: XOR<PaymentMethodCreateInput, PaymentMethodUncheckedCreateInput>
    /**
     * In case the PaymentMethod was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentMethodUpdateInput, PaymentMethodUncheckedUpdateInput>
  }


  /**
   * PaymentMethod delete
   */
  export type PaymentMethodDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter which PaymentMethod to delete.
     */
    where: PaymentMethodWhereUniqueInput
  }


  /**
   * PaymentMethod deleteMany
   */
  export type PaymentMethodDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentMethods to delete
     */
    where?: PaymentMethodWhereInput
  }


  /**
   * PaymentMethod.payments
   */
  export type PaymentMethod$paymentsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: Enumerable<PaymentOrderByWithRelationInput>
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PaymentScalarFieldEnum>
  }


  /**
   * PaymentMethod without action
   */
  export type PaymentMethodArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentMethodInclude<ExtArgs> | null
  }



  /**
   * Model Payment
   */


  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    payment_method_id: number | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    amount: number | null
    payment_method_id: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    amount: number | null
    currency: string | null
    payment_status: string | null
    payment_id: string | null
    payer_id: string | null
    payer_email: string | null
    payer_name: string | null
    transaction_id: string | null
    file: string | null
    created_at: Date | null
    updated_at: Date | null
    payment_method_id: number | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    amount: number | null
    currency: string | null
    payment_status: string | null
    payment_id: string | null
    payer_id: string | null
    payer_email: string | null
    payer_name: string | null
    transaction_id: string | null
    file: string | null
    created_at: Date | null
    updated_at: Date | null
    payment_method_id: number | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    amount: number
    currency: number
    payment_status: number
    payment_id: number
    payer_id: number
    payer_email: number
    payer_name: number
    transaction_id: number
    file: number
    created_at: number
    updated_at: number
    payment_method_id: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    amount?: true
    payment_method_id?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    amount?: true
    payment_method_id?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    amount?: true
    currency?: true
    payment_status?: true
    payment_id?: true
    payer_id?: true
    payer_email?: true
    payer_name?: true
    transaction_id?: true
    file?: true
    created_at?: true
    updated_at?: true
    payment_method_id?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    amount?: true
    currency?: true
    payment_status?: true
    payment_id?: true
    payer_id?: true
    payer_email?: true
    payer_name?: true
    transaction_id?: true
    file?: true
    created_at?: true
    updated_at?: true
    payment_method_id?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    amount?: true
    currency?: true
    payment_status?: true
    payment_id?: true
    payer_id?: true
    payer_email?: true
    payer_name?: true
    transaction_id?: true
    file?: true
    created_at?: true
    updated_at?: true
    payment_method_id?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: Enumerable<PaymentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: Enumerable<PaymentOrderByWithAggregationInput>
    by: PaymentScalarFieldEnum[]
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }


  export type PaymentGroupByOutputType = {
    id: number
    amount: number
    currency: string
    payment_status: string
    payment_id: string
    payer_id: string
    payer_email: string
    payer_name: string
    transaction_id: string
    file: string | null
    created_at: Date
    updated_at: Date
    payment_method_id: number
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    currency?: boolean
    payment_status?: boolean
    payment_id?: boolean
    payer_id?: boolean
    payer_email?: boolean
    payer_name?: boolean
    transaction_id?: boolean
    file?: boolean
    created_at?: boolean
    updated_at?: boolean
    payment_method_id?: boolean
    payment_method?: boolean | PaymentMethodArgs<ExtArgs>
    enrolments?: boolean | Payment$enrolmentsArgs<ExtArgs>
    _count?: boolean | PaymentCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    amount?: boolean
    currency?: boolean
    payment_status?: boolean
    payment_id?: boolean
    payer_id?: boolean
    payer_email?: boolean
    payer_name?: boolean
    transaction_id?: boolean
    file?: boolean
    created_at?: boolean
    updated_at?: boolean
    payment_method_id?: boolean
  }

  export type PaymentInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    payment_method?: boolean | PaymentMethodArgs<ExtArgs>
    enrolments?: boolean | Payment$enrolmentsArgs<ExtArgs>
    _count?: boolean | PaymentCountOutputTypeArgs<ExtArgs>
  }


  type PaymentGetPayload<S extends boolean | null | undefined | PaymentArgs> = $Types.GetResult<PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PaymentFindManyArgs, 'select' | 'include'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PaymentFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Payment'> extends True ? Prisma__PaymentClient<$Types.GetResult<PaymentPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__PaymentClient<$Types.GetResult<PaymentPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Payment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Types.GetResult<PaymentPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PaymentFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Payment'> extends True ? Prisma__PaymentClient<$Types.GetResult<PaymentPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__PaymentClient<$Types.GetResult<PaymentPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Payment that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Types.GetResult<PaymentPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PaymentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<PaymentPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
    **/
    create<T extends PaymentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Types.GetResult<PaymentPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Payments.
     *     @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     *     @example
     *     // Create many Payments
     *     const payment = await prisma.payment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PaymentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
    **/
    delete<T extends PaymentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Types.GetResult<PaymentPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PaymentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Types.GetResult<PaymentPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PaymentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PaymentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
    **/
    upsert<T extends PaymentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Types.GetResult<PaymentPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    payment_method<T extends PaymentMethodArgs<ExtArgs> = {}>(args?: Subset<T, PaymentMethodArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Types.GetResult<PaymentMethodPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    enrolments<T extends Payment$enrolmentsArgs<ExtArgs> = {}>(args?: Subset<T, Payment$enrolmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<EnrolmentPayload<ExtArgs>, T, 'findMany', never>| Null>;

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
   * Payment base type for findUnique actions
   */
  export type PaymentFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUnique
   */
  export interface PaymentFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends PaymentFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }


  /**
   * Payment base type for findFirst actions
   */
  export type PaymentFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: Enumerable<PaymentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: Enumerable<PaymentScalarFieldEnum>
  }

  /**
   * Payment findFirst
   */
  export interface PaymentFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends PaymentFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: Enumerable<PaymentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: Enumerable<PaymentScalarFieldEnum>
  }


  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: Enumerable<PaymentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: Enumerable<PaymentScalarFieldEnum>
  }


  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }


  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: Enumerable<PaymentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }


  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
  }


  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }


  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }


  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
  }


  /**
   * Payment.enrolments
   */
  export type Payment$enrolmentsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrolment
     */
    select?: EnrolmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrolmentInclude<ExtArgs> | null
    where?: EnrolmentWhereInput
    orderBy?: Enumerable<EnrolmentOrderByWithRelationInput>
    cursor?: EnrolmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<EnrolmentScalarFieldEnum>
  }


  /**
   * Payment without action
   */
  export type PaymentArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null
  }



  /**
   * Model Enrolment
   */


  export type AggregateEnrolment = {
    _count: EnrolmentCountAggregateOutputType | null
    _avg: EnrolmentAvgAggregateOutputType | null
    _sum: EnrolmentSumAggregateOutputType | null
    _min: EnrolmentMinAggregateOutputType | null
    _max: EnrolmentMaxAggregateOutputType | null
  }

  export type EnrolmentAvgAggregateOutputType = {
    id: number | null
    curso_moodle_id: number | null
    user_id: number | null
    enrolment_status_id: number | null
    payment_id: number | null
    course_id: number | null
  }

  export type EnrolmentSumAggregateOutputType = {
    id: number | null
    curso_moodle_id: number | null
    user_id: number | null
    enrolment_status_id: number | null
    payment_id: number | null
    course_id: number | null
  }

  export type EnrolmentMinAggregateOutputType = {
    id: number | null
    username: string | null
    curso_moodle_id: number | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: number | null
    enrolment_status_id: number | null
    payment_id: number | null
    course_id: number | null
  }

  export type EnrolmentMaxAggregateOutputType = {
    id: number | null
    username: string | null
    curso_moodle_id: number | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: number | null
    enrolment_status_id: number | null
    payment_id: number | null
    course_id: number | null
  }

  export type EnrolmentCountAggregateOutputType = {
    id: number
    username: number
    curso_moodle_id: number
    description: number
    created_at: number
    updated_at: number
    user_id: number
    enrolment_status_id: number
    payment_id: number
    course_id: number
    _all: number
  }


  export type EnrolmentAvgAggregateInputType = {
    id?: true
    curso_moodle_id?: true
    user_id?: true
    enrolment_status_id?: true
    payment_id?: true
    course_id?: true
  }

  export type EnrolmentSumAggregateInputType = {
    id?: true
    curso_moodle_id?: true
    user_id?: true
    enrolment_status_id?: true
    payment_id?: true
    course_id?: true
  }

  export type EnrolmentMinAggregateInputType = {
    id?: true
    username?: true
    curso_moodle_id?: true
    description?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    enrolment_status_id?: true
    payment_id?: true
    course_id?: true
  }

  export type EnrolmentMaxAggregateInputType = {
    id?: true
    username?: true
    curso_moodle_id?: true
    description?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    enrolment_status_id?: true
    payment_id?: true
    course_id?: true
  }

  export type EnrolmentCountAggregateInputType = {
    id?: true
    username?: true
    curso_moodle_id?: true
    description?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    enrolment_status_id?: true
    payment_id?: true
    course_id?: true
    _all?: true
  }

  export type EnrolmentAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrolment to aggregate.
     */
    where?: EnrolmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrolments to fetch.
     */
    orderBy?: Enumerable<EnrolmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnrolmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrolments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrolments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enrolments
    **/
    _count?: true | EnrolmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnrolmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnrolmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrolmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrolmentMaxAggregateInputType
  }

  export type GetEnrolmentAggregateType<T extends EnrolmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEnrolment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrolment[P]>
      : GetScalarType<T[P], AggregateEnrolment[P]>
  }




  export type EnrolmentGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: EnrolmentWhereInput
    orderBy?: Enumerable<EnrolmentOrderByWithAggregationInput>
    by: EnrolmentScalarFieldEnum[]
    having?: EnrolmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrolmentCountAggregateInputType | true
    _avg?: EnrolmentAvgAggregateInputType
    _sum?: EnrolmentSumAggregateInputType
    _min?: EnrolmentMinAggregateInputType
    _max?: EnrolmentMaxAggregateInputType
  }


  export type EnrolmentGroupByOutputType = {
    id: number
    username: string | null
    curso_moodle_id: number
    description: string
    created_at: Date
    updated_at: Date
    user_id: number
    enrolment_status_id: number
    payment_id: number | null
    course_id: number
    _count: EnrolmentCountAggregateOutputType | null
    _avg: EnrolmentAvgAggregateOutputType | null
    _sum: EnrolmentSumAggregateOutputType | null
    _min: EnrolmentMinAggregateOutputType | null
    _max: EnrolmentMaxAggregateOutputType | null
  }

  type GetEnrolmentGroupByPayload<T extends EnrolmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<EnrolmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrolmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrolmentGroupByOutputType[P]>
            : GetScalarType<T[P], EnrolmentGroupByOutputType[P]>
        }
      >
    >


  export type EnrolmentSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    curso_moodle_id?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    enrolment_status_id?: boolean
    payment_id?: boolean
    course_id?: boolean
    user?: boolean | UserArgs<ExtArgs>
    enrolment_status?: boolean | EnrolmentStatusArgs<ExtArgs>
    payment?: boolean | PaymentArgs<ExtArgs>
    course?: boolean | CourseArgs<ExtArgs>
  }, ExtArgs["result"]["enrolment"]>

  export type EnrolmentSelectScalar = {
    id?: boolean
    username?: boolean
    curso_moodle_id?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    enrolment_status_id?: boolean
    payment_id?: boolean
    course_id?: boolean
  }

  export type EnrolmentInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserArgs<ExtArgs>
    enrolment_status?: boolean | EnrolmentStatusArgs<ExtArgs>
    payment?: boolean | PaymentArgs<ExtArgs>
    course?: boolean | CourseArgs<ExtArgs>
  }


  type EnrolmentGetPayload<S extends boolean | null | undefined | EnrolmentArgs> = $Types.GetResult<EnrolmentPayload, S>

  type EnrolmentCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<EnrolmentFindManyArgs, 'select' | 'include'> & {
      select?: EnrolmentCountAggregateInputType | true
    }

  export interface EnrolmentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Enrolment'], meta: { name: 'Enrolment' } }
    /**
     * Find zero or one Enrolment that matches the filter.
     * @param {EnrolmentFindUniqueArgs} args - Arguments to find a Enrolment
     * @example
     * // Get one Enrolment
     * const enrolment = await prisma.enrolment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EnrolmentFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EnrolmentFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Enrolment'> extends True ? Prisma__EnrolmentClient<$Types.GetResult<EnrolmentPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__EnrolmentClient<$Types.GetResult<EnrolmentPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Enrolment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EnrolmentFindUniqueOrThrowArgs} args - Arguments to find a Enrolment
     * @example
     * // Get one Enrolment
     * const enrolment = await prisma.enrolment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EnrolmentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EnrolmentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EnrolmentClient<$Types.GetResult<EnrolmentPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Enrolment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolmentFindFirstArgs} args - Arguments to find a Enrolment
     * @example
     * // Get one Enrolment
     * const enrolment = await prisma.enrolment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EnrolmentFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EnrolmentFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Enrolment'> extends True ? Prisma__EnrolmentClient<$Types.GetResult<EnrolmentPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__EnrolmentClient<$Types.GetResult<EnrolmentPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Enrolment that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolmentFindFirstOrThrowArgs} args - Arguments to find a Enrolment
     * @example
     * // Get one Enrolment
     * const enrolment = await prisma.enrolment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EnrolmentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EnrolmentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EnrolmentClient<$Types.GetResult<EnrolmentPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Enrolments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enrolments
     * const enrolments = await prisma.enrolment.findMany()
     * 
     * // Get first 10 Enrolments
     * const enrolments = await prisma.enrolment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enrolmentWithIdOnly = await prisma.enrolment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EnrolmentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EnrolmentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<EnrolmentPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Enrolment.
     * @param {EnrolmentCreateArgs} args - Arguments to create a Enrolment.
     * @example
     * // Create one Enrolment
     * const Enrolment = await prisma.enrolment.create({
     *   data: {
     *     // ... data to create a Enrolment
     *   }
     * })
     * 
    **/
    create<T extends EnrolmentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EnrolmentCreateArgs<ExtArgs>>
    ): Prisma__EnrolmentClient<$Types.GetResult<EnrolmentPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Enrolments.
     *     @param {EnrolmentCreateManyArgs} args - Arguments to create many Enrolments.
     *     @example
     *     // Create many Enrolments
     *     const enrolment = await prisma.enrolment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EnrolmentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EnrolmentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Enrolment.
     * @param {EnrolmentDeleteArgs} args - Arguments to delete one Enrolment.
     * @example
     * // Delete one Enrolment
     * const Enrolment = await prisma.enrolment.delete({
     *   where: {
     *     // ... filter to delete one Enrolment
     *   }
     * })
     * 
    **/
    delete<T extends EnrolmentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EnrolmentDeleteArgs<ExtArgs>>
    ): Prisma__EnrolmentClient<$Types.GetResult<EnrolmentPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Enrolment.
     * @param {EnrolmentUpdateArgs} args - Arguments to update one Enrolment.
     * @example
     * // Update one Enrolment
     * const enrolment = await prisma.enrolment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EnrolmentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EnrolmentUpdateArgs<ExtArgs>>
    ): Prisma__EnrolmentClient<$Types.GetResult<EnrolmentPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Enrolments.
     * @param {EnrolmentDeleteManyArgs} args - Arguments to filter Enrolments to delete.
     * @example
     * // Delete a few Enrolments
     * const { count } = await prisma.enrolment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EnrolmentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EnrolmentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrolments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enrolments
     * const enrolment = await prisma.enrolment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EnrolmentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EnrolmentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Enrolment.
     * @param {EnrolmentUpsertArgs} args - Arguments to update or create a Enrolment.
     * @example
     * // Update or create a Enrolment
     * const enrolment = await prisma.enrolment.upsert({
     *   create: {
     *     // ... data to create a Enrolment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enrolment we want to update
     *   }
     * })
    **/
    upsert<T extends EnrolmentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EnrolmentUpsertArgs<ExtArgs>>
    ): Prisma__EnrolmentClient<$Types.GetResult<EnrolmentPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Enrolments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolmentCountArgs} args - Arguments to filter Enrolments to count.
     * @example
     * // Count the number of Enrolments
     * const count = await prisma.enrolment.count({
     *   where: {
     *     // ... the filter for the Enrolments we want to count
     *   }
     * })
    **/
    count<T extends EnrolmentCountArgs>(
      args?: Subset<T, EnrolmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrolmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enrolment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnrolmentAggregateArgs>(args: Subset<T, EnrolmentAggregateArgs>): Prisma.PrismaPromise<GetEnrolmentAggregateType<T>>

    /**
     * Group by Enrolment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolmentGroupByArgs} args - Group by arguments.
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
      T extends EnrolmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnrolmentGroupByArgs['orderBy'] }
        : { orderBy?: EnrolmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnrolmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrolmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Enrolment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EnrolmentClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    enrolment_status<T extends EnrolmentStatusArgs<ExtArgs> = {}>(args?: Subset<T, EnrolmentStatusArgs<ExtArgs>>): Prisma__EnrolmentStatusClient<$Types.GetResult<EnrolmentStatusPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    payment<T extends PaymentArgs<ExtArgs> = {}>(args?: Subset<T, PaymentArgs<ExtArgs>>): Prisma__PaymentClient<$Types.GetResult<PaymentPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    course<T extends CourseArgs<ExtArgs> = {}>(args?: Subset<T, CourseArgs<ExtArgs>>): Prisma__CourseClient<$Types.GetResult<CoursePayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

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
   * Enrolment base type for findUnique actions
   */
  export type EnrolmentFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrolment
     */
    select?: EnrolmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrolmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrolment to fetch.
     */
    where: EnrolmentWhereUniqueInput
  }

  /**
   * Enrolment findUnique
   */
  export interface EnrolmentFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends EnrolmentFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Enrolment findUniqueOrThrow
   */
  export type EnrolmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrolment
     */
    select?: EnrolmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrolmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrolment to fetch.
     */
    where: EnrolmentWhereUniqueInput
  }


  /**
   * Enrolment base type for findFirst actions
   */
  export type EnrolmentFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrolment
     */
    select?: EnrolmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrolmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrolment to fetch.
     */
    where?: EnrolmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrolments to fetch.
     */
    orderBy?: Enumerable<EnrolmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrolments.
     */
    cursor?: EnrolmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrolments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrolments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrolments.
     */
    distinct?: Enumerable<EnrolmentScalarFieldEnum>
  }

  /**
   * Enrolment findFirst
   */
  export interface EnrolmentFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends EnrolmentFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Enrolment findFirstOrThrow
   */
  export type EnrolmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrolment
     */
    select?: EnrolmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrolmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrolment to fetch.
     */
    where?: EnrolmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrolments to fetch.
     */
    orderBy?: Enumerable<EnrolmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrolments.
     */
    cursor?: EnrolmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrolments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrolments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrolments.
     */
    distinct?: Enumerable<EnrolmentScalarFieldEnum>
  }


  /**
   * Enrolment findMany
   */
  export type EnrolmentFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrolment
     */
    select?: EnrolmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrolmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrolments to fetch.
     */
    where?: EnrolmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrolments to fetch.
     */
    orderBy?: Enumerable<EnrolmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enrolments.
     */
    cursor?: EnrolmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrolments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrolments.
     */
    skip?: number
    distinct?: Enumerable<EnrolmentScalarFieldEnum>
  }


  /**
   * Enrolment create
   */
  export type EnrolmentCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrolment
     */
    select?: EnrolmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrolmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Enrolment.
     */
    data: XOR<EnrolmentCreateInput, EnrolmentUncheckedCreateInput>
  }


  /**
   * Enrolment createMany
   */
  export type EnrolmentCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enrolments.
     */
    data: Enumerable<EnrolmentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Enrolment update
   */
  export type EnrolmentUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrolment
     */
    select?: EnrolmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrolmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Enrolment.
     */
    data: XOR<EnrolmentUpdateInput, EnrolmentUncheckedUpdateInput>
    /**
     * Choose, which Enrolment to update.
     */
    where: EnrolmentWhereUniqueInput
  }


  /**
   * Enrolment updateMany
   */
  export type EnrolmentUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enrolments.
     */
    data: XOR<EnrolmentUpdateManyMutationInput, EnrolmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrolments to update
     */
    where?: EnrolmentWhereInput
  }


  /**
   * Enrolment upsert
   */
  export type EnrolmentUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrolment
     */
    select?: EnrolmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrolmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Enrolment to update in case it exists.
     */
    where: EnrolmentWhereUniqueInput
    /**
     * In case the Enrolment found by the `where` argument doesn't exist, create a new Enrolment with this data.
     */
    create: XOR<EnrolmentCreateInput, EnrolmentUncheckedCreateInput>
    /**
     * In case the Enrolment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnrolmentUpdateInput, EnrolmentUncheckedUpdateInput>
  }


  /**
   * Enrolment delete
   */
  export type EnrolmentDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrolment
     */
    select?: EnrolmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrolmentInclude<ExtArgs> | null
    /**
     * Filter which Enrolment to delete.
     */
    where: EnrolmentWhereUniqueInput
  }


  /**
   * Enrolment deleteMany
   */
  export type EnrolmentDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrolments to delete
     */
    where?: EnrolmentWhereInput
  }


  /**
   * Enrolment without action
   */
  export type EnrolmentArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrolment
     */
    select?: EnrolmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrolmentInclude<ExtArgs> | null
  }



  /**
   * Model Testimonial
   */


  export type AggregateTestimonial = {
    _count: TestimonialCountAggregateOutputType | null
    _avg: TestimonialAvgAggregateOutputType | null
    _sum: TestimonialSumAggregateOutputType | null
    _min: TestimonialMinAggregateOutputType | null
    _max: TestimonialMaxAggregateOutputType | null
  }

  export type TestimonialAvgAggregateOutputType = {
    id: number | null
    updated_by: number | null
    active: number | null
  }

  export type TestimonialSumAggregateOutputType = {
    id: number | null
    updated_by: number | null
    active: number | null
  }

  export type TestimonialMinAggregateOutputType = {
    id: number | null
    autor: string | null
    updated_by: number | null
    text: string | null
    active: number | null
    file: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TestimonialMaxAggregateOutputType = {
    id: number | null
    autor: string | null
    updated_by: number | null
    text: string | null
    active: number | null
    file: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TestimonialCountAggregateOutputType = {
    id: number
    autor: number
    updated_by: number
    text: number
    active: number
    file: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TestimonialAvgAggregateInputType = {
    id?: true
    updated_by?: true
    active?: true
  }

  export type TestimonialSumAggregateInputType = {
    id?: true
    updated_by?: true
    active?: true
  }

  export type TestimonialMinAggregateInputType = {
    id?: true
    autor?: true
    updated_by?: true
    text?: true
    active?: true
    file?: true
    created_at?: true
    updated_at?: true
  }

  export type TestimonialMaxAggregateInputType = {
    id?: true
    autor?: true
    updated_by?: true
    text?: true
    active?: true
    file?: true
    created_at?: true
    updated_at?: true
  }

  export type TestimonialCountAggregateInputType = {
    id?: true
    autor?: true
    updated_by?: true
    text?: true
    active?: true
    file?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TestimonialAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Testimonial to aggregate.
     */
    where?: TestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: Enumerable<TestimonialOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Testimonials
    **/
    _count?: true | TestimonialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestimonialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestimonialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestimonialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestimonialMaxAggregateInputType
  }

  export type GetTestimonialAggregateType<T extends TestimonialAggregateArgs> = {
        [P in keyof T & keyof AggregateTestimonial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestimonial[P]>
      : GetScalarType<T[P], AggregateTestimonial[P]>
  }




  export type TestimonialGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TestimonialWhereInput
    orderBy?: Enumerable<TestimonialOrderByWithAggregationInput>
    by: TestimonialScalarFieldEnum[]
    having?: TestimonialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestimonialCountAggregateInputType | true
    _avg?: TestimonialAvgAggregateInputType
    _sum?: TestimonialSumAggregateInputType
    _min?: TestimonialMinAggregateInputType
    _max?: TestimonialMaxAggregateInputType
  }


  export type TestimonialGroupByOutputType = {
    id: number
    autor: string
    updated_by: number
    text: string
    active: number
    file: string | null
    created_at: Date
    updated_at: Date
    _count: TestimonialCountAggregateOutputType | null
    _avg: TestimonialAvgAggregateOutputType | null
    _sum: TestimonialSumAggregateOutputType | null
    _min: TestimonialMinAggregateOutputType | null
    _max: TestimonialMaxAggregateOutputType | null
  }

  type GetTestimonialGroupByPayload<T extends TestimonialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TestimonialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestimonialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestimonialGroupByOutputType[P]>
            : GetScalarType<T[P], TestimonialGroupByOutputType[P]>
        }
      >
    >


  export type TestimonialSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    autor?: boolean
    updated_by?: boolean
    text?: boolean
    active?: boolean
    file?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["testimonial"]>

  export type TestimonialSelectScalar = {
    id?: boolean
    autor?: boolean
    updated_by?: boolean
    text?: boolean
    active?: boolean
    file?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  type TestimonialGetPayload<S extends boolean | null | undefined | TestimonialArgs> = $Types.GetResult<TestimonialPayload, S>

  type TestimonialCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<TestimonialFindManyArgs, 'select' | 'include'> & {
      select?: TestimonialCountAggregateInputType | true
    }

  export interface TestimonialDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Testimonial'], meta: { name: 'Testimonial' } }
    /**
     * Find zero or one Testimonial that matches the filter.
     * @param {TestimonialFindUniqueArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TestimonialFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TestimonialFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Testimonial'> extends True ? Prisma__TestimonialClient<$Types.GetResult<TestimonialPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__TestimonialClient<$Types.GetResult<TestimonialPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Testimonial that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TestimonialFindUniqueOrThrowArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TestimonialFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TestimonialFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TestimonialClient<$Types.GetResult<TestimonialPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Testimonial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialFindFirstArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TestimonialFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TestimonialFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Testimonial'> extends True ? Prisma__TestimonialClient<$Types.GetResult<TestimonialPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__TestimonialClient<$Types.GetResult<TestimonialPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Testimonial that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialFindFirstOrThrowArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TestimonialFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TestimonialFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TestimonialClient<$Types.GetResult<TestimonialPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Testimonials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Testimonials
     * const testimonials = await prisma.testimonial.findMany()
     * 
     * // Get first 10 Testimonials
     * const testimonials = await prisma.testimonial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testimonialWithIdOnly = await prisma.testimonial.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TestimonialFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TestimonialFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<TestimonialPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Testimonial.
     * @param {TestimonialCreateArgs} args - Arguments to create a Testimonial.
     * @example
     * // Create one Testimonial
     * const Testimonial = await prisma.testimonial.create({
     *   data: {
     *     // ... data to create a Testimonial
     *   }
     * })
     * 
    **/
    create<T extends TestimonialCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TestimonialCreateArgs<ExtArgs>>
    ): Prisma__TestimonialClient<$Types.GetResult<TestimonialPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Testimonials.
     *     @param {TestimonialCreateManyArgs} args - Arguments to create many Testimonials.
     *     @example
     *     // Create many Testimonials
     *     const testimonial = await prisma.testimonial.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TestimonialCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TestimonialCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Testimonial.
     * @param {TestimonialDeleteArgs} args - Arguments to delete one Testimonial.
     * @example
     * // Delete one Testimonial
     * const Testimonial = await prisma.testimonial.delete({
     *   where: {
     *     // ... filter to delete one Testimonial
     *   }
     * })
     * 
    **/
    delete<T extends TestimonialDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TestimonialDeleteArgs<ExtArgs>>
    ): Prisma__TestimonialClient<$Types.GetResult<TestimonialPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Testimonial.
     * @param {TestimonialUpdateArgs} args - Arguments to update one Testimonial.
     * @example
     * // Update one Testimonial
     * const testimonial = await prisma.testimonial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TestimonialUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TestimonialUpdateArgs<ExtArgs>>
    ): Prisma__TestimonialClient<$Types.GetResult<TestimonialPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Testimonials.
     * @param {TestimonialDeleteManyArgs} args - Arguments to filter Testimonials to delete.
     * @example
     * // Delete a few Testimonials
     * const { count } = await prisma.testimonial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TestimonialDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TestimonialDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Testimonials
     * const testimonial = await prisma.testimonial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TestimonialUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TestimonialUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Testimonial.
     * @param {TestimonialUpsertArgs} args - Arguments to update or create a Testimonial.
     * @example
     * // Update or create a Testimonial
     * const testimonial = await prisma.testimonial.upsert({
     *   create: {
     *     // ... data to create a Testimonial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Testimonial we want to update
     *   }
     * })
    **/
    upsert<T extends TestimonialUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TestimonialUpsertArgs<ExtArgs>>
    ): Prisma__TestimonialClient<$Types.GetResult<TestimonialPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialCountArgs} args - Arguments to filter Testimonials to count.
     * @example
     * // Count the number of Testimonials
     * const count = await prisma.testimonial.count({
     *   where: {
     *     // ... the filter for the Testimonials we want to count
     *   }
     * })
    **/
    count<T extends TestimonialCountArgs>(
      args?: Subset<T, TestimonialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestimonialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Testimonial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestimonialAggregateArgs>(args: Subset<T, TestimonialAggregateArgs>): Prisma.PrismaPromise<GetTestimonialAggregateType<T>>

    /**
     * Group by Testimonial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialGroupByArgs} args - Group by arguments.
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
      T extends TestimonialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestimonialGroupByArgs['orderBy'] }
        : { orderBy?: TestimonialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TestimonialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestimonialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Testimonial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TestimonialClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


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
   * Testimonial base type for findUnique actions
   */
  export type TestimonialFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Filter, which Testimonial to fetch.
     */
    where: TestimonialWhereUniqueInput
  }

  /**
   * Testimonial findUnique
   */
  export interface TestimonialFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends TestimonialFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Testimonial findUniqueOrThrow
   */
  export type TestimonialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Filter, which Testimonial to fetch.
     */
    where: TestimonialWhereUniqueInput
  }


  /**
   * Testimonial base type for findFirst actions
   */
  export type TestimonialFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Filter, which Testimonial to fetch.
     */
    where?: TestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: Enumerable<TestimonialOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Testimonials.
     */
    cursor?: TestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Testimonials.
     */
    distinct?: Enumerable<TestimonialScalarFieldEnum>
  }

  /**
   * Testimonial findFirst
   */
  export interface TestimonialFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends TestimonialFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Testimonial findFirstOrThrow
   */
  export type TestimonialFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Filter, which Testimonial to fetch.
     */
    where?: TestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: Enumerable<TestimonialOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Testimonials.
     */
    cursor?: TestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Testimonials.
     */
    distinct?: Enumerable<TestimonialScalarFieldEnum>
  }


  /**
   * Testimonial findMany
   */
  export type TestimonialFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Filter, which Testimonials to fetch.
     */
    where?: TestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: Enumerable<TestimonialOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Testimonials.
     */
    cursor?: TestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    distinct?: Enumerable<TestimonialScalarFieldEnum>
  }


  /**
   * Testimonial create
   */
  export type TestimonialCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * The data needed to create a Testimonial.
     */
    data: XOR<TestimonialCreateInput, TestimonialUncheckedCreateInput>
  }


  /**
   * Testimonial createMany
   */
  export type TestimonialCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Testimonials.
     */
    data: Enumerable<TestimonialCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Testimonial update
   */
  export type TestimonialUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * The data needed to update a Testimonial.
     */
    data: XOR<TestimonialUpdateInput, TestimonialUncheckedUpdateInput>
    /**
     * Choose, which Testimonial to update.
     */
    where: TestimonialWhereUniqueInput
  }


  /**
   * Testimonial updateMany
   */
  export type TestimonialUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Testimonials.
     */
    data: XOR<TestimonialUpdateManyMutationInput, TestimonialUncheckedUpdateManyInput>
    /**
     * Filter which Testimonials to update
     */
    where?: TestimonialWhereInput
  }


  /**
   * Testimonial upsert
   */
  export type TestimonialUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * The filter to search for the Testimonial to update in case it exists.
     */
    where: TestimonialWhereUniqueInput
    /**
     * In case the Testimonial found by the `where` argument doesn't exist, create a new Testimonial with this data.
     */
    create: XOR<TestimonialCreateInput, TestimonialUncheckedCreateInput>
    /**
     * In case the Testimonial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestimonialUpdateInput, TestimonialUncheckedUpdateInput>
  }


  /**
   * Testimonial delete
   */
  export type TestimonialDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Filter which Testimonial to delete.
     */
    where: TestimonialWhereUniqueInput
  }


  /**
   * Testimonial deleteMany
   */
  export type TestimonialDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Testimonials to delete
     */
    where?: TestimonialWhereInput
  }


  /**
   * Testimonial without action
   */
  export type TestimonialArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    last_name: 'last_name',
    email: 'email',
    email_verified: 'email_verified',
    password: 'password',
    country: 'country',
    region: 'region',
    username: 'username',
    birth_day: 'birth_day',
    deleted: 'deleted',
    created_at: 'created_at',
    updated_at: 'updated_at',
    remember_token: 'remember_token'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    active: 'active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const PermissionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    moodle_id: 'moodle_id',
    fullname: 'fullname',
    shortname: 'shortname',
    category: 'category',
    destacado: 'destacado',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const EnrolmentStatusScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type EnrolmentStatusScalarFieldEnum = (typeof EnrolmentStatusScalarFieldEnum)[keyof typeof EnrolmentStatusScalarFieldEnum]


  export const PaymentMethodScalarFieldEnum: {
    id: 'id',
    name: 'name',
    label: 'label',
    active: 'active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PaymentMethodScalarFieldEnum = (typeof PaymentMethodScalarFieldEnum)[keyof typeof PaymentMethodScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    currency: 'currency',
    payment_status: 'payment_status',
    payment_id: 'payment_id',
    payer_id: 'payer_id',
    payer_email: 'payer_email',
    payer_name: 'payer_name',
    transaction_id: 'transaction_id',
    file: 'file',
    created_at: 'created_at',
    updated_at: 'updated_at',
    payment_method_id: 'payment_method_id'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const EnrolmentScalarFieldEnum: {
    id: 'id',
    username: 'username',
    curso_moodle_id: 'curso_moodle_id',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at',
    user_id: 'user_id',
    enrolment_status_id: 'enrolment_status_id',
    payment_id: 'payment_id',
    course_id: 'course_id'
  };

  export type EnrolmentScalarFieldEnum = (typeof EnrolmentScalarFieldEnum)[keyof typeof EnrolmentScalarFieldEnum]


  export const TestimonialScalarFieldEnum: {
    id: 'id',
    autor: 'autor',
    updated_by: 'updated_by',
    text: 'text',
    active: 'active',
    file: 'file',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TestimonialScalarFieldEnum = (typeof TestimonialScalarFieldEnum)[keyof typeof TestimonialScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    last_name?: StringFilter | string
    email?: StringFilter | string
    email_verified?: IntFilter | number
    password?: StringFilter | string
    country?: StringNullableFilter | string | null
    region?: StringNullableFilter | string | null
    username?: StringFilter | string
    birth_day?: DateTimeNullableFilter | Date | string | null
    deleted?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    remember_token?: StringNullableFilter | string | null
    roles?: RoleListRelationFilter
    enrolments?: EnrolmentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    password?: SortOrder
    country?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    username?: SortOrder
    birth_day?: SortOrderInput | SortOrder
    deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    remember_token?: SortOrderInput | SortOrder
    roles?: RoleOrderByRelationAggregateInput
    enrolments?: EnrolmentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    email?: string
    username?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    password?: SortOrder
    country?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    username?: SortOrder
    birth_day?: SortOrderInput | SortOrder
    deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    remember_token?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    last_name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    email_verified?: IntWithAggregatesFilter | number
    password?: StringWithAggregatesFilter | string
    country?: StringNullableWithAggregatesFilter | string | null
    region?: StringNullableWithAggregatesFilter | string | null
    username?: StringWithAggregatesFilter | string
    birth_day?: DateTimeNullableWithAggregatesFilter | Date | string | null
    deleted?: IntWithAggregatesFilter | number
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    remember_token?: StringNullableWithAggregatesFilter | string | null
  }

  export type RoleWhereInput = {
    AND?: Enumerable<RoleWhereInput>
    OR?: Enumerable<RoleWhereInput>
    NOT?: Enumerable<RoleWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    active?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    permissions?: PermissionListRelationFilter
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    permissions?: PermissionOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RoleScalarWhereWithAggregatesInput>
    OR?: Enumerable<RoleScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RoleScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    active?: IntWithAggregatesFilter | number
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PermissionWhereInput = {
    AND?: Enumerable<PermissionWhereInput>
    OR?: Enumerable<PermissionWhereInput>
    NOT?: Enumerable<PermissionWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    roles?: RoleListRelationFilter
  }

  export type PermissionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    roles?: RoleOrderByRelationAggregateInput
  }

  export type PermissionWhereUniqueInput = {
    id?: number
  }

  export type PermissionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PermissionCountOrderByAggregateInput
    _avg?: PermissionAvgOrderByAggregateInput
    _max?: PermissionMaxOrderByAggregateInput
    _min?: PermissionMinOrderByAggregateInput
    _sum?: PermissionSumOrderByAggregateInput
  }

  export type PermissionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PermissionScalarWhereWithAggregatesInput>
    OR?: Enumerable<PermissionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PermissionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CourseWhereInput = {
    AND?: Enumerable<CourseWhereInput>
    OR?: Enumerable<CourseWhereInput>
    NOT?: Enumerable<CourseWhereInput>
    id?: IntFilter | number
    moodle_id?: IntFilter | number
    fullname?: StringFilter | string
    shortname?: StringFilter | string
    category?: StringFilter | string
    destacado?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    enrolments?: EnrolmentListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    moodle_id?: SortOrder
    fullname?: SortOrder
    shortname?: SortOrder
    category?: SortOrder
    destacado?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    enrolments?: EnrolmentOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = {
    id?: number
    moodle_id?: number
    shortname?: string
  }

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    moodle_id?: SortOrder
    fullname?: SortOrder
    shortname?: SortOrder
    category?: SortOrder
    destacado?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CourseScalarWhereWithAggregatesInput>
    OR?: Enumerable<CourseScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CourseScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    moodle_id?: IntWithAggregatesFilter | number
    fullname?: StringWithAggregatesFilter | string
    shortname?: StringWithAggregatesFilter | string
    category?: StringWithAggregatesFilter | string
    destacado?: IntWithAggregatesFilter | number
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type EnrolmentStatusWhereInput = {
    AND?: Enumerable<EnrolmentStatusWhereInput>
    OR?: Enumerable<EnrolmentStatusWhereInput>
    NOT?: Enumerable<EnrolmentStatusWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    description?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    enrolements?: EnrolmentListRelationFilter
  }

  export type EnrolmentStatusOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    enrolements?: EnrolmentOrderByRelationAggregateInput
  }

  export type EnrolmentStatusWhereUniqueInput = {
    id?: number
  }

  export type EnrolmentStatusOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: EnrolmentStatusCountOrderByAggregateInput
    _avg?: EnrolmentStatusAvgOrderByAggregateInput
    _max?: EnrolmentStatusMaxOrderByAggregateInput
    _min?: EnrolmentStatusMinOrderByAggregateInput
    _sum?: EnrolmentStatusSumOrderByAggregateInput
  }

  export type EnrolmentStatusScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EnrolmentStatusScalarWhereWithAggregatesInput>
    OR?: Enumerable<EnrolmentStatusScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EnrolmentStatusScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PaymentMethodWhereInput = {
    AND?: Enumerable<PaymentMethodWhereInput>
    OR?: Enumerable<PaymentMethodWhereInput>
    NOT?: Enumerable<PaymentMethodWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    label?: StringFilter | string
    active?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    payments?: PaymentListRelationFilter
  }

  export type PaymentMethodOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type PaymentMethodWhereUniqueInput = {
    id?: number
  }

  export type PaymentMethodOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PaymentMethodCountOrderByAggregateInput
    _avg?: PaymentMethodAvgOrderByAggregateInput
    _max?: PaymentMethodMaxOrderByAggregateInput
    _min?: PaymentMethodMinOrderByAggregateInput
    _sum?: PaymentMethodSumOrderByAggregateInput
  }

  export type PaymentMethodScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PaymentMethodScalarWhereWithAggregatesInput>
    OR?: Enumerable<PaymentMethodScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PaymentMethodScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    label?: StringWithAggregatesFilter | string
    active?: IntWithAggregatesFilter | number
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PaymentWhereInput = {
    AND?: Enumerable<PaymentWhereInput>
    OR?: Enumerable<PaymentWhereInput>
    NOT?: Enumerable<PaymentWhereInput>
    id?: IntFilter | number
    amount?: FloatFilter | number
    currency?: StringFilter | string
    payment_status?: StringFilter | string
    payment_id?: StringFilter | string
    payer_id?: StringFilter | string
    payer_email?: StringFilter | string
    payer_name?: StringFilter | string
    transaction_id?: StringFilter | string
    file?: StringNullableFilter | string | null
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    payment_method_id?: IntFilter | number
    payment_method?: XOR<PaymentMethodRelationFilter, PaymentMethodWhereInput>
    enrolments?: EnrolmentListRelationFilter
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    payment_status?: SortOrder
    payment_id?: SortOrder
    payer_id?: SortOrder
    payer_email?: SortOrder
    payer_name?: SortOrder
    transaction_id?: SortOrder
    file?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    payment_method_id?: SortOrder
    payment_method?: PaymentMethodOrderByWithRelationInput
    enrolments?: EnrolmentOrderByRelationAggregateInput
  }

  export type PaymentWhereUniqueInput = {
    id?: number
  }

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    payment_status?: SortOrder
    payment_id?: SortOrder
    payer_id?: SortOrder
    payer_email?: SortOrder
    payer_name?: SortOrder
    transaction_id?: SortOrder
    file?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    payment_method_id?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PaymentScalarWhereWithAggregatesInput>
    OR?: Enumerable<PaymentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PaymentScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    amount?: FloatWithAggregatesFilter | number
    currency?: StringWithAggregatesFilter | string
    payment_status?: StringWithAggregatesFilter | string
    payment_id?: StringWithAggregatesFilter | string
    payer_id?: StringWithAggregatesFilter | string
    payer_email?: StringWithAggregatesFilter | string
    payer_name?: StringWithAggregatesFilter | string
    transaction_id?: StringWithAggregatesFilter | string
    file?: StringNullableWithAggregatesFilter | string | null
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    payment_method_id?: IntWithAggregatesFilter | number
  }

  export type EnrolmentWhereInput = {
    AND?: Enumerable<EnrolmentWhereInput>
    OR?: Enumerable<EnrolmentWhereInput>
    NOT?: Enumerable<EnrolmentWhereInput>
    id?: IntFilter | number
    username?: StringNullableFilter | string | null
    curso_moodle_id?: IntFilter | number
    description?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    user_id?: IntFilter | number
    enrolment_status_id?: IntFilter | number
    payment_id?: IntNullableFilter | number | null
    course_id?: IntFilter | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    enrolment_status?: XOR<EnrolmentStatusRelationFilter, EnrolmentStatusWhereInput>
    payment?: XOR<PaymentRelationFilter, PaymentWhereInput> | null
    course?: XOR<CourseRelationFilter, CourseWhereInput>
  }

  export type EnrolmentOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    curso_moodle_id?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    enrolment_status_id?: SortOrder
    payment_id?: SortOrderInput | SortOrder
    course_id?: SortOrder
    user?: UserOrderByWithRelationInput
    enrolment_status?: EnrolmentStatusOrderByWithRelationInput
    payment?: PaymentOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
  }

  export type EnrolmentWhereUniqueInput = {
    id?: number
  }

  export type EnrolmentOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    curso_moodle_id?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    enrolment_status_id?: SortOrder
    payment_id?: SortOrderInput | SortOrder
    course_id?: SortOrder
    _count?: EnrolmentCountOrderByAggregateInput
    _avg?: EnrolmentAvgOrderByAggregateInput
    _max?: EnrolmentMaxOrderByAggregateInput
    _min?: EnrolmentMinOrderByAggregateInput
    _sum?: EnrolmentSumOrderByAggregateInput
  }

  export type EnrolmentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EnrolmentScalarWhereWithAggregatesInput>
    OR?: Enumerable<EnrolmentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EnrolmentScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    username?: StringNullableWithAggregatesFilter | string | null
    curso_moodle_id?: IntWithAggregatesFilter | number
    description?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    user_id?: IntWithAggregatesFilter | number
    enrolment_status_id?: IntWithAggregatesFilter | number
    payment_id?: IntNullableWithAggregatesFilter | number | null
    course_id?: IntWithAggregatesFilter | number
  }

  export type TestimonialWhereInput = {
    AND?: Enumerable<TestimonialWhereInput>
    OR?: Enumerable<TestimonialWhereInput>
    NOT?: Enumerable<TestimonialWhereInput>
    id?: IntFilter | number
    autor?: StringFilter | string
    updated_by?: IntFilter | number
    text?: StringFilter | string
    active?: IntFilter | number
    file?: StringNullableFilter | string | null
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type TestimonialOrderByWithRelationInput = {
    id?: SortOrder
    autor?: SortOrder
    updated_by?: SortOrder
    text?: SortOrder
    active?: SortOrder
    file?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TestimonialWhereUniqueInput = {
    id?: number
  }

  export type TestimonialOrderByWithAggregationInput = {
    id?: SortOrder
    autor?: SortOrder
    updated_by?: SortOrder
    text?: SortOrder
    active?: SortOrder
    file?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: TestimonialCountOrderByAggregateInput
    _avg?: TestimonialAvgOrderByAggregateInput
    _max?: TestimonialMaxOrderByAggregateInput
    _min?: TestimonialMinOrderByAggregateInput
    _sum?: TestimonialSumOrderByAggregateInput
  }

  export type TestimonialScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TestimonialScalarWhereWithAggregatesInput>
    OR?: Enumerable<TestimonialScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TestimonialScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    autor?: StringWithAggregatesFilter | string
    updated_by?: IntWithAggregatesFilter | number
    text?: StringWithAggregatesFilter | string
    active?: IntWithAggregatesFilter | number
    file?: StringNullableWithAggregatesFilter | string | null
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserCreateInput = {
    name: string
    last_name: string
    email: string
    email_verified?: number
    password: string
    country?: string | null
    region?: string | null
    username: string
    birth_day?: Date | string | null
    deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
    remember_token?: string | null
    roles?: RoleCreateNestedManyWithoutUsersInput
    enrolments?: EnrolmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    last_name: string
    email: string
    email_verified?: number
    password: string
    country?: string | null
    region?: string | null
    username: string
    birth_day?: Date | string | null
    deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
    remember_token?: string | null
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
    enrolments?: EnrolmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    birth_day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: RoleUpdateManyWithoutUsersNestedInput
    enrolments?: EnrolmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    birth_day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
    enrolments?: EnrolmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    last_name: string
    email: string
    email_verified?: number
    password: string
    country?: string | null
    region?: string | null
    username: string
    birth_day?: Date | string | null
    deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
    remember_token?: string | null
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    birth_day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    birth_day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoleCreateInput = {
    name: string
    active?: number
    created_at?: Date | string
    updated_at?: Date | string
    permissions?: PermissionCreateNestedManyWithoutRolesInput
    users?: UserCreateNestedManyWithoutRolesInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    name: string
    active?: number
    created_at?: Date | string
    updated_at?: Date | string
    permissions?: PermissionUncheckedCreateNestedManyWithoutRolesInput
    users?: UserUncheckedCreateNestedManyWithoutRolesInput
  }

  export type RoleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: PermissionUpdateManyWithoutRolesNestedInput
    users?: UserUpdateManyWithoutRolesNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: PermissionUncheckedUpdateManyWithoutRolesNestedInput
    users?: UserUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    name: string
    active?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionCreateInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    roles?: RoleCreateNestedManyWithoutPermissionsInput
  }

  export type PermissionUncheckedCreateInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    roles?: RoleUncheckedCreateNestedManyWithoutPermissionsInput
  }

  export type PermissionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleUpdateManyWithoutPermissionsNestedInput
  }

  export type PermissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleUncheckedUpdateManyWithoutPermissionsNestedInput
  }

  export type PermissionCreateManyInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PermissionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateInput = {
    moodle_id: number
    fullname: string
    shortname: string
    category: string
    destacado?: number
    created_at?: Date | string
    updated_at?: Date | string
    enrolments?: EnrolmentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: number
    moodle_id: number
    fullname: string
    shortname: string
    category: string
    destacado?: number
    created_at?: Date | string
    updated_at?: Date | string
    enrolments?: EnrolmentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    moodle_id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    shortname?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    destacado?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolments?: EnrolmentUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    moodle_id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    shortname?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    destacado?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolments?: EnrolmentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: number
    moodle_id: number
    fullname: string
    shortname: string
    category: string
    destacado?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CourseUpdateManyMutationInput = {
    moodle_id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    shortname?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    destacado?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    moodle_id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    shortname?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    destacado?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrolmentStatusCreateInput = {
    name: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    enrolements?: EnrolmentCreateNestedManyWithoutEnrolment_statusInput
  }

  export type EnrolmentStatusUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    enrolements?: EnrolmentUncheckedCreateNestedManyWithoutEnrolment_statusInput
  }

  export type EnrolmentStatusUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolements?: EnrolmentUpdateManyWithoutEnrolment_statusNestedInput
  }

  export type EnrolmentStatusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolements?: EnrolmentUncheckedUpdateManyWithoutEnrolment_statusNestedInput
  }

  export type EnrolmentStatusCreateManyInput = {
    id?: number
    name: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EnrolmentStatusUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrolmentStatusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodCreateInput = {
    name: string
    label: string
    active?: number
    created_at?: Date | string
    updated_at?: Date | string
    payments?: PaymentCreateNestedManyWithoutPayment_methodInput
  }

  export type PaymentMethodUncheckedCreateInput = {
    id?: number
    name: string
    label: string
    active?: number
    created_at?: Date | string
    updated_at?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutPayment_methodInput
  }

  export type PaymentMethodUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUpdateManyWithoutPayment_methodNestedInput
  }

  export type PaymentMethodUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutPayment_methodNestedInput
  }

  export type PaymentMethodCreateManyInput = {
    id?: number
    name: string
    label: string
    active?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentMethodUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    amount: number
    currency: string
    payment_status: string
    payment_id: string
    payer_id: string
    payer_email: string
    payer_name: string
    transaction_id: string
    file?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    payment_method: PaymentMethodCreateNestedOneWithoutPaymentsInput
    enrolments?: EnrolmentCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    amount: number
    currency: string
    payment_status: string
    payment_id: string
    payer_id: string
    payer_email: string
    payer_name: string
    transaction_id: string
    file?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    payment_method_id: number
    enrolments?: EnrolmentUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    payment_status?: StringFieldUpdateOperationsInput | string
    payment_id?: StringFieldUpdateOperationsInput | string
    payer_id?: StringFieldUpdateOperationsInput | string
    payer_email?: StringFieldUpdateOperationsInput | string
    payer_name?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    file?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_method?: PaymentMethodUpdateOneRequiredWithoutPaymentsNestedInput
    enrolments?: EnrolmentUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    payment_status?: StringFieldUpdateOperationsInput | string
    payment_id?: StringFieldUpdateOperationsInput | string
    payer_id?: StringFieldUpdateOperationsInput | string
    payer_email?: StringFieldUpdateOperationsInput | string
    payer_name?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    file?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_method_id?: IntFieldUpdateOperationsInput | number
    enrolments?: EnrolmentUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentCreateManyInput = {
    id?: number
    amount: number
    currency: string
    payment_status: string
    payment_id: string
    payer_id: string
    payer_email: string
    payer_name: string
    transaction_id: string
    file?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    payment_method_id: number
  }

  export type PaymentUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    payment_status?: StringFieldUpdateOperationsInput | string
    payment_id?: StringFieldUpdateOperationsInput | string
    payer_id?: StringFieldUpdateOperationsInput | string
    payer_email?: StringFieldUpdateOperationsInput | string
    payer_name?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    file?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    payment_status?: StringFieldUpdateOperationsInput | string
    payment_id?: StringFieldUpdateOperationsInput | string
    payer_id?: StringFieldUpdateOperationsInput | string
    payer_email?: StringFieldUpdateOperationsInput | string
    payer_name?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    file?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_method_id?: IntFieldUpdateOperationsInput | number
  }

  export type EnrolmentCreateInput = {
    username?: string | null
    curso_moodle_id: number
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutEnrolmentsInput
    enrolment_status: EnrolmentStatusCreateNestedOneWithoutEnrolementsInput
    payment?: PaymentCreateNestedOneWithoutEnrolmentsInput
    course: CourseCreateNestedOneWithoutEnrolmentsInput
  }

  export type EnrolmentUncheckedCreateInput = {
    id?: number
    username?: string | null
    curso_moodle_id: number
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    user_id: number
    enrolment_status_id: number
    payment_id?: number | null
    course_id: number
  }

  export type EnrolmentUpdateInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    curso_moodle_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEnrolmentsNestedInput
    enrolment_status?: EnrolmentStatusUpdateOneRequiredWithoutEnrolementsNestedInput
    payment?: PaymentUpdateOneWithoutEnrolmentsNestedInput
    course?: CourseUpdateOneRequiredWithoutEnrolmentsNestedInput
  }

  export type EnrolmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    curso_moodle_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    enrolment_status_id?: IntFieldUpdateOperationsInput | number
    payment_id?: NullableIntFieldUpdateOperationsInput | number | null
    course_id?: IntFieldUpdateOperationsInput | number
  }

  export type EnrolmentCreateManyInput = {
    id?: number
    username?: string | null
    curso_moodle_id: number
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    user_id: number
    enrolment_status_id: number
    payment_id?: number | null
    course_id: number
  }

  export type EnrolmentUpdateManyMutationInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    curso_moodle_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrolmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    curso_moodle_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    enrolment_status_id?: IntFieldUpdateOperationsInput | number
    payment_id?: NullableIntFieldUpdateOperationsInput | number | null
    course_id?: IntFieldUpdateOperationsInput | number
  }

  export type TestimonialCreateInput = {
    autor: string
    updated_by: number
    text: string
    active?: number
    file?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TestimonialUncheckedCreateInput = {
    id?: number
    autor: string
    updated_by: number
    text: string
    active?: number
    file?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TestimonialUpdateInput = {
    autor?: StringFieldUpdateOperationsInput | string
    updated_by?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
    file?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestimonialUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    autor?: StringFieldUpdateOperationsInput | string
    updated_by?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
    file?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestimonialCreateManyInput = {
    id?: number
    autor: string
    updated_by: number
    text: string
    active?: number
    file?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TestimonialUpdateManyMutationInput = {
    autor?: StringFieldUpdateOperationsInput | string
    updated_by?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
    file?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestimonialUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    autor?: StringFieldUpdateOperationsInput | string
    updated_by?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
    file?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type RoleListRelationFilter = {
    every?: RoleWhereInput
    some?: RoleWhereInput
    none?: RoleWhereInput
  }

  export type EnrolmentListRelationFilter = {
    every?: EnrolmentWhereInput
    some?: EnrolmentWhereInput
    none?: EnrolmentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EnrolmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    password?: SortOrder
    country?: SortOrder
    region?: SortOrder
    username?: SortOrder
    birth_day?: SortOrder
    deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    remember_token?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    email_verified?: SortOrder
    deleted?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    password?: SortOrder
    country?: SortOrder
    region?: SortOrder
    username?: SortOrder
    birth_day?: SortOrder
    deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    remember_token?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    password?: SortOrder
    country?: SortOrder
    region?: SortOrder
    username?: SortOrder
    birth_day?: SortOrder
    deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    remember_token?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    email_verified?: SortOrder
    deleted?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
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
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
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

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type PermissionListRelationFilter = {
    every?: PermissionWhereInput
    some?: PermissionWhereInput
    none?: PermissionWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type PermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
    active?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
    active?: SortOrder
  }

  export type PermissionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PermissionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PermissionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PermissionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    moodle_id?: SortOrder
    fullname?: SortOrder
    shortname?: SortOrder
    category?: SortOrder
    destacado?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    id?: SortOrder
    moodle_id?: SortOrder
    destacado?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    moodle_id?: SortOrder
    fullname?: SortOrder
    shortname?: SortOrder
    category?: SortOrder
    destacado?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    moodle_id?: SortOrder
    fullname?: SortOrder
    shortname?: SortOrder
    category?: SortOrder
    destacado?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    id?: SortOrder
    moodle_id?: SortOrder
    destacado?: SortOrder
  }

  export type EnrolmentStatusCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnrolmentStatusAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnrolmentStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnrolmentStatusMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnrolmentStatusSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentMethodCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PaymentMethodAvgOrderByAggregateInput = {
    id?: SortOrder
    active?: SortOrder
  }

  export type PaymentMethodMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PaymentMethodMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PaymentMethodSumOrderByAggregateInput = {
    id?: SortOrder
    active?: SortOrder
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type PaymentMethodRelationFilter = {
    is?: PaymentMethodWhereInput | null
    isNot?: PaymentMethodWhereInput | null
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    payment_status?: SortOrder
    payment_id?: SortOrder
    payer_id?: SortOrder
    payer_email?: SortOrder
    payer_name?: SortOrder
    transaction_id?: SortOrder
    file?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    payment_method_id?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    payment_method_id?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    payment_status?: SortOrder
    payment_id?: SortOrder
    payer_id?: SortOrder
    payer_email?: SortOrder
    payer_name?: SortOrder
    transaction_id?: SortOrder
    file?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    payment_method_id?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    payment_status?: SortOrder
    payment_id?: SortOrder
    payer_id?: SortOrder
    payer_email?: SortOrder
    payer_name?: SortOrder
    transaction_id?: SortOrder
    file?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    payment_method_id?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    payment_method_id?: SortOrder
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type EnrolmentStatusRelationFilter = {
    is?: EnrolmentStatusWhereInput | null
    isNot?: EnrolmentStatusWhereInput | null
  }

  export type PaymentRelationFilter = {
    is?: PaymentWhereInput | null
    isNot?: PaymentWhereInput | null
  }

  export type CourseRelationFilter = {
    is?: CourseWhereInput | null
    isNot?: CourseWhereInput | null
  }

  export type EnrolmentCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    curso_moodle_id?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    enrolment_status_id?: SortOrder
    payment_id?: SortOrder
    course_id?: SortOrder
  }

  export type EnrolmentAvgOrderByAggregateInput = {
    id?: SortOrder
    curso_moodle_id?: SortOrder
    user_id?: SortOrder
    enrolment_status_id?: SortOrder
    payment_id?: SortOrder
    course_id?: SortOrder
  }

  export type EnrolmentMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    curso_moodle_id?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    enrolment_status_id?: SortOrder
    payment_id?: SortOrder
    course_id?: SortOrder
  }

  export type EnrolmentMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    curso_moodle_id?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    enrolment_status_id?: SortOrder
    payment_id?: SortOrder
    course_id?: SortOrder
  }

  export type EnrolmentSumOrderByAggregateInput = {
    id?: SortOrder
    curso_moodle_id?: SortOrder
    user_id?: SortOrder
    enrolment_status_id?: SortOrder
    payment_id?: SortOrder
    course_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type TestimonialCountOrderByAggregateInput = {
    id?: SortOrder
    autor?: SortOrder
    updated_by?: SortOrder
    text?: SortOrder
    active?: SortOrder
    file?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TestimonialAvgOrderByAggregateInput = {
    id?: SortOrder
    updated_by?: SortOrder
    active?: SortOrder
  }

  export type TestimonialMaxOrderByAggregateInput = {
    id?: SortOrder
    autor?: SortOrder
    updated_by?: SortOrder
    text?: SortOrder
    active?: SortOrder
    file?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TestimonialMinOrderByAggregateInput = {
    id?: SortOrder
    autor?: SortOrder
    updated_by?: SortOrder
    text?: SortOrder
    active?: SortOrder
    file?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TestimonialSumOrderByAggregateInput = {
    id?: SortOrder
    updated_by?: SortOrder
    active?: SortOrder
  }

  export type RoleCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<RoleCreateWithoutUsersInput>, Enumerable<RoleUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<RoleCreateOrConnectWithoutUsersInput>
    connect?: Enumerable<RoleWhereUniqueInput>
  }

  export type EnrolmentCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<EnrolmentCreateWithoutUserInput>, Enumerable<EnrolmentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EnrolmentCreateOrConnectWithoutUserInput>
    createMany?: EnrolmentCreateManyUserInputEnvelope
    connect?: Enumerable<EnrolmentWhereUniqueInput>
  }

  export type RoleUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<RoleCreateWithoutUsersInput>, Enumerable<RoleUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<RoleCreateOrConnectWithoutUsersInput>
    connect?: Enumerable<RoleWhereUniqueInput>
  }

  export type EnrolmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<EnrolmentCreateWithoutUserInput>, Enumerable<EnrolmentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EnrolmentCreateOrConnectWithoutUserInput>
    createMany?: EnrolmentCreateManyUserInputEnvelope
    connect?: Enumerable<EnrolmentWhereUniqueInput>
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

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RoleUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<RoleCreateWithoutUsersInput>, Enumerable<RoleUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<RoleCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<RoleUpsertWithWhereUniqueWithoutUsersInput>
    set?: Enumerable<RoleWhereUniqueInput>
    disconnect?: Enumerable<RoleWhereUniqueInput>
    delete?: Enumerable<RoleWhereUniqueInput>
    connect?: Enumerable<RoleWhereUniqueInput>
    update?: Enumerable<RoleUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<RoleUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<RoleScalarWhereInput>
  }

  export type EnrolmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<EnrolmentCreateWithoutUserInput>, Enumerable<EnrolmentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EnrolmentCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<EnrolmentUpsertWithWhereUniqueWithoutUserInput>
    createMany?: EnrolmentCreateManyUserInputEnvelope
    set?: Enumerable<EnrolmentWhereUniqueInput>
    disconnect?: Enumerable<EnrolmentWhereUniqueInput>
    delete?: Enumerable<EnrolmentWhereUniqueInput>
    connect?: Enumerable<EnrolmentWhereUniqueInput>
    update?: Enumerable<EnrolmentUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<EnrolmentUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<EnrolmentScalarWhereInput>
  }

  export type RoleUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<RoleCreateWithoutUsersInput>, Enumerable<RoleUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<RoleCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<RoleUpsertWithWhereUniqueWithoutUsersInput>
    set?: Enumerable<RoleWhereUniqueInput>
    disconnect?: Enumerable<RoleWhereUniqueInput>
    delete?: Enumerable<RoleWhereUniqueInput>
    connect?: Enumerable<RoleWhereUniqueInput>
    update?: Enumerable<RoleUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<RoleUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<RoleScalarWhereInput>
  }

  export type EnrolmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<EnrolmentCreateWithoutUserInput>, Enumerable<EnrolmentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EnrolmentCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<EnrolmentUpsertWithWhereUniqueWithoutUserInput>
    createMany?: EnrolmentCreateManyUserInputEnvelope
    set?: Enumerable<EnrolmentWhereUniqueInput>
    disconnect?: Enumerable<EnrolmentWhereUniqueInput>
    delete?: Enumerable<EnrolmentWhereUniqueInput>
    connect?: Enumerable<EnrolmentWhereUniqueInput>
    update?: Enumerable<EnrolmentUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<EnrolmentUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<EnrolmentScalarWhereInput>
  }

  export type PermissionCreateNestedManyWithoutRolesInput = {
    create?: XOR<Enumerable<PermissionCreateWithoutRolesInput>, Enumerable<PermissionUncheckedCreateWithoutRolesInput>>
    connectOrCreate?: Enumerable<PermissionCreateOrConnectWithoutRolesInput>
    connect?: Enumerable<PermissionWhereUniqueInput>
  }

  export type UserCreateNestedManyWithoutRolesInput = {
    create?: XOR<Enumerable<UserCreateWithoutRolesInput>, Enumerable<UserUncheckedCreateWithoutRolesInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutRolesInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type PermissionUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<Enumerable<PermissionCreateWithoutRolesInput>, Enumerable<PermissionUncheckedCreateWithoutRolesInput>>
    connectOrCreate?: Enumerable<PermissionCreateOrConnectWithoutRolesInput>
    connect?: Enumerable<PermissionWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<Enumerable<UserCreateWithoutRolesInput>, Enumerable<UserUncheckedCreateWithoutRolesInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutRolesInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type PermissionUpdateManyWithoutRolesNestedInput = {
    create?: XOR<Enumerable<PermissionCreateWithoutRolesInput>, Enumerable<PermissionUncheckedCreateWithoutRolesInput>>
    connectOrCreate?: Enumerable<PermissionCreateOrConnectWithoutRolesInput>
    upsert?: Enumerable<PermissionUpsertWithWhereUniqueWithoutRolesInput>
    set?: Enumerable<PermissionWhereUniqueInput>
    disconnect?: Enumerable<PermissionWhereUniqueInput>
    delete?: Enumerable<PermissionWhereUniqueInput>
    connect?: Enumerable<PermissionWhereUniqueInput>
    update?: Enumerable<PermissionUpdateWithWhereUniqueWithoutRolesInput>
    updateMany?: Enumerable<PermissionUpdateManyWithWhereWithoutRolesInput>
    deleteMany?: Enumerable<PermissionScalarWhereInput>
  }

  export type UserUpdateManyWithoutRolesNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutRolesInput>, Enumerable<UserUncheckedCreateWithoutRolesInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutRolesInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutRolesInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutRolesInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutRolesInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type PermissionUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<Enumerable<PermissionCreateWithoutRolesInput>, Enumerable<PermissionUncheckedCreateWithoutRolesInput>>
    connectOrCreate?: Enumerable<PermissionCreateOrConnectWithoutRolesInput>
    upsert?: Enumerable<PermissionUpsertWithWhereUniqueWithoutRolesInput>
    set?: Enumerable<PermissionWhereUniqueInput>
    disconnect?: Enumerable<PermissionWhereUniqueInput>
    delete?: Enumerable<PermissionWhereUniqueInput>
    connect?: Enumerable<PermissionWhereUniqueInput>
    update?: Enumerable<PermissionUpdateWithWhereUniqueWithoutRolesInput>
    updateMany?: Enumerable<PermissionUpdateManyWithWhereWithoutRolesInput>
    deleteMany?: Enumerable<PermissionScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutRolesInput>, Enumerable<UserUncheckedCreateWithoutRolesInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutRolesInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutRolesInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutRolesInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutRolesInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type RoleCreateNestedManyWithoutPermissionsInput = {
    create?: XOR<Enumerable<RoleCreateWithoutPermissionsInput>, Enumerable<RoleUncheckedCreateWithoutPermissionsInput>>
    connectOrCreate?: Enumerable<RoleCreateOrConnectWithoutPermissionsInput>
    connect?: Enumerable<RoleWhereUniqueInput>
  }

  export type RoleUncheckedCreateNestedManyWithoutPermissionsInput = {
    create?: XOR<Enumerable<RoleCreateWithoutPermissionsInput>, Enumerable<RoleUncheckedCreateWithoutPermissionsInput>>
    connectOrCreate?: Enumerable<RoleCreateOrConnectWithoutPermissionsInput>
    connect?: Enumerable<RoleWhereUniqueInput>
  }

  export type RoleUpdateManyWithoutPermissionsNestedInput = {
    create?: XOR<Enumerable<RoleCreateWithoutPermissionsInput>, Enumerable<RoleUncheckedCreateWithoutPermissionsInput>>
    connectOrCreate?: Enumerable<RoleCreateOrConnectWithoutPermissionsInput>
    upsert?: Enumerable<RoleUpsertWithWhereUniqueWithoutPermissionsInput>
    set?: Enumerable<RoleWhereUniqueInput>
    disconnect?: Enumerable<RoleWhereUniqueInput>
    delete?: Enumerable<RoleWhereUniqueInput>
    connect?: Enumerable<RoleWhereUniqueInput>
    update?: Enumerable<RoleUpdateWithWhereUniqueWithoutPermissionsInput>
    updateMany?: Enumerable<RoleUpdateManyWithWhereWithoutPermissionsInput>
    deleteMany?: Enumerable<RoleScalarWhereInput>
  }

  export type RoleUncheckedUpdateManyWithoutPermissionsNestedInput = {
    create?: XOR<Enumerable<RoleCreateWithoutPermissionsInput>, Enumerable<RoleUncheckedCreateWithoutPermissionsInput>>
    connectOrCreate?: Enumerable<RoleCreateOrConnectWithoutPermissionsInput>
    upsert?: Enumerable<RoleUpsertWithWhereUniqueWithoutPermissionsInput>
    set?: Enumerable<RoleWhereUniqueInput>
    disconnect?: Enumerable<RoleWhereUniqueInput>
    delete?: Enumerable<RoleWhereUniqueInput>
    connect?: Enumerable<RoleWhereUniqueInput>
    update?: Enumerable<RoleUpdateWithWhereUniqueWithoutPermissionsInput>
    updateMany?: Enumerable<RoleUpdateManyWithWhereWithoutPermissionsInput>
    deleteMany?: Enumerable<RoleScalarWhereInput>
  }

  export type EnrolmentCreateNestedManyWithoutCourseInput = {
    create?: XOR<Enumerable<EnrolmentCreateWithoutCourseInput>, Enumerable<EnrolmentUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<EnrolmentCreateOrConnectWithoutCourseInput>
    createMany?: EnrolmentCreateManyCourseInputEnvelope
    connect?: Enumerable<EnrolmentWhereUniqueInput>
  }

  export type EnrolmentUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<Enumerable<EnrolmentCreateWithoutCourseInput>, Enumerable<EnrolmentUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<EnrolmentCreateOrConnectWithoutCourseInput>
    createMany?: EnrolmentCreateManyCourseInputEnvelope
    connect?: Enumerable<EnrolmentWhereUniqueInput>
  }

  export type EnrolmentUpdateManyWithoutCourseNestedInput = {
    create?: XOR<Enumerable<EnrolmentCreateWithoutCourseInput>, Enumerable<EnrolmentUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<EnrolmentCreateOrConnectWithoutCourseInput>
    upsert?: Enumerable<EnrolmentUpsertWithWhereUniqueWithoutCourseInput>
    createMany?: EnrolmentCreateManyCourseInputEnvelope
    set?: Enumerable<EnrolmentWhereUniqueInput>
    disconnect?: Enumerable<EnrolmentWhereUniqueInput>
    delete?: Enumerable<EnrolmentWhereUniqueInput>
    connect?: Enumerable<EnrolmentWhereUniqueInput>
    update?: Enumerable<EnrolmentUpdateWithWhereUniqueWithoutCourseInput>
    updateMany?: Enumerable<EnrolmentUpdateManyWithWhereWithoutCourseInput>
    deleteMany?: Enumerable<EnrolmentScalarWhereInput>
  }

  export type EnrolmentUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<Enumerable<EnrolmentCreateWithoutCourseInput>, Enumerable<EnrolmentUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<EnrolmentCreateOrConnectWithoutCourseInput>
    upsert?: Enumerable<EnrolmentUpsertWithWhereUniqueWithoutCourseInput>
    createMany?: EnrolmentCreateManyCourseInputEnvelope
    set?: Enumerable<EnrolmentWhereUniqueInput>
    disconnect?: Enumerable<EnrolmentWhereUniqueInput>
    delete?: Enumerable<EnrolmentWhereUniqueInput>
    connect?: Enumerable<EnrolmentWhereUniqueInput>
    update?: Enumerable<EnrolmentUpdateWithWhereUniqueWithoutCourseInput>
    updateMany?: Enumerable<EnrolmentUpdateManyWithWhereWithoutCourseInput>
    deleteMany?: Enumerable<EnrolmentScalarWhereInput>
  }

  export type EnrolmentCreateNestedManyWithoutEnrolment_statusInput = {
    create?: XOR<Enumerable<EnrolmentCreateWithoutEnrolment_statusInput>, Enumerable<EnrolmentUncheckedCreateWithoutEnrolment_statusInput>>
    connectOrCreate?: Enumerable<EnrolmentCreateOrConnectWithoutEnrolment_statusInput>
    createMany?: EnrolmentCreateManyEnrolment_statusInputEnvelope
    connect?: Enumerable<EnrolmentWhereUniqueInput>
  }

  export type EnrolmentUncheckedCreateNestedManyWithoutEnrolment_statusInput = {
    create?: XOR<Enumerable<EnrolmentCreateWithoutEnrolment_statusInput>, Enumerable<EnrolmentUncheckedCreateWithoutEnrolment_statusInput>>
    connectOrCreate?: Enumerable<EnrolmentCreateOrConnectWithoutEnrolment_statusInput>
    createMany?: EnrolmentCreateManyEnrolment_statusInputEnvelope
    connect?: Enumerable<EnrolmentWhereUniqueInput>
  }

  export type EnrolmentUpdateManyWithoutEnrolment_statusNestedInput = {
    create?: XOR<Enumerable<EnrolmentCreateWithoutEnrolment_statusInput>, Enumerable<EnrolmentUncheckedCreateWithoutEnrolment_statusInput>>
    connectOrCreate?: Enumerable<EnrolmentCreateOrConnectWithoutEnrolment_statusInput>
    upsert?: Enumerable<EnrolmentUpsertWithWhereUniqueWithoutEnrolment_statusInput>
    createMany?: EnrolmentCreateManyEnrolment_statusInputEnvelope
    set?: Enumerable<EnrolmentWhereUniqueInput>
    disconnect?: Enumerable<EnrolmentWhereUniqueInput>
    delete?: Enumerable<EnrolmentWhereUniqueInput>
    connect?: Enumerable<EnrolmentWhereUniqueInput>
    update?: Enumerable<EnrolmentUpdateWithWhereUniqueWithoutEnrolment_statusInput>
    updateMany?: Enumerable<EnrolmentUpdateManyWithWhereWithoutEnrolment_statusInput>
    deleteMany?: Enumerable<EnrolmentScalarWhereInput>
  }

  export type EnrolmentUncheckedUpdateManyWithoutEnrolment_statusNestedInput = {
    create?: XOR<Enumerable<EnrolmentCreateWithoutEnrolment_statusInput>, Enumerable<EnrolmentUncheckedCreateWithoutEnrolment_statusInput>>
    connectOrCreate?: Enumerable<EnrolmentCreateOrConnectWithoutEnrolment_statusInput>
    upsert?: Enumerable<EnrolmentUpsertWithWhereUniqueWithoutEnrolment_statusInput>
    createMany?: EnrolmentCreateManyEnrolment_statusInputEnvelope
    set?: Enumerable<EnrolmentWhereUniqueInput>
    disconnect?: Enumerable<EnrolmentWhereUniqueInput>
    delete?: Enumerable<EnrolmentWhereUniqueInput>
    connect?: Enumerable<EnrolmentWhereUniqueInput>
    update?: Enumerable<EnrolmentUpdateWithWhereUniqueWithoutEnrolment_statusInput>
    updateMany?: Enumerable<EnrolmentUpdateManyWithWhereWithoutEnrolment_statusInput>
    deleteMany?: Enumerable<EnrolmentScalarWhereInput>
  }

  export type PaymentCreateNestedManyWithoutPayment_methodInput = {
    create?: XOR<Enumerable<PaymentCreateWithoutPayment_methodInput>, Enumerable<PaymentUncheckedCreateWithoutPayment_methodInput>>
    connectOrCreate?: Enumerable<PaymentCreateOrConnectWithoutPayment_methodInput>
    createMany?: PaymentCreateManyPayment_methodInputEnvelope
    connect?: Enumerable<PaymentWhereUniqueInput>
  }

  export type PaymentUncheckedCreateNestedManyWithoutPayment_methodInput = {
    create?: XOR<Enumerable<PaymentCreateWithoutPayment_methodInput>, Enumerable<PaymentUncheckedCreateWithoutPayment_methodInput>>
    connectOrCreate?: Enumerable<PaymentCreateOrConnectWithoutPayment_methodInput>
    createMany?: PaymentCreateManyPayment_methodInputEnvelope
    connect?: Enumerable<PaymentWhereUniqueInput>
  }

  export type PaymentUpdateManyWithoutPayment_methodNestedInput = {
    create?: XOR<Enumerable<PaymentCreateWithoutPayment_methodInput>, Enumerable<PaymentUncheckedCreateWithoutPayment_methodInput>>
    connectOrCreate?: Enumerable<PaymentCreateOrConnectWithoutPayment_methodInput>
    upsert?: Enumerable<PaymentUpsertWithWhereUniqueWithoutPayment_methodInput>
    createMany?: PaymentCreateManyPayment_methodInputEnvelope
    set?: Enumerable<PaymentWhereUniqueInput>
    disconnect?: Enumerable<PaymentWhereUniqueInput>
    delete?: Enumerable<PaymentWhereUniqueInput>
    connect?: Enumerable<PaymentWhereUniqueInput>
    update?: Enumerable<PaymentUpdateWithWhereUniqueWithoutPayment_methodInput>
    updateMany?: Enumerable<PaymentUpdateManyWithWhereWithoutPayment_methodInput>
    deleteMany?: Enumerable<PaymentScalarWhereInput>
  }

  export type PaymentUncheckedUpdateManyWithoutPayment_methodNestedInput = {
    create?: XOR<Enumerable<PaymentCreateWithoutPayment_methodInput>, Enumerable<PaymentUncheckedCreateWithoutPayment_methodInput>>
    connectOrCreate?: Enumerable<PaymentCreateOrConnectWithoutPayment_methodInput>
    upsert?: Enumerable<PaymentUpsertWithWhereUniqueWithoutPayment_methodInput>
    createMany?: PaymentCreateManyPayment_methodInputEnvelope
    set?: Enumerable<PaymentWhereUniqueInput>
    disconnect?: Enumerable<PaymentWhereUniqueInput>
    delete?: Enumerable<PaymentWhereUniqueInput>
    connect?: Enumerable<PaymentWhereUniqueInput>
    update?: Enumerable<PaymentUpdateWithWhereUniqueWithoutPayment_methodInput>
    updateMany?: Enumerable<PaymentUpdateManyWithWhereWithoutPayment_methodInput>
    deleteMany?: Enumerable<PaymentScalarWhereInput>
  }

  export type PaymentMethodCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<PaymentMethodCreateWithoutPaymentsInput, PaymentMethodUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutPaymentsInput
    connect?: PaymentMethodWhereUniqueInput
  }

  export type EnrolmentCreateNestedManyWithoutPaymentInput = {
    create?: XOR<Enumerable<EnrolmentCreateWithoutPaymentInput>, Enumerable<EnrolmentUncheckedCreateWithoutPaymentInput>>
    connectOrCreate?: Enumerable<EnrolmentCreateOrConnectWithoutPaymentInput>
    createMany?: EnrolmentCreateManyPaymentInputEnvelope
    connect?: Enumerable<EnrolmentWhereUniqueInput>
  }

  export type EnrolmentUncheckedCreateNestedManyWithoutPaymentInput = {
    create?: XOR<Enumerable<EnrolmentCreateWithoutPaymentInput>, Enumerable<EnrolmentUncheckedCreateWithoutPaymentInput>>
    connectOrCreate?: Enumerable<EnrolmentCreateOrConnectWithoutPaymentInput>
    createMany?: EnrolmentCreateManyPaymentInputEnvelope
    connect?: Enumerable<EnrolmentWhereUniqueInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PaymentMethodUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<PaymentMethodCreateWithoutPaymentsInput, PaymentMethodUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutPaymentsInput
    upsert?: PaymentMethodUpsertWithoutPaymentsInput
    connect?: PaymentMethodWhereUniqueInput
    update?: XOR<PaymentMethodUpdateWithoutPaymentsInput, PaymentMethodUncheckedUpdateWithoutPaymentsInput>
  }

  export type EnrolmentUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<Enumerable<EnrolmentCreateWithoutPaymentInput>, Enumerable<EnrolmentUncheckedCreateWithoutPaymentInput>>
    connectOrCreate?: Enumerable<EnrolmentCreateOrConnectWithoutPaymentInput>
    upsert?: Enumerable<EnrolmentUpsertWithWhereUniqueWithoutPaymentInput>
    createMany?: EnrolmentCreateManyPaymentInputEnvelope
    set?: Enumerable<EnrolmentWhereUniqueInput>
    disconnect?: Enumerable<EnrolmentWhereUniqueInput>
    delete?: Enumerable<EnrolmentWhereUniqueInput>
    connect?: Enumerable<EnrolmentWhereUniqueInput>
    update?: Enumerable<EnrolmentUpdateWithWhereUniqueWithoutPaymentInput>
    updateMany?: Enumerable<EnrolmentUpdateManyWithWhereWithoutPaymentInput>
    deleteMany?: Enumerable<EnrolmentScalarWhereInput>
  }

  export type EnrolmentUncheckedUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<Enumerable<EnrolmentCreateWithoutPaymentInput>, Enumerable<EnrolmentUncheckedCreateWithoutPaymentInput>>
    connectOrCreate?: Enumerable<EnrolmentCreateOrConnectWithoutPaymentInput>
    upsert?: Enumerable<EnrolmentUpsertWithWhereUniqueWithoutPaymentInput>
    createMany?: EnrolmentCreateManyPaymentInputEnvelope
    set?: Enumerable<EnrolmentWhereUniqueInput>
    disconnect?: Enumerable<EnrolmentWhereUniqueInput>
    delete?: Enumerable<EnrolmentWhereUniqueInput>
    connect?: Enumerable<EnrolmentWhereUniqueInput>
    update?: Enumerable<EnrolmentUpdateWithWhereUniqueWithoutPaymentInput>
    updateMany?: Enumerable<EnrolmentUpdateManyWithWhereWithoutPaymentInput>
    deleteMany?: Enumerable<EnrolmentScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutEnrolmentsInput = {
    create?: XOR<UserCreateWithoutEnrolmentsInput, UserUncheckedCreateWithoutEnrolmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrolmentsInput
    connect?: UserWhereUniqueInput
  }

  export type EnrolmentStatusCreateNestedOneWithoutEnrolementsInput = {
    create?: XOR<EnrolmentStatusCreateWithoutEnrolementsInput, EnrolmentStatusUncheckedCreateWithoutEnrolementsInput>
    connectOrCreate?: EnrolmentStatusCreateOrConnectWithoutEnrolementsInput
    connect?: EnrolmentStatusWhereUniqueInput
  }

  export type PaymentCreateNestedOneWithoutEnrolmentsInput = {
    create?: XOR<PaymentCreateWithoutEnrolmentsInput, PaymentUncheckedCreateWithoutEnrolmentsInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutEnrolmentsInput
    connect?: PaymentWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutEnrolmentsInput = {
    create?: XOR<CourseCreateWithoutEnrolmentsInput, CourseUncheckedCreateWithoutEnrolmentsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutEnrolmentsInput
    connect?: CourseWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEnrolmentsNestedInput = {
    create?: XOR<UserCreateWithoutEnrolmentsInput, UserUncheckedCreateWithoutEnrolmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrolmentsInput
    upsert?: UserUpsertWithoutEnrolmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutEnrolmentsInput, UserUncheckedUpdateWithoutEnrolmentsInput>
  }

  export type EnrolmentStatusUpdateOneRequiredWithoutEnrolementsNestedInput = {
    create?: XOR<EnrolmentStatusCreateWithoutEnrolementsInput, EnrolmentStatusUncheckedCreateWithoutEnrolementsInput>
    connectOrCreate?: EnrolmentStatusCreateOrConnectWithoutEnrolementsInput
    upsert?: EnrolmentStatusUpsertWithoutEnrolementsInput
    connect?: EnrolmentStatusWhereUniqueInput
    update?: XOR<EnrolmentStatusUpdateWithoutEnrolementsInput, EnrolmentStatusUncheckedUpdateWithoutEnrolementsInput>
  }

  export type PaymentUpdateOneWithoutEnrolmentsNestedInput = {
    create?: XOR<PaymentCreateWithoutEnrolmentsInput, PaymentUncheckedCreateWithoutEnrolmentsInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutEnrolmentsInput
    upsert?: PaymentUpsertWithoutEnrolmentsInput
    disconnect?: boolean
    delete?: boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<PaymentUpdateWithoutEnrolmentsInput, PaymentUncheckedUpdateWithoutEnrolmentsInput>
  }

  export type CourseUpdateOneRequiredWithoutEnrolmentsNestedInput = {
    create?: XOR<CourseCreateWithoutEnrolmentsInput, CourseUncheckedCreateWithoutEnrolmentsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutEnrolmentsInput
    upsert?: CourseUpsertWithoutEnrolmentsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<CourseUpdateWithoutEnrolmentsInput, CourseUncheckedUpdateWithoutEnrolmentsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
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
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
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

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type RoleCreateWithoutUsersInput = {
    name: string
    active?: number
    created_at?: Date | string
    updated_at?: Date | string
    permissions?: PermissionCreateNestedManyWithoutRolesInput
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    active?: number
    created_at?: Date | string
    updated_at?: Date | string
    permissions?: PermissionUncheckedCreateNestedManyWithoutRolesInput
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type EnrolmentCreateWithoutUserInput = {
    username?: string | null
    curso_moodle_id: number
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    enrolment_status: EnrolmentStatusCreateNestedOneWithoutEnrolementsInput
    payment?: PaymentCreateNestedOneWithoutEnrolmentsInput
    course: CourseCreateNestedOneWithoutEnrolmentsInput
  }

  export type EnrolmentUncheckedCreateWithoutUserInput = {
    id?: number
    username?: string | null
    curso_moodle_id: number
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    enrolment_status_id: number
    payment_id?: number | null
    course_id: number
  }

  export type EnrolmentCreateOrConnectWithoutUserInput = {
    where: EnrolmentWhereUniqueInput
    create: XOR<EnrolmentCreateWithoutUserInput, EnrolmentUncheckedCreateWithoutUserInput>
  }

  export type EnrolmentCreateManyUserInputEnvelope = {
    data: Enumerable<EnrolmentCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithWhereUniqueWithoutUsersInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutUsersInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateManyWithWhereWithoutUsersInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutRolesInput>
  }

  export type RoleScalarWhereInput = {
    AND?: Enumerable<RoleScalarWhereInput>
    OR?: Enumerable<RoleScalarWhereInput>
    NOT?: Enumerable<RoleScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    active?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type EnrolmentUpsertWithWhereUniqueWithoutUserInput = {
    where: EnrolmentWhereUniqueInput
    update: XOR<EnrolmentUpdateWithoutUserInput, EnrolmentUncheckedUpdateWithoutUserInput>
    create: XOR<EnrolmentCreateWithoutUserInput, EnrolmentUncheckedCreateWithoutUserInput>
  }

  export type EnrolmentUpdateWithWhereUniqueWithoutUserInput = {
    where: EnrolmentWhereUniqueInput
    data: XOR<EnrolmentUpdateWithoutUserInput, EnrolmentUncheckedUpdateWithoutUserInput>
  }

  export type EnrolmentUpdateManyWithWhereWithoutUserInput = {
    where: EnrolmentScalarWhereInput
    data: XOR<EnrolmentUpdateManyMutationInput, EnrolmentUncheckedUpdateManyWithoutEnrolmentsInput>
  }

  export type EnrolmentScalarWhereInput = {
    AND?: Enumerable<EnrolmentScalarWhereInput>
    OR?: Enumerable<EnrolmentScalarWhereInput>
    NOT?: Enumerable<EnrolmentScalarWhereInput>
    id?: IntFilter | number
    username?: StringNullableFilter | string | null
    curso_moodle_id?: IntFilter | number
    description?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    user_id?: IntFilter | number
    enrolment_status_id?: IntFilter | number
    payment_id?: IntNullableFilter | number | null
    course_id?: IntFilter | number
  }

  export type PermissionCreateWithoutRolesInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PermissionUncheckedCreateWithoutRolesInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PermissionCreateOrConnectWithoutRolesInput = {
    where: PermissionWhereUniqueInput
    create: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput>
  }

  export type UserCreateWithoutRolesInput = {
    name: string
    last_name: string
    email: string
    email_verified?: number
    password: string
    country?: string | null
    region?: string | null
    username: string
    birth_day?: Date | string | null
    deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
    remember_token?: string | null
    enrolments?: EnrolmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRolesInput = {
    id?: number
    name: string
    last_name: string
    email: string
    email_verified?: number
    password: string
    country?: string | null
    region?: string | null
    username: string
    birth_day?: Date | string | null
    deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
    remember_token?: string | null
    enrolments?: EnrolmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
  }

  export type PermissionUpsertWithWhereUniqueWithoutRolesInput = {
    where: PermissionWhereUniqueInput
    update: XOR<PermissionUpdateWithoutRolesInput, PermissionUncheckedUpdateWithoutRolesInput>
    create: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput>
  }

  export type PermissionUpdateWithWhereUniqueWithoutRolesInput = {
    where: PermissionWhereUniqueInput
    data: XOR<PermissionUpdateWithoutRolesInput, PermissionUncheckedUpdateWithoutRolesInput>
  }

  export type PermissionUpdateManyWithWhereWithoutRolesInput = {
    where: PermissionScalarWhereInput
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyWithoutPermissionsInput>
  }

  export type PermissionScalarWhereInput = {
    AND?: Enumerable<PermissionScalarWhereInput>
    OR?: Enumerable<PermissionScalarWhereInput>
    NOT?: Enumerable<PermissionScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutRolesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRolesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
  }

  export type UserUpdateManyWithWhereWithoutRolesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUsersInput>
  }

  export type UserScalarWhereInput = {
    AND?: Enumerable<UserScalarWhereInput>
    OR?: Enumerable<UserScalarWhereInput>
    NOT?: Enumerable<UserScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    last_name?: StringFilter | string
    email?: StringFilter | string
    email_verified?: IntFilter | number
    password?: StringFilter | string
    country?: StringNullableFilter | string | null
    region?: StringNullableFilter | string | null
    username?: StringFilter | string
    birth_day?: DateTimeNullableFilter | Date | string | null
    deleted?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    remember_token?: StringNullableFilter | string | null
  }

  export type RoleCreateWithoutPermissionsInput = {
    name: string
    active?: number
    created_at?: Date | string
    updated_at?: Date | string
    users?: UserCreateNestedManyWithoutRolesInput
  }

  export type RoleUncheckedCreateWithoutPermissionsInput = {
    id?: number
    name: string
    active?: number
    created_at?: Date | string
    updated_at?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutRolesInput
  }

  export type RoleCreateOrConnectWithoutPermissionsInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput>
  }

  export type RoleUpsertWithWhereUniqueWithoutPermissionsInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutPermissionsInput, RoleUncheckedUpdateWithoutPermissionsInput>
    create: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutPermissionsInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutPermissionsInput, RoleUncheckedUpdateWithoutPermissionsInput>
  }

  export type RoleUpdateManyWithWhereWithoutPermissionsInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutRolesInput>
  }

  export type EnrolmentCreateWithoutCourseInput = {
    username?: string | null
    curso_moodle_id: number
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutEnrolmentsInput
    enrolment_status: EnrolmentStatusCreateNestedOneWithoutEnrolementsInput
    payment?: PaymentCreateNestedOneWithoutEnrolmentsInput
  }

  export type EnrolmentUncheckedCreateWithoutCourseInput = {
    id?: number
    username?: string | null
    curso_moodle_id: number
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    user_id: number
    enrolment_status_id: number
    payment_id?: number | null
  }

  export type EnrolmentCreateOrConnectWithoutCourseInput = {
    where: EnrolmentWhereUniqueInput
    create: XOR<EnrolmentCreateWithoutCourseInput, EnrolmentUncheckedCreateWithoutCourseInput>
  }

  export type EnrolmentCreateManyCourseInputEnvelope = {
    data: Enumerable<EnrolmentCreateManyCourseInput>
    skipDuplicates?: boolean
  }

  export type EnrolmentUpsertWithWhereUniqueWithoutCourseInput = {
    where: EnrolmentWhereUniqueInput
    update: XOR<EnrolmentUpdateWithoutCourseInput, EnrolmentUncheckedUpdateWithoutCourseInput>
    create: XOR<EnrolmentCreateWithoutCourseInput, EnrolmentUncheckedCreateWithoutCourseInput>
  }

  export type EnrolmentUpdateWithWhereUniqueWithoutCourseInput = {
    where: EnrolmentWhereUniqueInput
    data: XOR<EnrolmentUpdateWithoutCourseInput, EnrolmentUncheckedUpdateWithoutCourseInput>
  }

  export type EnrolmentUpdateManyWithWhereWithoutCourseInput = {
    where: EnrolmentScalarWhereInput
    data: XOR<EnrolmentUpdateManyMutationInput, EnrolmentUncheckedUpdateManyWithoutEnrolmentsInput>
  }

  export type EnrolmentCreateWithoutEnrolment_statusInput = {
    username?: string | null
    curso_moodle_id: number
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutEnrolmentsInput
    payment?: PaymentCreateNestedOneWithoutEnrolmentsInput
    course: CourseCreateNestedOneWithoutEnrolmentsInput
  }

  export type EnrolmentUncheckedCreateWithoutEnrolment_statusInput = {
    id?: number
    username?: string | null
    curso_moodle_id: number
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    user_id: number
    payment_id?: number | null
    course_id: number
  }

  export type EnrolmentCreateOrConnectWithoutEnrolment_statusInput = {
    where: EnrolmentWhereUniqueInput
    create: XOR<EnrolmentCreateWithoutEnrolment_statusInput, EnrolmentUncheckedCreateWithoutEnrolment_statusInput>
  }

  export type EnrolmentCreateManyEnrolment_statusInputEnvelope = {
    data: Enumerable<EnrolmentCreateManyEnrolment_statusInput>
    skipDuplicates?: boolean
  }

  export type EnrolmentUpsertWithWhereUniqueWithoutEnrolment_statusInput = {
    where: EnrolmentWhereUniqueInput
    update: XOR<EnrolmentUpdateWithoutEnrolment_statusInput, EnrolmentUncheckedUpdateWithoutEnrolment_statusInput>
    create: XOR<EnrolmentCreateWithoutEnrolment_statusInput, EnrolmentUncheckedCreateWithoutEnrolment_statusInput>
  }

  export type EnrolmentUpdateWithWhereUniqueWithoutEnrolment_statusInput = {
    where: EnrolmentWhereUniqueInput
    data: XOR<EnrolmentUpdateWithoutEnrolment_statusInput, EnrolmentUncheckedUpdateWithoutEnrolment_statusInput>
  }

  export type EnrolmentUpdateManyWithWhereWithoutEnrolment_statusInput = {
    where: EnrolmentScalarWhereInput
    data: XOR<EnrolmentUpdateManyMutationInput, EnrolmentUncheckedUpdateManyWithoutEnrolementsInput>
  }

  export type PaymentCreateWithoutPayment_methodInput = {
    amount: number
    currency: string
    payment_status: string
    payment_id: string
    payer_id: string
    payer_email: string
    payer_name: string
    transaction_id: string
    file?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    enrolments?: EnrolmentCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutPayment_methodInput = {
    id?: number
    amount: number
    currency: string
    payment_status: string
    payment_id: string
    payer_id: string
    payer_email: string
    payer_name: string
    transaction_id: string
    file?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    enrolments?: EnrolmentUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutPayment_methodInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutPayment_methodInput, PaymentUncheckedCreateWithoutPayment_methodInput>
  }

  export type PaymentCreateManyPayment_methodInputEnvelope = {
    data: Enumerable<PaymentCreateManyPayment_methodInput>
    skipDuplicates?: boolean
  }

  export type PaymentUpsertWithWhereUniqueWithoutPayment_methodInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutPayment_methodInput, PaymentUncheckedUpdateWithoutPayment_methodInput>
    create: XOR<PaymentCreateWithoutPayment_methodInput, PaymentUncheckedCreateWithoutPayment_methodInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutPayment_methodInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutPayment_methodInput, PaymentUncheckedUpdateWithoutPayment_methodInput>
  }

  export type PaymentUpdateManyWithWhereWithoutPayment_methodInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutPaymentsInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: Enumerable<PaymentScalarWhereInput>
    OR?: Enumerable<PaymentScalarWhereInput>
    NOT?: Enumerable<PaymentScalarWhereInput>
    id?: IntFilter | number
    amount?: FloatFilter | number
    currency?: StringFilter | string
    payment_status?: StringFilter | string
    payment_id?: StringFilter | string
    payer_id?: StringFilter | string
    payer_email?: StringFilter | string
    payer_name?: StringFilter | string
    transaction_id?: StringFilter | string
    file?: StringNullableFilter | string | null
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    payment_method_id?: IntFilter | number
  }

  export type PaymentMethodCreateWithoutPaymentsInput = {
    name: string
    label: string
    active?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentMethodUncheckedCreateWithoutPaymentsInput = {
    id?: number
    name: string
    label: string
    active?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentMethodCreateOrConnectWithoutPaymentsInput = {
    where: PaymentMethodWhereUniqueInput
    create: XOR<PaymentMethodCreateWithoutPaymentsInput, PaymentMethodUncheckedCreateWithoutPaymentsInput>
  }

  export type EnrolmentCreateWithoutPaymentInput = {
    username?: string | null
    curso_moodle_id: number
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutEnrolmentsInput
    enrolment_status: EnrolmentStatusCreateNestedOneWithoutEnrolementsInput
    course: CourseCreateNestedOneWithoutEnrolmentsInput
  }

  export type EnrolmentUncheckedCreateWithoutPaymentInput = {
    id?: number
    username?: string | null
    curso_moodle_id: number
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    user_id: number
    enrolment_status_id: number
    course_id: number
  }

  export type EnrolmentCreateOrConnectWithoutPaymentInput = {
    where: EnrolmentWhereUniqueInput
    create: XOR<EnrolmentCreateWithoutPaymentInput, EnrolmentUncheckedCreateWithoutPaymentInput>
  }

  export type EnrolmentCreateManyPaymentInputEnvelope = {
    data: Enumerable<EnrolmentCreateManyPaymentInput>
    skipDuplicates?: boolean
  }

  export type PaymentMethodUpsertWithoutPaymentsInput = {
    update: XOR<PaymentMethodUpdateWithoutPaymentsInput, PaymentMethodUncheckedUpdateWithoutPaymentsInput>
    create: XOR<PaymentMethodCreateWithoutPaymentsInput, PaymentMethodUncheckedCreateWithoutPaymentsInput>
  }

  export type PaymentMethodUpdateWithoutPaymentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrolmentUpsertWithWhereUniqueWithoutPaymentInput = {
    where: EnrolmentWhereUniqueInput
    update: XOR<EnrolmentUpdateWithoutPaymentInput, EnrolmentUncheckedUpdateWithoutPaymentInput>
    create: XOR<EnrolmentCreateWithoutPaymentInput, EnrolmentUncheckedCreateWithoutPaymentInput>
  }

  export type EnrolmentUpdateWithWhereUniqueWithoutPaymentInput = {
    where: EnrolmentWhereUniqueInput
    data: XOR<EnrolmentUpdateWithoutPaymentInput, EnrolmentUncheckedUpdateWithoutPaymentInput>
  }

  export type EnrolmentUpdateManyWithWhereWithoutPaymentInput = {
    where: EnrolmentScalarWhereInput
    data: XOR<EnrolmentUpdateManyMutationInput, EnrolmentUncheckedUpdateManyWithoutEnrolmentsInput>
  }

  export type UserCreateWithoutEnrolmentsInput = {
    name: string
    last_name: string
    email: string
    email_verified?: number
    password: string
    country?: string | null
    region?: string | null
    username: string
    birth_day?: Date | string | null
    deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
    remember_token?: string | null
    roles?: RoleCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutEnrolmentsInput = {
    id?: number
    name: string
    last_name: string
    email: string
    email_verified?: number
    password: string
    country?: string | null
    region?: string | null
    username: string
    birth_day?: Date | string | null
    deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
    remember_token?: string | null
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutEnrolmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEnrolmentsInput, UserUncheckedCreateWithoutEnrolmentsInput>
  }

  export type EnrolmentStatusCreateWithoutEnrolementsInput = {
    name: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EnrolmentStatusUncheckedCreateWithoutEnrolementsInput = {
    id?: number
    name: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EnrolmentStatusCreateOrConnectWithoutEnrolementsInput = {
    where: EnrolmentStatusWhereUniqueInput
    create: XOR<EnrolmentStatusCreateWithoutEnrolementsInput, EnrolmentStatusUncheckedCreateWithoutEnrolementsInput>
  }

  export type PaymentCreateWithoutEnrolmentsInput = {
    amount: number
    currency: string
    payment_status: string
    payment_id: string
    payer_id: string
    payer_email: string
    payer_name: string
    transaction_id: string
    file?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    payment_method: PaymentMethodCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutEnrolmentsInput = {
    id?: number
    amount: number
    currency: string
    payment_status: string
    payment_id: string
    payer_id: string
    payer_email: string
    payer_name: string
    transaction_id: string
    file?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    payment_method_id: number
  }

  export type PaymentCreateOrConnectWithoutEnrolmentsInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutEnrolmentsInput, PaymentUncheckedCreateWithoutEnrolmentsInput>
  }

  export type CourseCreateWithoutEnrolmentsInput = {
    moodle_id: number
    fullname: string
    shortname: string
    category: string
    destacado?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CourseUncheckedCreateWithoutEnrolmentsInput = {
    id?: number
    moodle_id: number
    fullname: string
    shortname: string
    category: string
    destacado?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CourseCreateOrConnectWithoutEnrolmentsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutEnrolmentsInput, CourseUncheckedCreateWithoutEnrolmentsInput>
  }

  export type UserUpsertWithoutEnrolmentsInput = {
    update: XOR<UserUpdateWithoutEnrolmentsInput, UserUncheckedUpdateWithoutEnrolmentsInput>
    create: XOR<UserCreateWithoutEnrolmentsInput, UserUncheckedCreateWithoutEnrolmentsInput>
  }

  export type UserUpdateWithoutEnrolmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    birth_day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: RoleUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutEnrolmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    birth_day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type EnrolmentStatusUpsertWithoutEnrolementsInput = {
    update: XOR<EnrolmentStatusUpdateWithoutEnrolementsInput, EnrolmentStatusUncheckedUpdateWithoutEnrolementsInput>
    create: XOR<EnrolmentStatusCreateWithoutEnrolementsInput, EnrolmentStatusUncheckedCreateWithoutEnrolementsInput>
  }

  export type EnrolmentStatusUpdateWithoutEnrolementsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrolmentStatusUncheckedUpdateWithoutEnrolementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpsertWithoutEnrolmentsInput = {
    update: XOR<PaymentUpdateWithoutEnrolmentsInput, PaymentUncheckedUpdateWithoutEnrolmentsInput>
    create: XOR<PaymentCreateWithoutEnrolmentsInput, PaymentUncheckedCreateWithoutEnrolmentsInput>
  }

  export type PaymentUpdateWithoutEnrolmentsInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    payment_status?: StringFieldUpdateOperationsInput | string
    payment_id?: StringFieldUpdateOperationsInput | string
    payer_id?: StringFieldUpdateOperationsInput | string
    payer_email?: StringFieldUpdateOperationsInput | string
    payer_name?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    file?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_method?: PaymentMethodUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutEnrolmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    payment_status?: StringFieldUpdateOperationsInput | string
    payment_id?: StringFieldUpdateOperationsInput | string
    payer_id?: StringFieldUpdateOperationsInput | string
    payer_email?: StringFieldUpdateOperationsInput | string
    payer_name?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    file?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_method_id?: IntFieldUpdateOperationsInput | number
  }

  export type CourseUpsertWithoutEnrolmentsInput = {
    update: XOR<CourseUpdateWithoutEnrolmentsInput, CourseUncheckedUpdateWithoutEnrolmentsInput>
    create: XOR<CourseCreateWithoutEnrolmentsInput, CourseUncheckedCreateWithoutEnrolmentsInput>
  }

  export type CourseUpdateWithoutEnrolmentsInput = {
    moodle_id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    shortname?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    destacado?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateWithoutEnrolmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    moodle_id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    shortname?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    destacado?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrolmentCreateManyUserInput = {
    id?: number
    username?: string | null
    curso_moodle_id: number
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    enrolment_status_id: number
    payment_id?: number | null
    course_id: number
  }

  export type RoleUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: PermissionUpdateManyWithoutRolesNestedInput
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: PermissionUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type RoleUncheckedUpdateManyWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrolmentUpdateWithoutUserInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    curso_moodle_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolment_status?: EnrolmentStatusUpdateOneRequiredWithoutEnrolementsNestedInput
    payment?: PaymentUpdateOneWithoutEnrolmentsNestedInput
    course?: CourseUpdateOneRequiredWithoutEnrolmentsNestedInput
  }

  export type EnrolmentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    curso_moodle_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolment_status_id?: IntFieldUpdateOperationsInput | number
    payment_id?: NullableIntFieldUpdateOperationsInput | number | null
    course_id?: IntFieldUpdateOperationsInput | number
  }

  export type EnrolmentUncheckedUpdateManyWithoutEnrolmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    curso_moodle_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolment_status_id?: IntFieldUpdateOperationsInput | number
    payment_id?: NullableIntFieldUpdateOperationsInput | number | null
    course_id?: IntFieldUpdateOperationsInput | number
  }

  export type PermissionUpdateWithoutRolesInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUncheckedUpdateManyWithoutPermissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutRolesInput = {
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    birth_day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    enrolments?: EnrolmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    birth_day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    enrolments?: EnrolmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    birth_day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoleUpdateWithoutPermissionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutRolesNestedInput
  }

  export type RoleUncheckedUpdateWithoutPermissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type EnrolmentCreateManyCourseInput = {
    id?: number
    username?: string | null
    curso_moodle_id: number
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    user_id: number
    enrolment_status_id: number
    payment_id?: number | null
  }

  export type EnrolmentUpdateWithoutCourseInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    curso_moodle_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEnrolmentsNestedInput
    enrolment_status?: EnrolmentStatusUpdateOneRequiredWithoutEnrolementsNestedInput
    payment?: PaymentUpdateOneWithoutEnrolmentsNestedInput
  }

  export type EnrolmentUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    curso_moodle_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    enrolment_status_id?: IntFieldUpdateOperationsInput | number
    payment_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EnrolmentCreateManyEnrolment_statusInput = {
    id?: number
    username?: string | null
    curso_moodle_id: number
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    user_id: number
    payment_id?: number | null
    course_id: number
  }

  export type EnrolmentUpdateWithoutEnrolment_statusInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    curso_moodle_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEnrolmentsNestedInput
    payment?: PaymentUpdateOneWithoutEnrolmentsNestedInput
    course?: CourseUpdateOneRequiredWithoutEnrolmentsNestedInput
  }

  export type EnrolmentUncheckedUpdateWithoutEnrolment_statusInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    curso_moodle_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    payment_id?: NullableIntFieldUpdateOperationsInput | number | null
    course_id?: IntFieldUpdateOperationsInput | number
  }

  export type EnrolmentUncheckedUpdateManyWithoutEnrolementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    curso_moodle_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    payment_id?: NullableIntFieldUpdateOperationsInput | number | null
    course_id?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentCreateManyPayment_methodInput = {
    id?: number
    amount: number
    currency: string
    payment_status: string
    payment_id: string
    payer_id: string
    payer_email: string
    payer_name: string
    transaction_id: string
    file?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentUpdateWithoutPayment_methodInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    payment_status?: StringFieldUpdateOperationsInput | string
    payment_id?: StringFieldUpdateOperationsInput | string
    payer_id?: StringFieldUpdateOperationsInput | string
    payer_email?: StringFieldUpdateOperationsInput | string
    payer_name?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    file?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolments?: EnrolmentUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutPayment_methodInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    payment_status?: StringFieldUpdateOperationsInput | string
    payment_id?: StringFieldUpdateOperationsInput | string
    payer_id?: StringFieldUpdateOperationsInput | string
    payer_email?: StringFieldUpdateOperationsInput | string
    payer_name?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    file?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolments?: EnrolmentUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateManyWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    payment_status?: StringFieldUpdateOperationsInput | string
    payment_id?: StringFieldUpdateOperationsInput | string
    payer_id?: StringFieldUpdateOperationsInput | string
    payer_email?: StringFieldUpdateOperationsInput | string
    payer_name?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    file?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrolmentCreateManyPaymentInput = {
    id?: number
    username?: string | null
    curso_moodle_id: number
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    user_id: number
    enrolment_status_id: number
    course_id: number
  }

  export type EnrolmentUpdateWithoutPaymentInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    curso_moodle_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEnrolmentsNestedInput
    enrolment_status?: EnrolmentStatusUpdateOneRequiredWithoutEnrolementsNestedInput
    course?: CourseUpdateOneRequiredWithoutEnrolmentsNestedInput
  }

  export type EnrolmentUncheckedUpdateWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    curso_moodle_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    enrolment_status_id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
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
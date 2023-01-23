
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.7.1
 * Query Engine version: 272861e07ab64f234d3ffc4094e32bd61775599c
 */
Prisma.prismaVersion = {
  client: "4.7.1",
  engine: "272861e07ab64f234d3ffc4094e32bd61775599c"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.CourseScalarFieldEnum = makeEnum({
  id: 'id',
  moodle_id: 'moodle_id',
  fullname: 'fullname',
  shortname: 'shortname',
  category: 'category',
  destacado: 'destacado',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.EnrolmentScalarFieldEnum = makeEnum({
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
});

exports.Prisma.EnrolmentStatusScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.PaymentMethodScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  label: 'label',
  active: 'active',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.PaymentScalarFieldEnum = makeEnum({
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
});

exports.Prisma.PermissionScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.RoleScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  active: 'active',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TestimonialScalarFieldEnum = makeEnum({
  id: 'id',
  autor: 'autor',
  updated_by: 'updated_by',
  text: 'text',
  active: 'active',
  file: 'file',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
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
});


exports.Prisma.ModelName = makeEnum({
  User: 'User',
  Role: 'Role',
  Permission: 'Permission',
  Course: 'Course',
  EnrolmentStatus: 'EnrolmentStatus',
  PaymentMethod: 'PaymentMethod',
  Payment: 'Payment',
  Enrolment: 'Enrolment',
  Testimonial: 'Testimonial'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

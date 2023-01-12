
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions
} = require('./runtime/index')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
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


  const path = require('path')

const { findSync } = require('./runtime')
const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "prisma/generated/moodleClient",
    "generated/moodleClient",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.Mdl_contextScalarFieldEnum = makeEnum({
  id: 'id',
  instanceid: 'instanceid',
  contextlevel: 'contextlevel'
});

exports.Prisma.Mdl_courseScalarFieldEnum = makeEnum({
  id: 'id',
  category: 'category',
  fullname: 'fullname',
  shortname: 'shortname',
  summary: 'summary',
  visible: 'visible',
  timecreated: 'timecreated'
});

exports.Prisma.Mdl_course_categoriesScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  visible: 'visible'
});

exports.Prisma.Mdl_customfield_dataScalarFieldEnum = makeEnum({
  id: 'id',
  instanceid: 'instanceid',
  fieldid: 'fieldid',
  value: 'value'
});

exports.Prisma.Mdl_customfield_fieldScalarFieldEnum = makeEnum({
  id: 'id',
  shortname: 'shortname',
  name: 'name'
});

exports.Prisma.Mdl_filesScalarFieldEnum = makeEnum({
  id: 'id',
  contextid: 'contextid',
  filename: 'filename',
  component: 'component'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});


exports.Prisma.ModelName = makeEnum({
  mdl_course: 'mdl_course',
  mdl_course_categories: 'mdl_course_categories',
  mdl_context: 'mdl_context',
  mdl_files: 'mdl_files',
  mdl_customfield_data: 'mdl_customfield_data',
  mdl_customfield_field: 'mdl_customfield_field'
});

const dmmfString = "{\"datamodel\":{\"enums\":[],\"models\":[{\"name\":\"mdl_course\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fullname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shortname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"summary\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"visible\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timecreated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category_name\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"mdl_course_categories\",\"relationName\":\"mdl_courseTomdl_course_categories\",\"relationFromFields\":[\"category\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"custom_data\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"mdl_customfield_data\",\"relationName\":\"mdl_courseTomdl_customfield_data\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contexts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"mdl_context\",\"relationName\":\"mdl_contextTomdl_course\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"mdl_course_categories\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"visible\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"courses\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"mdl_course\",\"relationName\":\"mdl_courseTomdl_course_categories\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"mdl_context\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"instanceid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contextlevel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"course\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"mdl_course\",\"relationName\":\"mdl_contextTomdl_course\",\"relationFromFields\":[\"instanceid\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"files\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"mdl_files\",\"relationName\":\"mdl_contextTomdl_files\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"mdl_files\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contextid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"filename\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"component\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"context\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"mdl_context\",\"relationName\":\"mdl_contextTomdl_files\",\"relationFromFields\":[\"contextid\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"mdl_customfield_data\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"instanceid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fieldid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"field_name\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"mdl_customfield_field\",\"relationName\":\"mdl_customfield_dataTomdl_customfield_field\",\"relationFromFields\":[\"fieldid\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"course\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"mdl_course\",\"relationName\":\"mdl_courseTomdl_customfield_data\",\"relationFromFields\":[\"instanceid\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"mdl_customfield_field\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shortname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"datas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"mdl_customfield_data\",\"relationName\":\"mdl_customfield_dataTomdl_customfield_field\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"mdl_course\",\"plural\":\"mdl_courses\",\"findUnique\":\"findUniquemdl_course\",\"findUniqueOrThrow\":\"findUniquemdl_courseOrThrow\",\"findFirst\":\"findFirstmdl_course\",\"findFirstOrThrow\":\"findFirstmdl_courseOrThrow\",\"findMany\":\"findManymdl_course\",\"create\":\"createOnemdl_course\",\"createMany\":\"createManymdl_course\",\"delete\":\"deleteOnemdl_course\",\"update\":\"updateOnemdl_course\",\"deleteMany\":\"deleteManymdl_course\",\"updateMany\":\"updateManymdl_course\",\"upsert\":\"upsertOnemdl_course\",\"aggregate\":\"aggregatemdl_course\",\"groupBy\":\"groupBymdl_course\"},{\"model\":\"mdl_course_categories\",\"plural\":\"mdl_course_categories\",\"findUnique\":\"findUniquemdl_course_categories\",\"findUniqueOrThrow\":\"findUniquemdl_course_categoriesOrThrow\",\"findFirst\":\"findFirstmdl_course_categories\",\"findFirstOrThrow\":\"findFirstmdl_course_categoriesOrThrow\",\"findMany\":\"findManymdl_course_categories\",\"create\":\"createOnemdl_course_categories\",\"createMany\":\"createManymdl_course_categories\",\"delete\":\"deleteOnemdl_course_categories\",\"update\":\"updateOnemdl_course_categories\",\"deleteMany\":\"deleteManymdl_course_categories\",\"updateMany\":\"updateManymdl_course_categories\",\"upsert\":\"upsertOnemdl_course_categories\",\"aggregate\":\"aggregatemdl_course_categories\",\"groupBy\":\"groupBymdl_course_categories\"},{\"model\":\"mdl_context\",\"plural\":\"mdl_contexts\",\"findUnique\":\"findUniquemdl_context\",\"findUniqueOrThrow\":\"findUniquemdl_contextOrThrow\",\"findFirst\":\"findFirstmdl_context\",\"findFirstOrThrow\":\"findFirstmdl_contextOrThrow\",\"findMany\":\"findManymdl_context\",\"create\":\"createOnemdl_context\",\"createMany\":\"createManymdl_context\",\"delete\":\"deleteOnemdl_context\",\"update\":\"updateOnemdl_context\",\"deleteMany\":\"deleteManymdl_context\",\"updateMany\":\"updateManymdl_context\",\"upsert\":\"upsertOnemdl_context\",\"aggregate\":\"aggregatemdl_context\",\"groupBy\":\"groupBymdl_context\"},{\"model\":\"mdl_files\",\"plural\":\"mdl_files\",\"findUnique\":\"findUniquemdl_files\",\"findUniqueOrThrow\":\"findUniquemdl_filesOrThrow\",\"findFirst\":\"findFirstmdl_files\",\"findFirstOrThrow\":\"findFirstmdl_filesOrThrow\",\"findMany\":\"findManymdl_files\",\"create\":\"createOnemdl_files\",\"createMany\":\"createManymdl_files\",\"delete\":\"deleteOnemdl_files\",\"update\":\"updateOnemdl_files\",\"deleteMany\":\"deleteManymdl_files\",\"updateMany\":\"updateManymdl_files\",\"upsert\":\"upsertOnemdl_files\",\"aggregate\":\"aggregatemdl_files\",\"groupBy\":\"groupBymdl_files\"},{\"model\":\"mdl_customfield_data\",\"plural\":\"mdl_customfield_data\",\"findUnique\":\"findUniquemdl_customfield_data\",\"findUniqueOrThrow\":\"findUniquemdl_customfield_dataOrThrow\",\"findFirst\":\"findFirstmdl_customfield_data\",\"findFirstOrThrow\":\"findFirstmdl_customfield_dataOrThrow\",\"findMany\":\"findManymdl_customfield_data\",\"create\":\"createOnemdl_customfield_data\",\"createMany\":\"createManymdl_customfield_data\",\"delete\":\"deleteOnemdl_customfield_data\",\"update\":\"updateOnemdl_customfield_data\",\"deleteMany\":\"deleteManymdl_customfield_data\",\"updateMany\":\"updateManymdl_customfield_data\",\"upsert\":\"upsertOnemdl_customfield_data\",\"aggregate\":\"aggregatemdl_customfield_data\",\"groupBy\":\"groupBymdl_customfield_data\"},{\"model\":\"mdl_customfield_field\",\"plural\":\"mdl_customfield_fields\",\"findUnique\":\"findUniquemdl_customfield_field\",\"findUniqueOrThrow\":\"findUniquemdl_customfield_fieldOrThrow\",\"findFirst\":\"findFirstmdl_customfield_field\",\"findFirstOrThrow\":\"findFirstmdl_customfield_fieldOrThrow\",\"findMany\":\"findManymdl_customfield_field\",\"create\":\"createOnemdl_customfield_field\",\"createMany\":\"createManymdl_customfield_field\",\"delete\":\"deleteOnemdl_customfield_field\",\"update\":\"updateOnemdl_customfield_field\",\"deleteMany\":\"deleteManymdl_customfield_field\",\"updateMany\":\"updateManymdl_customfield_field\",\"upsert\":\"upsertOnemdl_customfield_field\",\"aggregate\":\"aggregatemdl_customfield_field\",\"groupBy\":\"groupBymdl_customfield_field\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/jorge/Documentos/GitHub/nest-moodle/prisma/generated/moodleClient",
      "fromEnvVar": null
    },
    "config": {
      "log": "(array)",
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "4.7.1",
  "engineVersion": "272861e07ab64f234d3ffc4094e32bd61775599c",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "dataProxy": false
}
config.document = dmmf
config.dirname = dirname




const { warnEnvConflicts } = require('./runtime/index')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

path.join(__dirname, "libquery_engine-debian-openssl-3.0.x.so.node");
path.join(process.cwd(), "prisma/generated/moodleClient/libquery_engine-debian-openssl-3.0.x.so.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/moodleClient/schema.prisma")

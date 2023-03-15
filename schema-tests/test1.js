const Ajv = require("ajv")
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}

const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    age: {
      type: 'number',
    },
    pets: {
      type: 'array',
      items: [
        {
          type: "string"
        },
        {
          type: 'number'
        }
      ]
    },
    isWorker: {
      type: 'boolean'
    }
  },
  required: ['name', 'age']
}




const validate = ajv.compile(schema)
const valid = validate(
  {
    name: 'jjjj@xxx.com',
    age: 18,
    pets: ['h哈哈', 34],
    isWorker: true
  }
)

if (!valid) {
  console.log(validate.errors)
}
function cov_24udkhfz80() {
  var path = "C:\\Users\\karim\\Desktop\\Cypress-EMP\\cypress-apm\\src\\graphql\\mutations.js";
  var hash = "16fef4214d8d2278b1ad69829cf1defe747967f5";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\karim\\Desktop\\Cypress-EMP\\cypress-apm\\src\\graphql\\mutations.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 40
        },
        end: {
          line: 17,
          column: 1
        }
      },
      "1": {
        start: {
          line: 18,
          column: 40
        },
        end: {
          line: 31,
          column: 1
        }
      },
      "2": {
        start: {
          line: 32,
          column: 40
        },
        end: {
          line: 45,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "16fef4214d8d2278b1ad69829cf1defe747967f5"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_24udkhfz80 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_24udkhfz80();

/* eslint-disable */
// this is an auto generated file. This will be overwritten
export const createTodo = (
/* GraphQL */
cov_24udkhfz80().s[0]++, `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`);
export const updateTodo = (
/* GraphQL */
cov_24udkhfz80().s[1]++, `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`);
export const deleteTodo = (
/* GraphQL */
cov_24udkhfz80().s[2]++, `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11dGF0aW9ucy5qcyJdLCJuYW1lcyI6WyJjcmVhdGVUb2RvIiwidXBkYXRlVG9kbyIsImRlbGV0ZVRvZG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7Ozs7QUFmWjtBQUNBO0FBRUEsT0FBTyxNQUFNQSxVQUFVO0FBQUc7QUFBSCx5QkFBa0I7Ozs7Ozs7Ozs7Ozs7Q0FBbEIsQ0FBaEI7QUFjUCxPQUFPLE1BQU1DLFVBQVU7QUFBRztBQUFILHlCQUFrQjs7Ozs7Ozs7Ozs7OztDQUFsQixDQUFoQjtBQWNQLE9BQU8sTUFBTUMsVUFBVTtBQUFHO0FBQUgseUJBQWtCOzs7Ozs7Ozs7Ozs7O0NBQWxCLENBQWhCIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIHRoaXMgaXMgYW4gYXV0byBnZW5lcmF0ZWQgZmlsZS4gVGhpcyB3aWxsIGJlIG92ZXJ3cml0dGVuXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUb2RvID0gLyogR3JhcGhRTCAqLyBgXG4gIG11dGF0aW9uIENyZWF0ZVRvZG8oXG4gICAgJGlucHV0OiBDcmVhdGVUb2RvSW5wdXQhXG4gICAgJGNvbmRpdGlvbjogTW9kZWxUb2RvQ29uZGl0aW9uSW5wdXRcbiAgKSB7XG4gICAgY3JlYXRlVG9kbyhpbnB1dDogJGlucHV0LCBjb25kaXRpb246ICRjb25kaXRpb24pIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgICBkZXNjcmlwdGlvblxuICAgICAgY3JlYXRlZEF0XG4gICAgICB1cGRhdGVkQXRcbiAgICB9XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgdXBkYXRlVG9kbyA9IC8qIEdyYXBoUUwgKi8gYFxuICBtdXRhdGlvbiBVcGRhdGVUb2RvKFxuICAgICRpbnB1dDogVXBkYXRlVG9kb0lucHV0IVxuICAgICRjb25kaXRpb246IE1vZGVsVG9kb0NvbmRpdGlvbklucHV0XG4gICkge1xuICAgIHVwZGF0ZVRvZG8oaW5wdXQ6ICRpbnB1dCwgY29uZGl0aW9uOiAkY29uZGl0aW9uKSB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgZGVzY3JpcHRpb25cbiAgICAgIGNyZWF0ZWRBdFxuICAgICAgdXBkYXRlZEF0XG4gICAgfVxuICB9XG5gO1xuZXhwb3J0IGNvbnN0IGRlbGV0ZVRvZG8gPSAvKiBHcmFwaFFMICovIGBcbiAgbXV0YXRpb24gRGVsZXRlVG9kbyhcbiAgICAkaW5wdXQ6IERlbGV0ZVRvZG9JbnB1dCFcbiAgICAkY29uZGl0aW9uOiBNb2RlbFRvZG9Db25kaXRpb25JbnB1dFxuICApIHtcbiAgICBkZWxldGVUb2RvKGlucHV0OiAkaW5wdXQsIGNvbmRpdGlvbjogJGNvbmRpdGlvbikge1xuICAgICAgaWRcbiAgICAgIG5hbWVcbiAgICAgIGRlc2NyaXB0aW9uXG4gICAgICBjcmVhdGVkQXRcbiAgICAgIHVwZGF0ZWRBdFxuICAgIH1cbiAgfVxuYDtcbiJdfQ==
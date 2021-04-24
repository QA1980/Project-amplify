function cov_2p93wx36fu() {
  var path = "C:\\Users\\karim\\Desktop\\Cypress-EMP\\cypress-apm\\src\\graphql\\queries.js";
  var hash = "8a16e58ef1b40d013cbac226d71b62db4106b1fb";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\karim\\Desktop\\Cypress-EMP\\cypress-apm\\src\\graphql\\queries.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 37
        },
        end: {
          line: 14,
          column: 1
        }
      },
      "1": {
        start: {
          line: 15,
          column: 39
        },
        end: {
          line: 32,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8a16e58ef1b40d013cbac226d71b62db4106b1fb"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2p93wx36fu = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2p93wx36fu();

/* eslint-disable */
// this is an auto generated file. This will be overwritten
export const getTodo = (
/* GraphQL */
cov_2p93wx36fu().s[0]++, `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`);
export const listTodos = (
/* GraphQL */
cov_2p93wx36fu().s[1]++, `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXJpZXMuanMiXSwibmFtZXMiOlsiZ2V0VG9kbyIsImxpc3RUb2RvcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7Ozs7QUFmWjtBQUNBO0FBRUEsT0FBTyxNQUFNQSxPQUFPO0FBQUc7QUFBSCx5QkFBa0I7Ozs7Ozs7Ozs7Q0FBbEIsQ0FBYjtBQVdQLE9BQU8sTUFBTUMsU0FBUztBQUFHO0FBQUgseUJBQWtCOzs7Ozs7Ozs7Ozs7Ozs7OztDQUFsQixDQUFmIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIHRoaXMgaXMgYW4gYXV0byBnZW5lcmF0ZWQgZmlsZS4gVGhpcyB3aWxsIGJlIG92ZXJ3cml0dGVuXG5cbmV4cG9ydCBjb25zdCBnZXRUb2RvID0gLyogR3JhcGhRTCAqLyBgXG4gIHF1ZXJ5IEdldFRvZG8oJGlkOiBJRCEpIHtcbiAgICBnZXRUb2RvKGlkOiAkaWQpIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgICBkZXNjcmlwdGlvblxuICAgICAgY3JlYXRlZEF0XG4gICAgICB1cGRhdGVkQXRcbiAgICB9XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgbGlzdFRvZG9zID0gLyogR3JhcGhRTCAqLyBgXG4gIHF1ZXJ5IExpc3RUb2RvcyhcbiAgICAkZmlsdGVyOiBNb2RlbFRvZG9GaWx0ZXJJbnB1dFxuICAgICRsaW1pdDogSW50XG4gICAgJG5leHRUb2tlbjogU3RyaW5nXG4gICkge1xuICAgIGxpc3RUb2RvcyhmaWx0ZXI6ICRmaWx0ZXIsIGxpbWl0OiAkbGltaXQsIG5leHRUb2tlbjogJG5leHRUb2tlbikge1xuICAgICAgaXRlbXMge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgIGNyZWF0ZWRBdFxuICAgICAgICB1cGRhdGVkQXRcbiAgICAgIH1cbiAgICAgIG5leHRUb2tlblxuICAgIH1cbiAgfVxuYDtcbiJdfQ==
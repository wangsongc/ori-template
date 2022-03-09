import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/createUser',
    method: 'post',
    response: ({ body, query }) => {
      console.log('body>>>>>>>>', body)
      console.log('query>>>>>>>>', query)
      return {
        code: 0,
        message: 'ok',
        data: null,
      }
    },
  },
  {
    url: '/api/getRoleById',
    method: 'get',
    response: ({ query }) => {
      console.log('id>>>>>>>>', query.id)
      return {
        code: 0,
        message: 'ok',
        data: {
          roleName: 'admin',
          roleValue: 'admin',
        },
      }
    },
  },
] as MockMethod[]
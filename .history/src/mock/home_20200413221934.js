import Mock from 'mockjs'
export default {
  getHomeData: () => {
    return {
      code: 20000,
      data() {
        ;[
          {
            name: 'SpringBoot',
            value: Mock.Random.float(1000, 10000, 0, 2)
          }
        ]
      }
    }
  }
}

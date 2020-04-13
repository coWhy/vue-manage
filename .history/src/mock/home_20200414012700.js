import Mock from 'mockjs'
export default {
  getStatisticalData: () => {
    return {
      code: 20000,
      data: [
        {
          name: 'SpringBoot',
          value: Mock.Random.float(1000, 10000, 0, 2)
        },
        {
          name: 'SpringBoot',
          value: Mock.Random.float(1000, 10000, 0, 2)
        },
        {
          name: 'React',
          value: Mock.Random.float(1000, 10000, 0, 2)
        },
        {
          name: 'Vue',
          value: Mock.Random.float(1000, 10000, 0, 2)
        },
        {
          name: '微信小程序',
          value: Mock.Random.float(1000, 10000, 0, 2)
        },
        {
          name: 'Es6',
          value: Mock.Random.float(1000, 10000, 0, 2)
        },
        {
          name: 'Java',
          value: Mock.Random.float(1000, 10000, 0, 2)
        }
      ]
    }
  }
}

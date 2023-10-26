import Redis, { RedisOptions } from 'ioredis';

class RedisSingleton {
  private static instance: Redis | null = null;

  private constructor() {}

  public static getInstance(config: RedisOptions): Redis {
    if (!RedisSingleton.instance) {
      RedisSingleton.instance = new Redis(config);
      console.log("Redis Service initialized 🔄")
    }
    return RedisSingleton.instance;
  }
}

export { RedisSingleton};

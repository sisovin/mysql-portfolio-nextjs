import Redis from 'ioredis';

class RedisClient {
  constructor() {
    this.client = new Redis({
      host: process.env.REDIS_HOST,
      port: parseInt(process.env.REDIS_PORT, 10),
      password: process.env.REDIS_PASSWORD,
    });
  }

  async get(key) {
    return await this.client.get(key);
  }

  async set(key, value, expiry) {
    await this.client.set(key, value, 'EX', expiry);
  }

  async del(key) {
    await this.client.del(key);
  }
}

const redisClient = new RedisClient();

export default redisClient;

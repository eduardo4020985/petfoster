  import mysql, { Pool, PoolConnection } from 'mysql2/promise';

  class MySQLService {
    private static instance: MySQLService | null = null;
    private pool: Pool;

    private constructor(
      private host: string,
      private port: number,
      private user: string,
      private password: string,
      private database: string
    ) {
      this.pool = mysql.createPool({
        host,
        port,
        user,
        password,
        database
      });
    }

    public static initialize(host: string, port: number, user: string, password: string, database: string): void {
      if (!MySQLService.instance) {
        MySQLService.instance = new MySQLService(host, port, user, password, database);
        console.log('MySQLService initialized 🐬');
      }
    }

    public static getInstance(): MySQLService {
      if (!MySQLService.instance) {
        throw new Error('MySQLService has not been initialized. Call initialize() first.');
      }
      return MySQLService.instance;
    }

    public async getConnection(): Promise<PoolConnection> {
      try {
        const connection = await this.pool.getConnection();
        return connection;
      } catch (error) {
        console.error('Error getting MySQL connection:', error);
        throw error;
      }
    }
  }

  export { MySQLService };

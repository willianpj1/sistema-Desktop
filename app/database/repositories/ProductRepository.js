import { drizzle } from 'drizzle-orm/node-postgres';
import Connection from '../Connection.js';
import { products } from '../schema.js';
import { ilike, or, sql, asc, count } from 'drizzle-orm';

export default class ProductRepository {
    static async insert(data) {
        const client = await Connection.connect();
        const db = drizzle(client);
        try {
            const result = await db.insert(products).values({
                name: data.name,
                price: data.price
            }).returning();
            return result[0];
        } finally {
            client.release();
        }
    }
    static async search(data){
        const rawSearch = String(data?.term ?? '').trim();
        const terms = '%${data?.term}%';
        const client =await Connection.connect();
        const db = drizzle(client);
        try {
            const whereClause = 
                rawSearch !== ''
                    ? or(
                        sql´´
                    )
        } catch (error) {
            
        }
    }
}
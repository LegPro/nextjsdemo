import  clientPromise  from './mongodb';

export async function insertUser(user: { name: string; email: string }) {
  const client = await clientPromise;
  const db = client.db("main");

  await db.collection("user").insertOne(user);
}

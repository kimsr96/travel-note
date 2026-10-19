import {cookies} from "next/headers";import {getDb} from "../db";import {sessions} from "../db/schema";import {eq} from "drizzle-orm";import {env} from "cloudflare:workers";
export const origin="https://travel-note-surfer.contact241823.chatgpt.site";
export function config(){const e=env as unknown as Record<string,string|undefined>;return {id:e.GOOGLE_CLIENT_ID,secret:e.GOOGLE_CLIENT_SECRET}}
export async function hash(s:string){return Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",new TextEncoder().encode(s)))).map(x=>x.toString(16).padStart(2,"0")).join("")}
export function random(){return crypto.randomUUID()+crypto.randomUUID()}
export async function googleUser(){const token=(await cookies()).get("__Host-travel-session")?.value;if(!token)return null;const row=(await getDb().select().from(sessions).where(eq(sessions.token,await hash(token))).limit(1))[0];return row&&row.expires>Date.now()?{userId:row.userId,fullName:row.name}:null}
export function sameOrigin(req:Request){return req.headers.get("origin")===origin}
export const cookieFlags="; HttpOnly; Secure; SameSite=Lax; Path=/";

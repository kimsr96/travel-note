import type { Metadata } from "next"; import "./globals.css";
export const metadata:Metadata={title:"여행의 조각 | 함께 나누는 여행",description:"나만의 여행을 기록하고, 다음 여행의 영감을 발견하세요."};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="ko"><body>{children}</body></html>}
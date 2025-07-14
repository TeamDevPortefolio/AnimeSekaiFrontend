import { HomeSkeleton } from "./ui/Skeleton"
function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

export default async function Loading() {

 
    return <HomeSkeleton/>
  }

const shimmer =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function HeroSkeleton() {

    return (
        <div className={`${shimmer}`}>

            <div className=" flex  content-between w-full h-[500px] mb-12">
                <div className="w-1/2 ">
                    <div className="h-9  w-80 bg-slate-800 rounded-md mb-5 ">

                    </div>
                    <div className=" h-24 w-full bg-slate-800 rounded-md mb-5 ">

                    </div>
                    <div className="flex mb-5">
                        <div className="h-12 w-[calc(33%-20px)]  bg-slate-800 rounded-2xl mr-5"></div>
                        <div className="h-12 w-[calc(33%-20px)]  bg-slate-800 rounded-2xl mr-5"></div>
                        <div className="h-12 w-[calc(33%-20px)]  bg-slate-800 rounded-2xl mr-5"></div>


                    </div>
                    <div className="flex mb-5">
                        <div className="h-8 w-8 bg-slate-800"></div>
                        <div className="h-8 w-8 bg-slate-800 ml-2"></div>
                        <div className="h-8 w-8 bg-slate-800  ml-2"></div>
                        <div className="h-8 w-8 bg-slate-800 ml-2"></div>
                        <div className="h-8 w-8 bg-slate-800 ml-2"></div>
                    </div>
                    <div className=" h-20  w-full bg-slate-800 rounded-md mb-5 ">

                    </div>
                    <div className="flex">
                        <div className="bg-slate-800 rounded-2xl w-36  h-14 mr-3"></div>
                        <div className="bg-slate-800 rounded-2xl w-36  h-14 mr-3"></div>

                    </div>
                </div>

                <div className="w-1/2 p-3">

                    <div className="w-full h-full bg-slate-800">

                    </div>


                </div>





            </div>


        </div>
    )
}

export function FilterSkeleton() {

    return (
        <div className={`${shimmer} bg-slate-700 rounded-md pt-2 mb-10`}>
            <div className="h-9 w-28 bg-gray-800 mb-5 ml-4 "></div>
            <div className="flex flex-wrap justify-between mb-16 p-5">

                <div className="w-[calc(50%-8px)] h-10 bg-slate-800 rounded-md">


                </div>
                <div className="w-[calc(50%-8px)] h-10 bg-slate-800 rounded-md">


                </div>
            </div>
            <div className="w-full h-14  bg-slate-800 rounded-b-md">


            </div>




        </div>)




}

export default function RecentSkeleton() {
    return (
        <div className={`${shimmer} w-full bg-slate-700 px-6 py-6 rounded-md `}>
            <div className="flex justify-between mb-4">
                <div className="h-9 w-1/3 bg-slate-800">

                </div>
                <div className=" rounded-md h-7  w-6 bg-slate-800">

                </div>

            </div>
            {/* card recent */}
            <div className=" flex justify-between align-middle ">
                <div className="h-12 w-12 bg-slate-800">

                </div>
                {/* text content */}
                <div className="flex flex-col mb-4">
                    <div className="bg-slate-800 w-[200px] h-4 mb-2">

                    </div>
                    <div className="bg-slate-800 w-[200px] h-4">

                    </div>
                </div>

            </div>
            <div className=" flex justify-between align-middle ">
                <div className="h-12 w-12 bg-slate-800">

                </div>
                {/* text content */}
                <div className="flex flex-col">
                    <div className="bg-slate-800 w-[200px] h-4 mb-2">

                    </div>
                    <div className="bg-slate-800 w-[200px] h-4">

                    </div>
                </div>

            </div>


        </div>
    )
}
export function ThumbnailSkeleton() {
    return (
        <div className="mb-12">
            <div className="w-3/5 h-8 m-auto bg-slate-800 mb-3"></div>
            <div className="w-4/5 h-6 m-auto bg-slate-800 mb-3"></div>
            <div className="flex justify-start">
                <div className="w-[200px] h-[336px] bg-slate-800 ml-5 rounded">

                </div>
                <div className="w-[200px] h-[336px] bg-slate-800 ml-5 rounded">

                </div>
                <div className="w-[200px] h-[336px] bg-slate-800 ml-5 rounded">

                </div>
            </div>

        </div>)
}

export function HomeSkeleton() {

    return (
        <div className={`relative overflow-hidden rounded-xl bg-[#090909] p-2 shadow-sm px-12 flex`}>

            <div className="w-[calc(100%-355px)]">
                <HeroSkeleton />
                <ThumbnailSkeleton/>
                <ThumbnailSkeleton/>
            </div>
            <div className="w-[330px]">
                <FilterSkeleton />
                <RecentSkeleton />
            </div>

        </div>
    )
}

import Image from "next/image";
import Link from "next/link";

const CategoryList = () => {
    return ( 
    <div className="px-4 overflow-x-scroll scrollbar-hide">
        <div className="flex gap-4 md:gap-8">
            <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                <div className="relative bg-slate-100 w-full h-96">
                    <Image src='https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/963bd9d0-1196-46e8-a6ac-f52824e3bb42/NIKE+AIR+MAX+IMPACT+4.png' alt="" fill sizes="20vw" className="object-cover"/>
                </div>
                <h1 className="mt-8 font-light text-cl tracking-wide">Category</h1>
            </Link>
            <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                <div className="relative bg-slate-100 w-full h-96">
                    <Image src='https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/963bd9d0-1196-46e8-a6ac-f52824e3bb42/NIKE+AIR+MAX+IMPACT+4.png' alt="" fill sizes="20vw" className="object-cover"/>
                </div>
                <h1 className="mt-8 font-light text-cl tracking-wide">Category</h1>
            </Link>
            <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                <div className="relative bg-slate-100 w-full h-96">
                    <Image src='https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/963bd9d0-1196-46e8-a6ac-f52824e3bb42/NIKE+AIR+MAX+IMPACT+4.png' alt="" fill sizes="20vw" className="object-cover"/>
                </div>
                <h1 className="mt-8 font-light text-cl tracking-wide">Category</h1>
            </Link>
            <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                <div className="relative bg-slate-100 w-full h-96">
                    <Image src='https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/963bd9d0-1196-46e8-a6ac-f52824e3bb42/NIKE+AIR+MAX+IMPACT+4.png' alt="" fill sizes="20vw" className="object-cover"/>
                </div>
                <h1 className="mt-8 font-light text-cl tracking-wide">Category</h1>
            </Link>
            <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                <div className="relative bg-slate-100 w-full h-96">
                    <Image src='https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/963bd9d0-1196-46e8-a6ac-f52824e3bb42/NIKE+AIR+MAX+IMPACT+4.png' alt="" fill sizes="20vw" className="object-cover"/>
                </div>
                <h1 className="mt-8 font-light text-cl tracking-wide">Category</h1>
            </Link>
            <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                <div className="relative bg-slate-100 w-full h-96">
                    <Image src='https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/963bd9d0-1196-46e8-a6ac-f52824e3bb42/NIKE+AIR+MAX+IMPACT+4.png' alt="" fill sizes="20vw" className="object-cover"/>
                </div>
                <h1 className="mt-8 font-light text-cl tracking-wide">Category</h1>
            </Link> <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                <div className="relative bg-slate-100 w-full h-96">
                    <Image src='https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/963bd9d0-1196-46e8-a6ac-f52824e3bb42/NIKE+AIR+MAX+IMPACT+4.png' alt="" fill sizes="20vw" className="object-cover"/>
                </div>
                <h1 className="mt-8 font-light text-cl tracking-wide">Category</h1>
            </Link>
        </div>
    </div> );
}
 
export default CategoryList;
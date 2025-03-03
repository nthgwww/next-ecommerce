const Filter = () => {
    return ( 
    <div className="mt-12 flex justify-between">
        <div className="flex gap-6">
            <select name="type" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]" id="">
                <option>Type</option>
                <option value='physical'>Physical</option>
                <option value='digital'>Digital</option>
            </select>
            <input type="text" name="min" placeholder="min price" className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"></input>
            <input type="text" name="max" placeholder="max price" className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"></input>
            <select name="size" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]" id="">
                <option>Size</option>
                <option value=''>Size</option>
            </select>
            
            <select name="color" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]" id="">
                <option>Color</option>
                <option value=''>Color</option>
            </select>
            <select name="option" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]" id="">
                <option>Category</option>
                <option value=''>New Arrival</option>
                <option value=''>Popular</option>
            </select>
            <select name="all" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]" id="">
                <option>All Filter</option>
                <option value=''>New Arrival</option>
                <option value=''>Popular</option>
            </select>
        

        </div>
        <div className="" >
            <select name="" id="" className="py-2 px-4 text-xs rounded-2xl font-medium ring-1 ring-gray-400">
                <option>Sort By</option>
                <option value="">Price (low to high)</option>
                <option value="">Price (high to low)</option>
                <option value="">Newest</option>
                <option value="">Oldest</option>
            </select>
        </div>
    </div> );
}
 
export default Filter;
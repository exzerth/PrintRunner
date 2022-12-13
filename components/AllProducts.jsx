import Link from "next/link"

const AllProducts = () => {
  return (
    <>
    <div className="products container xl:mx-auto px-[15px] pb-[15px] md:px-[24px]">
        <div className="title text-[24px] lg:text-[32px] mt-[20px] mb-[10px] text-[#0f4c8d] font-bold">Product List</div>
        <div className="grid grid-cols-2 gap-9 lg:grid-cols-4">
            <div className="gridcontent">
                <div className="contenttitle font-bold text-[16px] lg:text-[18px] my-[10px] text-[#0f4c8d]">Apparels</div>
                <ul className="text-[14px] mb-[14px] font-normal text-primary">
                    <li><Link href="#">Hats</Link></li>
                    <li><Link href="#">Jackets</Link></li>
                    <li><Link href="#">Polo Shirts</Link></li>
                    <li><Link href="#">Sweatshirt</Link></li>
                    <li><Link href="#">T Shirts</Link></li>
                    <li><Link href="#">Work Shirts</Link></li>
                </ul>
            </div>
            <div className="gridcontent">
                <div className="contenttitle font-bold text-[16px] lg:text-[18px] my-[10px] text-[#0f4c8d]">Business Marketing</div>
                <ul className="text-[14px] mb-[14px] font-normal text-primary">
                    <li><Link href="#">Booklets</Link></li>
                    <li><Link href="#">Bookmarks</Link></li>
                    <li><Link href="#">Brochures</Link></li>
                    <li><Link href="#">Business Flyers</Link></li>
                    <li><Link href="#">Catalogs</Link></li>
                    <li><Link href="#">Circle Business Cards</Link></li>
                    <li><Link href="#">Door Hangers</Link></li>
                    <li><Link href="#">Foil Bookmarks</Link></li>
                    <li><Link href="#">Foil Business Cards</Link></li>
                    <li><Link href="#">Gift Certificates</Link></li>
                    <li><Link href="#">Magazines</Link></li>
                    <li><Link href="#">Magnets</Link></li>
                    <li><Link href="#">Metallic Bookmarks</Link></li>
                    <li><Link href="#">Metallic Business Cards</Link></li>
                    <li><Link href="#">Metallic Postcards</Link></li>
                    <li><Link href="#">Metallic Rack Cards</Link></li>
                    <li><Link href="#">Metallic Sales/Data Sheets</Link></li>
                    <li><Link href="#">Multi-Page</Link></li>
                    <li><Link href="#">Newsletters</Link></li>
                    <li><Link href="#">Painted Edge Business Cards</Link></li>
                    <li><Link href="#">Postcards</Link></li>
                    <li><Link href="#">Presentation Folders</Link></li>
                    <li><Link href="#">Rack Cards</Link></li>
                    <li><Link href="#">Raised Spot UV Business Cards</Link></li>
                    <li><Link href="#">Raised Spot UV Postcards</Link></li>
                    <li><Link href="#">Rip Cards</Link></li>
                    <li><Link href="#">Sales/Data Sheets</Link></li>
                    <li><Link href="#">Silk Business Cards</Link></li>
                    <li><Link href="#">Silk Postcards</Link></li>
                    <li><Link href="#">Silk Presentation Folders</Link></li>
                    <li><Link href="#">Spot UV Business Cards</Link></li>
                    <li><Link href="#">Spot UV Postcards</Link></li>
                    <li><Link href="#">Spot UV Rack Cards</Link></li>
                    <li><Link href="#">Velvel Business Cards</Link></li>
                    <li><Link href="#">Velvel Postcards</Link></li>
                </ul>
            </div>
            <div className="gridcontent">
                <div className="contenttitle font-bold text-[16px] lg:text-[18px] my-[10px] text-[#0f4c8d]">Event Marketing</div>
                <ul className="text-[14px] mb-[14px] font-normal text-primary">
                    <li><Link href="#">Backdrops</Link></li>
                    <li><Link href="#">Bulk Posters</Link></li>
                    <li><Link href="#">Club Card Flyers</Link></li>
                    <li><Link href="#">Die-Cut Flyers</Link></li>
                    <li><Link href="#">Event Tickets</Link></li>
                    <li><Link href="#">Foil Invitations</Link></li>
                    <li><Link href="#">Large Format Posters</Link></li>
                    <li><Link href="#">Metallic Flyers</Link></li>
                    <li><Link href="#">Promotional Stickers</Link></li>
                    <li><Link href="#">Raffle Tickets</Link></li>
                    <li><Link href="#">Silk Flyers</Link></li>
                    <li><Link href="#">Window Clings</Link></li>
                </ul>
            </div>
            <div className="gridcontent">
                <div className="contenttitle font-bold text-[16px] lg:text-[18px] my-[10px] text-[#0f4c8d]">Business Stationery & Forms</div>
                <ul className="text-[14px] mb-[14px] font-normal text-primary">
                    <li><Link href="#">1-Colour Envelopes</Link></li>
                    <li><Link href="#">Address/Return Address Labels</Link></li>
                    <li><Link href="#">Appointement Cards</Link></li>
                    <li><Link href="#">Band Stickers</Link></li>
                    <li><Link href="#">Bulk Stickers</Link></li>
                    <li><Link href="#">Business Stickers</Link></li>
                    <li><Link href="#">Business Card Magnets</Link></li>
                    <li><Link href="#">Cut to Size Stickers</Link></li>
                    <li><Link href="#">Cut to Size Labels Stickers</Link></li>
                    <li><Link href="#">Clear Stickers</Link></li>
                    <li><Link href="#">Carbonless Forms</Link></li>
                    <li><Link href="#">Die-Cut Stickers</Link></li>
                    <li><Link href="#">Die-Cut Business Cards</Link></li>
                    <li><Link href="#">Discount Labels</Link></li>
                    <li><Link href="#">Folded Business Cards</Link></li>
                    <li><Link href="#">Full Color Copies</Link></li>
                    <li><Link href="#">Full Colour Envelopes</Link></li>
                    <li><Link href="#">Logo Stickers</Link></li>
                    <li><Link href="#">Letterheads</Link></li>
                    <li><Link href="#">Mini Business Cards</Link></li>
                    <li><Link href="#">Name Labels</Link></li>
                    <li><Link href="#">NCR Forms</Link></li>
                    <li><Link href="#">Notepads</Link></li>
                    <li><Link href="#">Oval Stickers</Link></li>
                    <li><Link href="#">Plastic Business Cards</Link></li>
                    <li><Link href="#">Promotional Stickers</Link></li>
                    <li><Link href="#">Roll Address / Return Address Labels</Link></li>
                    <li><Link href="#">Roll Shipping & Mailing Labels</Link></li>
                    <li><Link href="#">Roll Name Labels</Link></li>
                    <li><Link href="#">Roll Labels</Link></li>
                    <li><Link href="#">Roll Stickers</Link></li>
                    <li><Link href="#">Rolodex Cards</Link></li>
                    <li><Link href="#">Round Stickers</Link></li>
                    <li><Link href="#">Rounded Corner</Link></li>
                    <li><Link href="#">Business Cards</Link></li>
                    <li><Link href="#">Rubber Stamps</Link></li>
                    <li><Link href="#">Square Business Cards</Link></li>
                    <li><Link href="#">Shipping & Mailing Labels</Link></li>
                    <li><Link href="#">Standard Business Cards</Link></li>
                </ul>
            </div>
            <div className="gridcontent">
                <div className="contenttitle font-bold text-[16px] lg:text-[18px] my-[10px] text-[#0f4c8d]">Restaurant Marketing</div>
                <ul className="text-[14px] mb-[14px] font-normal text-primary">
                    <li><Link href="#">Dine-In Menus</Link></li>
                    <li><Link href="#">Counter Cards</Link></li>
                    <li><Link href="#">Pocket Menus</Link></li>
                    <li><Link href="#">Table Tents</Link></li>
                    <li><Link href="#">Take Out Menus</Link></li>
                </ul>
            </div>
            <div className="gridcontent">
                <div className="contenttitle font-bold text-[16px] lg:text-[18px] my-[10px] text-[#0f4c8d]">Retail Packaging</div>
                <ul className="text-[14px] mb-[14px] font-normal text-primary">
                    <li><Link href="#">1-Colour Gummed Tape</Link></li>
                    <li><Link href="#">Beer Labels</Link></li>
                    <li><Link href="#">Beverage Labels</Link></li>
                    <li><Link href="#">Bottle Labels</Link></li>
                    <li><Link href="#">Bottle Neck Hang tags</Link></li>
                    <li><Link href="#">Boxes</Link></li>
                    <li><Link href="#">Bubble Mailers</Link></li>
                    <li><Link href="#">Canning Labels</Link></li>
                    <li><Link href="#">Candle Labels</Link></li>
                    <li><Link href="#">Child-Resistant Flat Pouches</Link></li>
                    <li><Link href="#">Child-Resistant Stand-Up Pouches</Link></li>
                    <li><Link href="#">Clear Labels</Link></li>
                    <li><Link href="#">CD/DVD Sleeves Covers</Link></li>
                    <li><Link href="#">Custom Packaging Tape</Link></li>
                    <li><Link href="#">Die Cut handle Plastic Bags</Link></li>
                    <li><Link href="#">Die Cut Hang Tags</Link></li>
                    <li><Link href="#">DVD/BluRay Covers</Link></li>
                    <li><Link href="#">DVD Case Covers</Link></li>
                    <li><Link href="#">Foil Hang Tags</Link></li>
                    <li><Link href="#">Food Labels</Link></li>
                    <li><Link href="#">Full Color Die Cut Handle</Link></li>
                    <li><Link href="#">Plastic Bags</Link></li>
                    <li><Link href="#">Gift Bags</Link></li>
                    <li><Link href="#">Hang Tags</Link></li>
                    <li><Link href="#">Header Cards</Link></li>
                    <li><Link href="#">Health & Beauty Labels</Link></li>
                    <li><Link href="#">Jar Labels</Link></li>
                    <li><Link href="#">Metallic Bottle Neck Hang Tags</Link></li>
                    <li><Link href="#">Metallic Hang Tags</Link></li>
                    <li><Link href="#">Metallic Labels</Link></li>
                    <li><Link href="#">Oval Stickers</Link></li>
                    <li><Link href="#">Oval Labels</Link></li>
                    <li><Link href="#">Packaging Labels</Link></li>
                    <li><Link href="#">Packaging Sleeves</Link></li>
                    <li><Link href="#">Poly Mailers</Link></li>
                    <li><Link href="#">Poly Packing Tapes</Link></li>
                    <li><Link href="#">Product Labels</Link></li>
                    <li><Link href="#">Rigid Mailers</Link></li>
                    <li><Link href="#">Roll Beer Labels</Link></li>
                    <li><Link href="#">Roll Beverage Labels</Link></li>
                    <li><Link href="#">Roll Bottle Labels</Link></li>
                    <li><Link href="#">Roll Candle Labels</Link></li>
                    <li><Link href="#">Roll Canning Labels</Link></li>
                    <li><Link href="#">Roll Health & Beauty Labels</Link></li>
                    <li><Link href="#">Roll Food Labels</Link></li>
                    <li><Link href="#">Roll Jar Labels</Link></li>
                    <li><Link href="#">Roll Packaging Labels</Link></li>
                    <li><Link href="#">Roll Product Labels</Link></li>
                    <li><Link href="#">Roll Soap Labels</Link></li>
                    <li><Link href="#">Roll Wine Labels</Link></li>
                    <li><Link href="#">Roll Waterproof Labels</Link></li>
                    <li><Link href="#">Roll Water Bottle Labels</Link></li>
                    <li><Link href="#">Roll Warning Labels</Link></li>
                    <li><Link href="#">Roll Vinyl Labels</Link></li>
                    <li><Link href="#">Round Labels</Link></li>
                    <li><Link href="#">Sheets Labels</Link></li>
                    <li><Link href="#">Silk Hang Tags</Link></li>
                    <li><Link href="#">Soft Loop Plastic Bags</Link></li>
                    <li><Link href="#">Soap Labels</Link></li>
                    <li><Link href="#">Spot UV Hang Tags</Link></li>
                    <li><Link href="#">Spot UV Header Cards</Link></li>
                    <li><Link href="#">Standard Hang Tags</Link></li>
                    <li><Link href="#">Straight Tuck End Boxes</Link></li>
                    <li><Link href="#">Velvet Hang Tags</Link></li>
                    <li><Link href="#">Vinyl Labels</Link></li>
                    <li><Link href="#">Vinyl Stickers</Link></li>
                    <li><Link href="#">Warning Labels</Link></li>
                    <li><Link href="#">Waterproof Labels</Link></li>
                    <li><Link href="#">Water Bottle Labels</Link></li>
                    <li><Link href="#">Wine Labels</Link></li>
                    <li><Link href="#">Ribbons</Link></li>
                </ul>
            </div>
            <div className="gridcontent">
                <div className="contenttitle font-bold text-[16px] lg:text-[18px] my-[10px] text-[#0f4c8d]">Signs & Banners</div>
                <ul className="text-[14px] mb-[14px] font-normal text-primary">
                    <li><Link href="#">A-Frame Replacement Signs</Link></li>
                    <li><Link href="#">Aluminium Signs</Link></li>
                    <li><Link href="#">Bumper Stickers</Link></li>
                    <li><Link href="#">Car Door Magnets</Link></li>
                    <li><Link href="#">Custom Signs</Link></li>
                    <li><Link href="#">Deluxe Retractable</Link></li>
                    <li><Link href="#">Banners</Link></li>
                    <li><Link href="#">Fabric Banners</Link></li>
                    <li><Link href="#">Feather Flags</Link></li>
                    <li><Link href="#">Floor Graphics</Link></li>
                    <li><Link href="#">Mesh Banners</Link></li>
                    <li><Link href="#">Mounted Posters</Link></li>
                    <li><Link href="#">Parking Signs</Link></li>
                    <li><Link href="#">Plastic Simpo A-Frame Signs</Link></li>
                    <li><Link href="#">Pole Banners</Link></li>
                    <li><Link href="#">Pop-Up Displays</Link></li>
                    <li><Link href="#">Pop-Up Display Replacement</Link></li>
                    <li><Link href="#">Property Signs</Link></li>
                    <li><Link href="#">Real Estate Signs</Link></li>
                    <li><Link href="#">Replacement Feather Flags</Link></li>
                    <li><Link href="#">Replacement Pole Banners</Link></li>
                    <li><Link href="#">Straight Tension Pop-Up Display</Link></li>
                    <li><Link href="#">Tablecloths</Link></li>
                    <li><Link href="#">Tabletop Banners</Link></li>
                    <li><Link href="#">Teardrop Flags</Link></li>
                    <li><Link href="#">Vinyl Banners</Link></li>
                    <li><Link href="#">Wall Decals</Link></li>
                    <li><Link href="#">Window Decals</Link></li>
                    <li><Link href="#">X-Stand Banners</Link></li>
                    <li><Link href="#">Yard Signs</Link></li>
                </ul>
            </div>
            <div className="gridcontent">
                <div className="contenttitle font-bold text-[16px] lg:text-[18px] my-[10px] text-[#0f4c8d]">Stickers</div>
                <ul className="text-[14px] mb-[14px] font-normal text-primary">
                    <li><Link href="#">Band Stickers</Link></li>
                    <li><Link href="#">Bulk Stickers</Link></li>
                    <li><Link href="#">Bumper Stickers</Link></li>
                    <li><Link href="#">Campaign Stickers</Link></li>
                    <li><Link href="#">Clear Stickers</Link></li>
                    <li><Link href="#">Custom Stickers</Link></li>
                    <li><Link href="#">Die Cut Stickers</Link></li>
                    <li><Link href="#">Logo Stickers</Link></li>
                    <li><Link href="#">Metallic Stickers</Link></li>
                    <li><Link href="#">Oval Stickers</Link></li>
                    <li><Link href="#">Roll Stickers</Link></li>
                    <li><Link href="#">Promotional Stickers</Link></li>
                    <li><Link href="#">Round Stickers</Link></li>
                    <li><Link href="#">Sticker Sheets</Link></li>
                    <li><Link href="#">Vinyl Stickers</Link></li>
                    <li><Link href="#">Sticker Maker</Link></li>
                    <li><Link href="#">Wall Stickers</Link></li>
                    <li><Link href="#">Water Bottle Stickers</Link></li>
                </ul>
            </div>
            <div className="gridcontent">
                <div className="contenttitle font-bold text-[16px] lg:text-[18px] my-[10px] text-[#0f4c8d]">Holiday & Occassions</div>
                <ul className="text-[14px] mb-[14px] font-normal text-primary">
                    <li><Link href="#">Calendars</Link></li>
                    <li><Link href="#">Greeting Cards</Link></li>
                    <li><Link href="#">Holiday Cards</Link></li>
                    <li><Link href="#">Invitations</Link></li>
                    <li><Link href="#">Metallic Greeting Cards</Link></li>
                    <li><Link href="#">Metallic Save the Date Cards</Link></li>
                    <li><Link href="#">Save the Date Cards</Link></li>
                    <li><Link href="#">Save the Date Magnets</Link></li>
                    <li><Link href="#">Silk Greeting Cards</Link></li>
                    <li><Link href="#">Silk Invitations</Link></li>
                    <li><Link href="#">Thank You Cards</Link></li>
                </ul>
            </div>
            <div className="gridcontent">
                <div className="contenttitle font-bold text-[16px] lg:text-[18px] my-[10px] text-[#0f4c8d]">Photo Prints</div>
                <ul className="text-[14px] mb-[14px] font-normal text-primary">
                    <li><Link href="#">Rolled Canvas</Link></li>
                    <li><Link href="#">Stretched Canvas</Link></li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default AllProducts
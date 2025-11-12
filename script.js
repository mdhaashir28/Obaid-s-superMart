// ✅ Full product data (from your uploaded file)
const products = {  detergents: [
        {
            id: 1,
            name: "Surf Excel Liquid Detergent",
            price: 245,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9UP66EMCGQ_QLuyG43RQsP3LpMxsTOZwXNg&s",
            description: "Powerful liquid detergent for tough stains - 1L"
        },
        {
            id: 2,
            name: "Ariel Washing Powder",
            price: 180,
            image: "https://m.media-amazon.com/images/I/71f71ITUtKL._UF1000,1000_QL80_.jpg",
            description: "Complete wash detergent powder - 1kg"
        },
        {
            id: 3,
            name: "Vim Dishwash Liquid",
            price: 95,
            image: "https://m.media-amazon.com/images/I/61-4eJ-pn0L.jpg",
            description: "Lemon fresh dishwashing liquid - 500ml"
        },
        {
            id: 4,
            name: "Harpic Toilet Cleaner",
            price: 120,
            image: "https://m.media-amazon.com/images/I/61fQA+kazoL._UF1000,1000_QL80_.jpg",
            description: "Powerful toilet bowl cleaner - 750ml"
        },
         {
            id: 5,
            name: "RIN  Washing Powder",
            price: 180,
            image: "https://m.media-amazon.com/images/I/41ynMRBlm6L.jpg",
            description: "Complete wash detergent powder - 1kg"
        },
         {
            id: 6,
            name: "Surf Excel Washing Powder",
            price: 180,
            image: "https://www.bbassets.com/media/uploads/p/xl/266945-4_8-surf-excel-easy-wash-detergent-powder.jpg",
            description: "Complete wash detergent powder - 1kg"
        },
         {
            id: 7,
            name: "Tide Washing Powder",
            price: 180,
            image: "https://m.media-amazon.com/images/I/61YIfgu3ylL._UF1000,1000_QL80_.jpg",
            description: "Complete wash detergent powder - 1kg"
        },
         {
            id: 8,
            name: "Lizol Floor Cleaner",
            price: 120,
            image: "https://m.media-amazon.com/images/I/511BCOHo7qL._UF1000,1000_QL80_.jpg",
            description: "Powerful floor cleaner - 750ml"
        },
          {
            id: 9,
            name: "Phenol good fragnance",
            price: 120,
            image: "https://5.imimg.com/data5/SELLER/Default/2023/7/325847896/EP/JK/HT/187355166/phenyl-pet-bottle.png",
            description: "Powerful fragnance - 750ml"
        },
    ],
    grains: [
        {
            id: 10,
            name: "Basmati Rice Premium",
            price: 320,
            image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop",
            description: "Long grain aromatic basmati rice - 1kg"
        },
        {
            id: 11,
            name: "Whole Wheat ",
            price: 85,
            image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
            description: "Fresh ground whole wheat - 1kg"
        },
        {
            id: 12,
            name: "Brown Rice Organic",
            price: 280,
            image: "https://media.istockphoto.com/id/173589620/photo/brown-rice.jpg?s=612x612&w=0&k=20&c=yvu1W2c5fj1Aa6lb-NvWQPXXmL__QWJqS2kGlhCfq0I=",
            description: "Organic brown rice for healthy meals - 1kg"
        },
        {
            id: 13,
            name: "Quinoa Seeds",
            price: 450,
            image: "https://organicmandya.com/cdn/shop/files/Quinoa_2_616d90c4-2268-4297-9695-314417e79276.jpg?v=1738222198&width=1000",
            description: "Premium quinoa seeds - 500g"
        },
        {
            id: 14,
            name: "Barley",
            price: 280,
            image: "https://m.media-amazon.com/images/I/51TOmZXKI0S._UF1000,1000_QL80_.jpg",
            description: "Organic Barley rice for healthy meals - 1kg"
        },
        {
            id: 15,
            name: "pearl Millets (bajra)",
            price: 280,
            image: "https://t4.ftcdn.net/jpg/08/94/37/99/240_F_894379947_Y7W053Ckpkpu9SBUq8MH56jPecnqyhzz.jpg",
            description: "Organic millets for healthy meals - 1kg"
        },
        {
            id: 16,
            name: "Finger Millet Organic",
            price: 280,
            image: "https://www.shutterstock.com/image-photo/ragi-nachni-known-finger-millet-260nw-1101265925.jpg",
            description: "Organic Finger Millet for healthy meals - 1kg"
        },
         {
            id: 17,
            name: "Boiled Rice",
            price: 280,
            image: "https://thumbs.dreamstime.com/b/parboiled-rice-38060176.jpg?w=768",
            description: "Organic Boiled rice for healthy meals - 1kg"
        },
         {
            id: 18,
            name: "Steam Rice",
            price: 280,
            image: "https://img500.exportersindia.com/product_images/bc-500/2021/12/8507645/steam-rice-1639032992-6109910.jpeg",
            description: "Organic Steam rice for healthy meals - 1kg"
        },
         {
            id: 19,
            name: "Sorguhm",
            price: 280,
            image: "https://i0.wp.com/www.smartfood.org/wp-content/uploads/2021/01/sorghums.jpg?fit=700%2C525&ssl=1",      
            description: "Organic Sorguhm "
        },
        {
            id: 20,
            name: "Maize",
            price: 280,
            image: "https://t3.ftcdn.net/jpg/13/55/74/44/240_F_1355744431_UhZu245wlTklWqTq4hpJcmJZGzSRzSNR.jpg",
            description: "Organic Maize for healthy life  - 1kg"
        },
        {
            id: 21,
            name: "Oats",
            price: 280,
            image: "https://media.istockphoto.com/id/500356812/photo/oats-and-milk.jpg?s=612x612&w=0&k=20&c=26_3gxNEyJz5HR4l9SUw7IFuklHcr6NI8yX_whKWJQE=",
            description: "Organic Oats for healthy meals - 1kg"
        },
        {
            id: 22,
            name: "BuckWheat",
            price: 280,
            image: "https://m.media-amazon.com/images/I/81JVgD5DkrL._UF1000,1000_QL80_.jpg",
            description: "Organic BuckWheat for healthy meals - 1kg"
        },
       
    ],
    pulses: [
        {
            id: 23,
            name: "Toor Dal (Pigeon Peas)",
            price: 140,
            image: "https://t4.ftcdn.net/jpg/05/71/51/97/360_F_571519774_JXMo39QKcpjT7XVUptRCgHD0yVdzDzZb.jpg",
            description: "Fresh toor dal - 1kg"
        },
        {
            id: 24,
            name: "Moong Dal ",
            price: 160,
            image: "https://media.gettyimages.com/id/1367012446/photo/dried-yellow-chana-or-moong-mung-bean-dal-on-a-wood-bowl.jpg?s=612x612&w=gi&k=20&c=7VpNr5-9NwIh_Uyh54rvYjdE8dxDJIxlbTSsYd6gSCE=",
            description: "Whole  moong dal - 1kg"
        },
        {
            id: 25,
            name: "Chana Dal",
            price: 120,
            image: "https://vibrantliving.in/cdn/shop/files/ChanaDalSplit.jpg?v=1731059251",
            description: "Split chickpeas (chana dal) - 1kg"
        },
        {
            id: 26,
            name: "Masoor Dal Red",
            price: 110,
            image: "https://healthymiller.com/cdn/shop/files/malkamasoor.png?v=1693908186",
            description: "Red lentils masoor dal - 1kg"
        },
        {
            id: 27,
            name: "Orid Dal ",
            price: 110,
            image: "https://5.imimg.com/data5/SELLER/Default/2025/2/487966782/IC/EW/KS/83626591/30-kg-urad-orid-dal-white-bold-500x500.png",
            description: "high quality orid dal - 1kg"
        },
          {
            id: 28,
            name: "Whole Green Gram",
            price: 120,
            image: "https://www.shutterstock.com/image-photo/organic-green-gram-mung-beans-260nw-1056869342.jpg",
            description: "whole green gram(sara moong) - 1kg"
        },
          {
            id: 29,
            name: "Black Gram ",
            price: 120,
            image: "https://www.ritirivaaj.com/cdn/shop/products/sabuturad-1.jpg?v=1610382668",
            description: "Whole Black  Gram - 1kg"
        },
          {
            id: 30,
            name: "Bengal Gram ",
            price: 120,
            image: "https://www.aranyapurefood.com/cdn/shop/files/IMG-20230807-WA0003.jpg?v=1691399694",
            description: "Bengal Gram ( kala chana ) - 1kg"
        },
          {
            id: 31 ,
            name: "ChickPeas",
            price: 120,
            image: "https://www.healthysupplies.co.uk/pics/800x800/organic-chickpeas-bowl-2.webp?tsid=1738040332",
            description: "chickpeas (Kabuli chana ) - 1kg"
        },
         {
            id: 32,
            name: "Green Peas",
            price: 120,
            image: "https://t3.ftcdn.net/jpg/04/58/64/96/240_F_458649671_H7tn88cZzTuvv3KG30S1CKuqJtChW0Pv.jpg",
            description: "high quality Green Peas - 1kg"
        },
         {
            id: 33,
            name: "Kidney Beans",
            price: 120,
            image: "https://media.istockphoto.com/id/541973406/photo/red-bean-on-wooden-bowl-with-spoon.jpg?s=612x612&w=0&k=20&c=bsdH0SA1hfpSfO2FEdUmE9sD0_p-Dq0dEVvvWyS7W1A=",
            description: "Kidney Beans (Rajma) - 1kg"
        },
         {
            id: 34,
            name: "Black Eyed- Peas",
            price: 120,
            image: "https://media.istockphoto.com/id/174997062/photo/cooked-black-eyed-peas.jpg?s=612x612&w=0&k=20&c=hu7pXnwShf0Qg-xuyf0AJqwZ5osZjrK0qMU43oQza_M=",
            description: "Black Eyed Peas(Lobiya)- 1kg"
        },
         {
            id: 35,
            name: "Moth Beans",
            price: 120,
            image: "https://www.shutterstock.com/image-photo/close-top-view-dry-moth-260nw-1222843804.jpg",
            description: "Moth Beans(Moth Dal)- 1kg"
        },
         {
            id: 36,
            name: "Horse Gram",
            price: 120,
            image: "https://aarogyamastu.in/wp-content/uploads/2022/06/red-horse-gram.jpg",
            description: "Horse Gram(Kulthi Dal)- 1kg"
        },
         {
            id: 37,
            name: "Field Beans/Broad Beans",
            price: 120,
            image: "https://c8.alamy.com/comp/2D6K6RE/top-view-of-dried-broad-beans-vicia-faba-soaked-in-water-in-a-pot-before-cooking-2D6K6RE.jpg",
            description: "Field Beans/Broad Beans(Bakla / Sem)- 1kg"
        },
         {
            id: 38,
            name: "Soya Beans",
            price: 120,
            image: "https://www.shutterstock.com/image-photo/dried-soybeans-soy-beans-soya-260nw-2484429913.jpg",
            description: "Soya Beans - 1kg"
        },
         {
            id: 39,
            name: "Lentils(Brown/Green)",
            price: 120,
            image: "https://www.shutterstock.com/shutterstock/photos/84652654/display_1500/stock-photo-green-and-brown-lentils-84652654.jpg",
            description: "Lentils Whole(Brown/Green)- 1kg"
        }
    ],
    nuts: [
        {
            id: 40,
            name: "Almonds Premium",
            price: 410,
            image: "https://media.istockphoto.com/id/92268485/photo/almonds.jpg?s=612x612&w=0&k=20&c=AUtmb7GbHIr3kcw2t6SjnFSvoVDCJUEgJea02UOoyXc=",
            description: "California almonds - 500g"
        },
        {
            id: 41,
            name: "Cashews Whole",
            price: 420,
            image: "https://media.istockphoto.com/id/470795758/photo/bowl-of-halved-cashew-nuts-in-a-wooden-bowl.jpg?s=612x612&w=0&k=20&c=X7fr4wCs0oF0z9rn3XIUXYpn8hJ1wt-1MpNbgAGJnIY=",
            description: "Whole cashew nuts - 500g"
        },
        {
            id: 42,
            name: "Walnuts Premium",
            price: 850,
            image: "https://media.gettyimages.com/id/1312794999/photo/walnuts-in-brown-bowl-on-wooden-table.jpg?s=612x612&w=gi&k=20&c=qDlRu7HagtmDtiVZ5MTIy4y7Fb5_ipYumsYAQkCz0kM=",
            description: "Premium quality walnuts - 500g"
        },
        {
            id: 43,
            name: "Mixed Dry Fruits",
            price: 950,
            image: "https://www.jaindryfruits.com/image/cache/catalog/Berry/md7-800x800-product_popup.jpg",
            description: "Assorted premium dry fruits - 500g"
        },
          {
            id: 44,
            name: "Pistachios",
            price: 950,
            image: "https://www.nutsandfruits.in/wp-content/uploads/2021/08/PISTA-WITH-SHELL.jpg",
            description: "Assorted premium Pista - 500g"
        },
          {
            id: 45,
            name: "GroundNuts",
            price: 95,
            image: "https://www.netmeds.com/images/cms/wysiwyg/blog/2019/10/Groundnut_big_2.jpg",
            description: "Assorted premium GroundNuts - 500g"
        },
          {
            id: 46,
            name: "HazelNuts",
            price: 850,
            image: "https://media.istockphoto.com/id/856703564/photo/hazelnut.jpg?s=612x612&w=0&k=20&c=QyW9AGvelUGwWOf3CcNbRu1nxOBKA2MIb5NUiId2wpk=",
            description: "Assorted premium HazelNuts - 500g"
        },
          {
            id: 47,
            name: "Pine Nuts",
            price: 750,
            image: "https://m.media-amazon.com/images/I/61MjLekQWWL._UF1000,1000_QL80_.jpg",
            description: "Assorted premium Pine Nuts(Chilgoza) - 500g"
        },
          {
            id: 48,
            name: "Brazil Nuts",
            price: 650,
            image: "https://t3.ftcdn.net/jpg/02/89/62/36/360_F_289623630_DTBKnj9P7HIErQIALu0Q3xkRpC7YSo1V.jpg",
            description: "Assorted premium Brazil Nuts - 500g"
        },
          {
            id: 49,
            name: "ChestNuts",
            price: 650,
            image: "https://media.istockphoto.com/id/502886028/photo/roasted-chestnuts.jpg?s=612x612&w=0&k=20&c=R865B7BJNn308EfU31z0jA-8qDDNfBYG9kDHalr2jiU=",
            description: "Assorted premium Singhara (also refers to water chestnut) - 500g"
        },
           {
            id: 50,
            name: "Fox Nuts (Popped)",
            price: 750,
            image: "https://t3.ftcdn.net/jpg/05/00/04/52/360_F_500045261_FfPbsyx4CRm5aUkaLAqb7updn7b0ngud.jpg",
            description: "Assorted premium Fox Nuts Popped(Makhana) - 500g"
        },
           {
            id: 51,
            name: "Macadamia Nuts",
            price: 850,
            image: "https://www.chandigarhorganics.com/wp-content/uploads/2020/07/MACADAMIA-NUTS.jpg",
            description: "Assorted premium Macadamia Nuts    - 500g"
        }
    ],
    spices: [
        {
            id: 52,
            name: "Turmeric Powder",
            price: 60,
            image: "https://www.shutterstock.com/image-photo/turmeric-powder-roots-used-widely-260nw-2564366637.jpg",
            description: "Pure turmeric powder - 200g"
        },
         {
            id: 53,
            name: "Corinder Powder",
            price: 50,
            image: "https://www.shutterstock.com/image-photo/indian-spice-coriander-powder-dhaniya-600nw-2149412181.jpg",
            description: "Pure Corinder powder - 200g"
        },
        {
            id: 54,
            name: "Red Chili Powder",
            price: 65,
            image: "https://t4.ftcdn.net/jpg/06/34/52/77/360_F_634527709_r6A0kdVCXgdZsPukMffjwHKFkuW8Gpkm.jpg",
            description: "Spicy red chili powder - 200g"
        },
        {
            id: 55,
            name: "Garam Masala",
            price: 80,
            image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop",
            description: "Aromatic garam masala blend - 100g"
        },
        {
            id: 56,
            name: "Cumin Seeds",
            price: 95,
            image: "https://www.shutterstock.com/image-photo/cumin-seeds-zeera-bowl-scoop-260nw-2500284265.jpg",
            description: "Whole cumin seeds - 200g"
        },
           {
            id: 57,
            name: "Black Pepper",
            price: 95,
            image: "https://foodcare.in/cdn/shop/files/papper.png?v=1742193637",
            description: "High quality Black Pepper- 200g"
        },
           {
            id: 58,
            name: "Mustard",
            price: 50,
            image: "https://media.istockphoto.com/id/477782987/photo/black-mustard-seeds-isolated-on-white.jpg?s=612x612&w=0&k=20&c=DDlJat0pt-veanlRb0z2V0TxqWAe0Be_8byDPqiVJdg=",
            description: "High quality Mustard - 200g"
        },
           {
            id: 59,
            name: "Fenugreek Seeds",
            price: 95,
            image: "https://thumbs.dreamstime.com/b/fenugreek-seeds-isolated-white-35696357.jpg",
            description: "Fenugreek Seeds- 200g"
        },
           {
            id: 60,
            name: "Cinnamon ",
            price: 95,
            image: "https://www.natureloc.com/image/cache/catalog/products/cinnamon-bark-natureloc-p-1-600x600.jpg",
            description: "High Quality Cinnamon  - 200g"
        },
           {
            id: 61,
            name: "Cardamom",
            price: 95,
            image: "https://www.shutterstock.com/image-photo/close-dried-cardamom-isolated-on-260nw-1027583569.jpg",
            description: "High Quality Cardamom - 200g"
        },
           {
            id: 62,
            name: "Cloves",
            price: 95,
            image: "https://www.shutterstock.com/image-photo/dried-cloves-wooden-spoon-isolated-600nw-1066526294.jpg",
            description: "High Quality Cloves - 200g"
        },
    ],
    vegetables: [
        {
            id: 63,
            name: "Tomato",
            price: 40,
            image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ7UH64K2_JbWj--JEDbWcTUfrwSvo7Xuk1tm4NYExO2VhZTWm8Qs1YdW1IctLimuJqONWxfLEUk3IIrtluNW1nDg",
            description: "Fresh Tomato - 1kg"
        },
        {
            id: 64,
            name: "Brinjal",
            price: 60,
            image: "https://organicmandya.com/cdn/shop/files/Brinjal.jpg?v=1721370805&width=1000",
            description: "Fresh Brinjal - 1kg"
        },
        {
            id: 65,
            name: "Potato",
            price: 40,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXEmaDPJK9UFzYT0g4Qbd4OiRO8hTUvVDleDELrPzn55zgN9qqTinw9ai0m5gakiGYn0WBwGTXvAloTuSv7uUtvYHVKCH3EyHQbxLJi9c",
            description: " Fresh Potato- 1kg"
        },
        {
            id: 66,
            name: "Beetroot",
            price: 70,
            image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTs161NUOjPqNlNxrPt6B9fxpK8YKqFM3TaA6OSRbjfITRAiV3dpAj9Uz7NOicoLrmX8LrycS4RS0pLx2mJMDEpGDKWccrp7Lu5sbzhmf4",
            description: "Fresh Beetroot - 1kg"
        },
        {
            id: 67,
            name: "Carrot",
            price: 80,
            image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSh_qOCWL4BojfOYcPI-wZGe61D5tHrr_MHEq3Bi4wLYD8Juc4d4MOy2hFVsLu_t2zkBxOD1vhwu9NLwOTgGM_PCs0P6zEZWDm9lhQzPw",
            description: "Ooty's Carrot - 1kg"
        },
        {
            id: 68,
            name: "Drumstick",
            price: 10,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbwF4FI4E5uSsC7ySPbPreCp0YjJF9iAmufIPQQC85gzJYll5wfKpeFS_a8RqgXahJibc1J8-afFWSAANcOMwsSGdLCq52Tbf7LNKDptA",
            description: "Fresh Drumstick - 1pcs"
        },
        {
            id: 69,
            name: "Lady's Finger",
            price: 50,
            image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSlL0VqpXlGPCznSdbL6mnX19JduwDbrdm3GDFxUbx6mhgaq2MS0gt6jhrBme895jIOOPQ-vA655XlbwJx-M5kOBbsBTLYmjM8ibxsZpbs",
            description: "Lady's Finger - 1kg"
        },
        {
            id: 70,
            name: "Bitter Gourd",
            price: 80,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS75uxsDcsv890Zf7nuLfaGSmPPg_wKT5ZseueY_cz-mdNXY0yuEK0EiQOCdmXJgw0r47WFoHtvh2KkVo2hrkZ2T2_ziQ-XD2_ha6ngKpU",
            description: "Karela - 1kg"
        },
        {
            id: 71,
            name: "Bottle Gourd",
            price: 90,
            image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSs6X0aqaBC5GA4V8gqOJHWhE9oxNApl5pGBndsie3mdKU5KJwyXBFUeg4aXT7jCasT_YNUjcWFwrTHQM-uebz6435LBbzaXFZYtwCUuQ",
            description: "Lokhi - 1kg"
        },
        {
            id: 72,
            name: "Ginger",
            price: 120,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV7IG3l1b_WtzJeWyw5zYCrbqfAUsO0mBCtQ&s",
            description: "Adhrak - 1kg"
        },
        {
            id: 73,
            name: "Onion",
            price: 100,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLOZMdGC6UuMJiIDE__sDw_XbdKj9rdkeGdA&s",
            description: " Fresh Onion- 1kg"
        },
        {
            id: 74,
            name: "Garlic",
            price: 200,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa6hFCov1Z8qkpQWlLXe52S76Evg-YbQf6bA&s",
            description: " White Garlic- 1kg"
        },
        {
            id: 75,
            name: "Curry Leaves",
            price: 10,
            image: "https://www.jiomart.com/images/product/original/590000117/curry-leaves-1-bunch-approx-20-g-100-g-product-images-o590000117-p590000117-0-202409171907.jpg?im=Resize=(1000,1000)",
            description: "Fresh Leaves- 1bunch"
        },
        {
            id: 76,
            name: "Coriander Leaves",
            price: 10,
            image: "https://media.assettype.com/thequint%2F2024-02%2F51cc762c-ae50-417d-a52a-2121cf56f2ff%2Ffresh_coriander_cilantro_leaves_on_basket_jpg_s_1024x1024_w_is_k_20_c_96og9_8azXuHXbeWpj2eJUufrZ1nDG.jpg?auto=format%2Ccompress&fmt=webp&width=720&w=1200",
            description: " Fresh Leaves- 1bunch"
        },
        {
            id: 77,
            name: "Mint Leaves",
            price: 10,
            image: "https://aumswow.com/life-veda/assets/images/ingredients/mint.jpg",
            description: " Fresh Leaves- 1bunch"
        },
        {
            id: 78,
            name: "Lemon",
            price: 10,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3oL-WM6Xgsd1WOgssJuLH78IV1BsdohFl5w&s",
            description: "Fresh Lemon - 3pcs"
        },


    ]
 };

// Global
let cart = [];
let currentCategory = 'all';
let displayedProducts = [];

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  displayProducts('all');
});

// Display Products
function displayProducts(category) {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = '';
  currentCategory = category;

  let list = [];
  if (category === 'all') {
    list = Object.values(products).flat();
    document.getElementById('sectionTitle').textContent = 'All Products';
  } else {
    list = products[category] || [];
    document.getElementById('sectionTitle').textContent = category.toUpperCase();
  }

  displayedProducts = list;
  list.forEach(p => grid.appendChild(createProductCard(p)));
}

// Create Product Card
function createProductCard(product) {
  const div = document.createElement('div');
  div.className = 'product-card';
  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="product-image">
    <div class="product-info">
      <h3 class="product-title">${product.name}</h3>
      <p class="product-description">${product.description}</p>
      <div class="product-price">₹${product.price}</div>
      <div class="product-actions">
        <button class="qty-btn" onclick="changeQty(${product.id}, -1)">-</button>
        <span id="qty-${product.id}">1</span>
        <button class="qty-btn" onclick="changeQty(${product.id}, 1)">+</button>
        <button class="add-to-cart" onclick="addToCart(${product.id})">Add</button>
        <button class="qty-btn" onclick="viewDetails(${product.id})">👁</button>
      </div>
    </div>`;
  return div;
}

// Quantity adjust
const qtyMap = {};
function changeQty(id, val) {
  if (!qtyMap[id]) qtyMap[id] = 1;
  qtyMap[id] = Math.max(1, qtyMap[id] + val);
  document.getElementById(`qty-${id}`).textContent = qtyMap[id];
}

// Add to Cart
function addToCart(id) {
  const product = Object.values(products).flat().find(p => p.id === id);
  if (!product) return;
  const existing = cart.find(i => i.id === id);
  const qty = qtyMap[id] || 1;
  if (existing) existing.quantity += qty;
  else cart.push({ ...product, quantity: qty });
  updateCartCount();
  alert(`${product.name} added to cart!`);
}

// Update Cart Count
function updateCartCount() {
  document.getElementById('cartCount').textContent =
    cart.reduce((a, i) => a + i.quantity, 0);
}

// Cart modal
function toggleCart() {
  if (cart.length === 0) return alert('Your cart is empty!');
  const modal = document.getElementById('modal');
  const content = document.getElementById('modalContent');
  let total = 0;
  content.innerHTML = `<h2>Your Cart</h2>`;
  cart.forEach(item => {
    total += item.price * item.quantity;
    content.innerHTML += `
      <p>${item.name} (x${item.quantity}) — ₹${item.price * item.quantity}</p>`;
  });
  content.innerHTML += `
    <h3>Total: ₹${total}</h3>
    <button onclick="goToCheckout()">Proceed to Checkout</button>
    <button onclick="closeModal()">Close</button>`;
  modal.classList.remove('hidden');
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
}

// Checkout page
function goToCheckout() {
  const total = cart.reduce((a, i) => a + i.price * i.quantity, 0);
  const content = document.getElementById('modalContent');
  content.innerHTML = `
    <h2>Checkout & Billing</h2>
    <p>Total Amount: ₹${total}</p>
    <input type="text" placeholder="Full Name" /><br><br>
    <input type="text" placeholder="Address" /><br><br>
    <input type="text" placeholder="Card Number" /><br><br>
    <button onclick="confirmOrder()">Pay Now</button>
    <button onclick="closeModal()">Cancel</button>`;
}

// Confirm order
function confirmOrder() {
  cart = [];
  updateCartCount();
  alert('Payment successful! Thank you for shopping.');
  closeModal();
}

// Search
function searchProducts() {
  const term = document.getElementById('searchInput').value.toLowerCase();
  const all = Object.values(products).flat();
  const filtered = all.filter(p =>
    p.name.toLowerCase().includes(term) || p.description.toLowerCase().includes(term)
  );
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = '';
  filtered.forEach(p => grid.appendChild(createProductCard(p)));
  document.getElementById('sectionTitle').textContent = `Results for "${term}"`;
}

// View product details
function viewDetails(id) {
  const p = Object.values(products).flat().find(x => x.id === id);
  const modal = document.getElementById('modal');
  const content = document.getElementById('modalContent');
  content.innerHTML = `
    <h2>${p.name}</h2>
    <img src="${p.image}" style="width:100%;border-radius:10px;"><br><br>
    <p>${p.description}</p>
    <p><b>Price:</b> ₹${p.price}</p>
    <button onclick="addToCart(${p.id})">Add to Cart</button>
    <button onclick="closeModal()">Close</button>`;
  modal.classList.remove('hidden');
}

// Sorting
function sortProducts(order) {
  if (order === 'default') return displayProducts(currentCategory);
  const sorted = [...displayedProducts];
  sorted.sort((a, b) => order === 'lowToHigh' ? a.price - b.price : b.price - a.price);
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = '';
  sorted.forEach(p => grid.appendChild(createProductCard(p)));
}

// Category
function showCategory(cat) {
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  displayProducts(cat);
}

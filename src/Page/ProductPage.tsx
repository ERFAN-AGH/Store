import Container from "../Components/container/container";
function ProductPage() {
  return (
    <>
      <Container>
        <div className="grid grid-cols-12">
          <div className="col-span-3  mt-12 ">
            <img
              className="rounded-lg hover:shadow-blue-700 shadow-2xl"
              src="https://wallpapercat.com/w/full/7/0/8/68550-1080x1920-phone-1080p-dota-2-wallpaper-image.jpg"
              alt=""
            />
          </div>
          <div className="col-span-9 mt-12 text-right">
            <h3>عنوان درس</h3>
            <p className="mt-5">قیمت:$100</p>
            <p className="mt-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
              culpa autem odio quos, voluptatum maiores unde excepturi eius
              provident, aliquam dicta voluptatibus, reprehenderit libero.
              Aperiam exercitationem officiis molestiae blanditiis cupiditate
              accusantium ratione incidunt officia beatae magni corrupti, itaque
              reiciendis! Quo maiores nisi est in perferendis, inventore nam
              iste, earum assumenda a provident aut laudantium, sunt magni.
              Praesentium dolores quae officia voluptatibus magni quos dolor
              saepe laborum molestias vero ipsam aliquid veritatis tempore error
              repellat eos quo explicabo illo sapiente fugiat rerum, eveniet
              corporis aliquam. Quasi, dolore tempora et nam nobis sit autem
              excepturi obcaecati quos, dolor doloremque, ullam eligendi
              perspiciatis. iam exercitationem officiis molestiae blanditiis
              cupiditate accusantium ratione incidunt officia beatae magni
              corrupti, itaque reiciendis! Quo maiores nisi est in perferendis,
              inventore nam iste, earum assumenda a provident aut laudantium,
              sunt magni. Praesentium dolores quae officia voluptatibus magni
              quos dolor saepe laborum molestias vero ipsam aliquid veritatis
              tempore error repellat eos quo explicabo illo sapiente fugiat
            </p>
            <div className="text-center mt-8">
              <button className="bg-sky-200 w-96 py-2 rounded-md border-blue-600 border-2 hover:bg-blue-600 hover:border-sky-300 hover:text-white">
                اضافه کردن
              </button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default ProductPage;

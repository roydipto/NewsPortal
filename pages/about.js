import MyHeader from "@/component/header";
export default function About() {
    return (
      <>
<div class="container w-full mx-auto bg-slate-900">
<MyHeader title="About Us"/>
    <section class="mb-32 text-gray-800">
    <div class="block rounded-lg shadow-lg bg-slate">
      <div class="flex flex-wrap items-center">
        <div class="hidden lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/34627623926889.5632b1fdb3ead.jpg" alt="Trendy Pants and Shoes"
            class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
        </div>
        <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
          <div class="px-6 py-12 md:px-12">
            <h2 class="text-2xl text-white font-bold mb-4">What's the secret of the great taste?</h2>
            <p class="uppercase text-red-600 font-bold mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="w-4 h-4 mr-2">
                <path fill="currentColor"
                  d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z" />
                </svg>Hot news
            </p>
            <p class="text-white mb-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum maxime voluptas
              ipsam aliquam itaque cupiditate provident architecto expedita harum culpa odit,
              inventore rem molestias laborum repudiandae corporis pariatur quo eius iste!
              Quaerat, assumenda voluptates! Molestias, recusandae? Maxime fuga omnis ducimus.
            </p>
            <p class="text-white">
              Commodi ut nisi assumenda alias maxime necessitatibus ad rem repellat explicabo,
              reiciendis illum suscipit iusto? Provident dignissimos similique, reiciendis
              inventore accusantium unde mollitia, deleniti quae atque error id perspiciatis
              illum. Laboriosam aperiam ab illo dignissimos obcaecati corporis similique a odio,
              optio iste quis placeat alias amet rerum sint quos dolor pariatur inventore
              possimus ad consequuntur fugiat perferendis consectetur laudantium.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
      </>
    )
  }
  
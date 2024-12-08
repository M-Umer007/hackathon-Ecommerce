import Image from "next/image";

export default function Cart() {
return(

<div className="flex flex-col md:flex-row gap-10 mx-10 items-center justify-center my-20">
  <div className="w-[80vw] h-auto mx-auto">
    <div>
      <p className="font-bold">Bag</p>
    </div>
    <div className="flex justify-between">
      <div className="flex">
        <div>
          <Image src={"/Products (2).png"} alt="" width={100} height={100} />
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <p>Library Stool Chair</p>
          </div>
          <div className="font-thin">
            <p>Ashen Slate/Cobalt Bliss</p>
            <div className="flex justify-between">
              <p>Size L</p>
              <span>Quantity</span>
            </div>
          </div>

          <div className="flex gap-2">
            <div>
              <Image
                src={"/Frame (1).png"}
                alt=""
                width={20}
                height={20}
              />
            </div>
            <div>
              <Image
                src={"/Frame.png"}
                alt=""
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>MPR:99$</p>
      </div>
    </div>

    <div className="flex justify-between">
      <div className="flex">
        <div>
          <Image
            src={"/Image (4).png"}
            alt=""
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <p>Library Stool Chair</p>
          </div>
          <div className="font-thin">
            <p>Ashen Slate/Cobalt Bliss</p>
            <div className="flex justify-between">
              <p>Size L</p>
              <span>Quantity</span>
            </div>
          </div>

          <div className="flex gap-2">
            <div>
              <Image
                src={"/Frame (1).png"}
                alt=""
                width={20}
                height={20}
              />
            </div>
            <div>
              <Image
                src={"/Frame.png"}
                alt=""
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>MPR:99$</p>
      </div>
    </div>
  </div>

  <div className="w-full min-h-auto md:w-1/3  mx-auto my-auto gap-10 flex flex-col">
    <div className="gap-10 flex flex-col">
      <div className="text-3xl">
        Summary
      </div>
      <div>
        <div className="flex justify-between">
          <p>Sub Total</p>
          <p>$198.00</p>
        </div>
        <div className="flex justify-between">
          <p>Estimated Delivery And Handling</p>
          <p>Free</p>
        </div>
      </div>
      <div className="flex justify-between">
        <p>Total</p>
        <p>$198.00</p>
      </div>
    </div>
    <div className="mt-5">
      <Image
        src="/Auto Layout Horizontal(button).png"
        alt="Shop Now"
        width={220}
        height={220}
      />
    </div>
  </div>
</div>

);
}
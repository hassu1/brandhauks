'use client';
import Image from 'next/image';

export default function TextScrollTwo() {
 

  return (
    <>
      {/* <!-- Start Of Text Scroll 2 section
	============================================= --> */}
      <section id="bi-text-scroll-2" className="bi-text-scroll-section-2">
        <div className="bi-text-scroll-content-2">
          <div className="bi-text-scroll-item-2 headline text-uppercase">
            <h3 className="scroll-text-1">Brand Hawks.</h3>
            <span><Image width={15} height={15} style={{width:'100%', height:'auto'}} src="/assets/img/icon/tx1.png" alt="" /></span>
            <h3 className="scroll-text-2">creative</h3>
            <span><Image width={15} height={15} style={{width:'100%', height:'auto'}} src="/assets/img/icon/tx2.png" alt="" /></span>
            <h3 className="scroll-text-3">digital</h3>
            <span><Image width={15} height={15} style={{width:'100%', height:'auto'}} src="/assets/img/icon/tx3.png" alt="" /></span>
            <h3 className="scroll-text-4">agency</h3>
          </div>
        </div>
      </section>
      {/* <!--End Of why Text Scroll 2 section
	============================================= --> */}
    </>
  );
}
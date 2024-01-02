
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
    return(
        <>
            <Header />
            <Hero />
            <HomeMenu/>
            <section className={'text-center my-16'}>
                <SectionHeaders
                    subHeader={'Our Story'}
                    mainHeader={'About Us'}
                />
                <div className={'text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4'}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit consectetur gravida. Aliquam erat volutpat. Vivamus vel nisl interdum, venenatis leo in, congue nunc. In id nisl nec ipsum dignissim sagittis quis vitae magna. Aenean vel elit et sapien suscipit ornare id facilisis orci. Sed fermentum eget nisi eget iaculis.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit consectetur gravida. Aliquam erat volutpat. Vivamus vel nisl interdum, venenatis leo in, congue nunc. In id nisl nec ipsum dignissim sagittis quis vitae magna. Aenean vel elit et sapien suscipit ornare id facilisis orci. Sed fermentum eget nisi eget iaculis.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit consectetur gravida. Aliquam erat volutpat. Vivamus vel nisl interdum, venenatis leo in, congue nunc. In id nisl nec ipsum dignissim sagittis quis vitae magna.
                    </p>
                </div>
            </section>
            <section className={'text-center my-8'}>
                <SectionHeaders
                    subHeader={'Don\'t hesitate'}
                    mainHeader={'Contact Us'}
                />
                <div className={'mt-8'}>
                    <a className={'text-4xl underline text-gray-500'} href={'tel:+919337121512'}>
                        +91 93371 21512
                    </a>
                </div>
            </section>
            <footer className={'border-t p-8 text-center text-gray-500 mt-16'}>
                &copy; 2023 All Rights Reserved
            </footer>
        </>
    );
}

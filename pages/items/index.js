import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Index = props => (
             <section>
                       <h1> Drake University: Apparel </h>
                       <u1>
                             {props.items.map(item => (
                                    <l1 key={item.itemId}>
                                           <Link href="items/[itemId]" as={' /items/${item.itemId}'}>
                                                            <a>{item.description}</a>
                                           </Link>
                                    </l1>
                                    ))}
                        </u1>
             </section>

 );

 Index.getInitialProps = async function () {
        const res = await fetch('http://localhost:5555/items');
        const items = await res.json();

        return {
                  items
       };
  };
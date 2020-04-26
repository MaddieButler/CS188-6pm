import Link from "next/link";

export default function Index() {
        return (
                  <div>
                        <p> Drake University - Apparel </p>
                        <ul>
                            <li>
                                <Link href="/items">
                                    <a>View Apparel Here</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/cart">
                                    <a>View Cart Here</a>
                                </Link>
                            </li>
                        </ul>
                  </div>
        );
}

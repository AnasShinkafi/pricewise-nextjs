"use client"

import { scrapeAndStoreProduct } from "@/lib/actions";
import { FormEvent, useState } from "react"

const isValidAmazonProductUrl = (url: string) => {
  try {
    const parseURL = new URL(url);
    const hostname = parseURL.hostname;

    if(hostname.includes('amazon.com') || hostname.includes('amazon.') || hostname.includes('amazon')) {
      return true;
    }
  } catch (error) {
    return false;
  }
}

type Props = {}

const Searchbar = (props: Props) => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidLink = isValidAmazonProductUrl(searchPrompt);

    if(!isValidLink) return alert('Please provide a void valid Amazon link');

    try {
      setIsLoading(true);

      // scrape the product page
      const product = await scrapeAndStoreProduct(searchPrompt);
    } catch (error) {
      console.log(error);
      
    } finally {
      setIsLoading(false);
    }
  }
  
  return (
    <form action="" className=" flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter product link" className="searchbar-input" value={searchPrompt} onChange={(e) => setSearchPrompt(e.target.value)} />

        <button className="searchbar-btn" type="submit" disabled={searchPrompt === ''}>
            {isLoading ? "Searching...." : "Search"} 
        </button>
    </form>
  )
}

export default Searchbar
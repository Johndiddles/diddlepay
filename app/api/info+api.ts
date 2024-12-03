const COIN_MARKET_SECRET_KEY = process.env.COIN_MARKET_SECRET_KEY;

export const GET = async (request: Request) => {
  const url = new URL(request.url);
  const ids = url.searchParams.get("ids") || "";
  //   const response = await fetch(
  //     `https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=${ids}`,
  //     {
  //       headers: {
  //         "X-CMC_PRO_API_KEY": COIN_MARKET_SECRET_KEY!,
  //       },
  //     }
  //   );
  //   const result = await response.json();
  //   console.log({ result });
  //   return Response.json(result.data);
  return Response.json(data);
};

const data = {
  "1": {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    category: "coin",
    description:
      "Bitcoin (BTC) is a cryptocurrency launched in 2010. Users are able to generate BTC through the process of mining. Bitcoin has a current supply of 19,787,634. The last known price of Bitcoin is 93,290.37797795 USD and is down -5.43 over the last 24 hours. It is currently trading on 11808 active market(s) with $88,468,329,600.97 traded over the last 24 hours. More information can be found at https://bitcoin.org/.",
    slug: "bitcoin",
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
    subreddit: "bitcoin",
    notice: "",
    tags: [
      "mineable",
      "pow",
      "sha-256",
      "store-of-value",
      "state-channel",
      "coinbase-ventures-portfolio",
      "three-arrows-capital-portfolio",
      "polychain-capital-portfolio",
      "binance-labs-portfolio",
      "blockchain-capital-portfolio",
      "boostvc-portfolio",
      "cms-holdings-portfolio",
      "dcg-portfolio",
      "dragonfly-capital-portfolio",
      "electric-capital-portfolio",
      "fabric-ventures-portfolio",
      "framework-ventures-portfolio",
      "galaxy-digital-portfolio",
      "huobi-capital-portfolio",
      "alameda-research-portfolio",
      "a16z-portfolio",
      "1confirmation-portfolio",
      "winklevoss-capital-portfolio",
      "usv-portfolio",
      "placeholder-ventures-portfolio",
      "pantera-capital-portfolio",
      "multicoin-capital-portfolio",
      "paradigm-portfolio",
      "bitcoin-ecosystem",
      "ftx-bankruptcy-estate",
    ],
    "tag-names": [
      "Mineable",
      "PoW",
      "SHA-256",
      "Store Of Value",
      "State Channel",
      "Coinbase Ventures Portfolio",
      "Three Arrows Capital Portfolio",
      "Polychain Capital Portfolio",
      "Binance Labs Portfolio",
      "Blockchain Capital Portfolio",
      "BoostVC Portfolio",
      "CMS Holdings Portfolio",
      "DCG Portfolio",
      "DragonFly Capital Portfolio",
      "Electric Capital Portfolio",
      "Fabric Ventures Portfolio",
      "Framework Ventures Portfolio",
      "Galaxy Digital Portfolio",
      "Huobi Capital Portfolio",
      "Alameda Research Portfolio",
      "a16z Portfolio",
      "1Confirmation Portfolio",
      "Winklevoss Capital Portfolio",
      "USV Portfolio",
      "Placeholder Ventures Portfolio",
      "Pantera Capital Portfolio",
      "Multicoin Capital Portfolio",
      "Paradigm Portfolio",
      "Bitcoin Ecosystem",
      "FTX Bankruptcy Estate ",
    ],
    "tag-groups": [
      "OTHERS",
      "ALGORITHM",
      "ALGORITHM",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "PLATFORM",
      "CATEGORY",
    ],
    urls: {
      website: ["https://bitcoin.org/"],
      twitter: [],
      message_board: ["https://bitcointalk.org"],
      chat: [],
      facebook: [],
      explorer: [
        "https://blockchain.info/",
        "https://live.blockcypher.com/btc/",
        "https://blockchair.com/bitcoin",
        "https://explorer.viabtc.com/btc",
        "https://www.okx.com/web3/explorer/btc",
      ],
      reddit: ["https://reddit.com/r/bitcoin"],
      technical_doc: ["https://bitcoin.org/bitcoin.pdf"],
      source_code: ["https://github.com/bitcoin/bitcoin"],
      announcement: [],
    },
    platform: null,
    date_added: "2010-07-13T00:00:00.000Z",
    twitter_username: "",
    is_hidden: 0,
    date_launched: "2010-07-13T00:00:00.000Z",
    contract_address: [],
    self_reported_circulating_supply: null,
    self_reported_tags: null,
    self_reported_market_cap: null,
    infinite_supply: false,
  },
  "52": {
    id: 52,
    name: "XRP",
    symbol: "XRP",
    category: "coin",
    description:
      "XRP (XRP) is a cryptocurrency . XRP has a current supply of 99,986,987,365 with 56,998,852,241 in circulation. The last known price of XRP is 1.3623581 USD and is down -9.61 over the last 24 hours. It is currently trading on 1438 active market(s) with $10,239,609,505.41 traded over the last 24 hours. More information can be found at https://xrpl.org/.",
    slug: "xrp",
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/52.png",
    subreddit: "ripple",
    notice: "",
    tags: [
      "medium-of-exchange",
      "enterprise-solutions",
      "arrington-xrp-capital-portfolio",
      "galaxy-digital-portfolio",
      "a16z-portfolio",
      "pantera-capital-portfolio",
      "ftx-bankruptcy-estate",
    ],
    "tag-names": [
      "Medium of Exchange",
      "Enterprise Solutions",
      "Arrington XRP Capital Portfolio",
      "Galaxy Digital Portfolio",
      "a16z Portfolio",
      "Pantera Capital Portfolio",
      "FTX Bankruptcy Estate ",
    ],
    "tag-groups": [
      "INDUSTRY",
      "INDUSTRY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
    ],
    urls: {
      website: ["https://xrpl.org/"],
      twitter: ["https://twitter.com/Ripple"],
      message_board: ["http://www.xrpchat.com/"],
      chat: [],
      facebook: [],
      explorer: [
        "https://livenet.xrpl.org/",
        "https://bithomp.com/explorer/",
        "https://xrpscan.com/",
        "https://blockchair.com/ripple",
        "https://bscscan.com/token/0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe",
      ],
      reddit: ["https://reddit.com/r/ripple"],
      technical_doc: [
        "https://ripple.com/files/ripple_consensus_whitepaper.pdf",
      ],
      source_code: ["https://github.com/ripple/rippled"],
      announcement: [],
    },
    platform: {
      id: "1839",
      name: "BNB",
      slug: "bnb",
      symbol: "BNB",
      token_address: "0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe",
    },
    date_added: "2013-08-04T00:00:00.000Z",
    twitter_username: "Ripple",
    is_hidden: 0,
    date_launched: null,
    contract_address: [
      {
        contract_address: "0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe",
        platform: {
          name: "BNB Smart Chain (BEP20)",
          coin: { id: "1839", name: "BNB", symbol: "BNB", slug: "bnb" },
        },
      },
      {
        contract_address: "0x9eaefb09fe4aabfbe6b1ca316a3c36afc83a393f",
        platform: {
          name: "KAIA",
          coin: { id: "32880", name: "Kaia", symbol: "KAIA", slug: "kaia" },
        },
      },
    ],
    self_reported_circulating_supply: null,
    self_reported_tags: null,
    self_reported_market_cap: null,
    infinite_supply: false,
  },
  "74": {
    id: 74,
    name: "Dogecoin",
    symbol: "DOGE",
    category: "coin",
    description:
      "Dogecoin (DOGE) is a cryptocurrency . Users are able to generate DOGE through the process of mining. Dogecoin has a current supply of 146,949,816,383.7052. The last known price of Dogecoin is 0.38670889 USD and is down -11.33 over the last 24 hours. It is currently trading on 1112 active market(s) with $9,780,008,805.06 traded over the last 24 hours. More information can be found at http://dogecoin.com/.",
    slug: "dogecoin",
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/74.png",
    subreddit: "dogecoin",
    notice: "",
    tags: [
      "mineable",
      "pow",
      "scrypt",
      "medium-of-exchange",
      "memes",
      "payments",
      "doggone-doggerel",
      "bnb-chain",
      "ftx-bankruptcy-estate",
    ],
    "tag-names": [
      "Mineable",
      "PoW",
      "Scrypt",
      "Medium of Exchange",
      "Memes",
      "Payments",
      "Doggone Doggerel",
      "BNB Chain",
      "FTX Bankruptcy Estate ",
    ],
    "tag-groups": [
      "OTHERS",
      "ALGORITHM",
      "ALGORITHM",
      "INDUSTRY",
      "INDUSTRY",
      "INDUSTRY",
      "CATEGORY",
      "PLATFORM",
      "CATEGORY",
    ],
    urls: {
      website: ["http://dogecoin.com/"],
      twitter: ["https://twitter.com/dogecoin"],
      message_board: [],
      chat: [
        "http://webchat.freenode.net/?nick=Shibe..&channels=%23dogecoin&prompt=1",
      ],
      facebook: [],
      explorer: [
        "https://blockchair.com/dogecoin",
        "http://dogechain.info/chain/Dogecoin",
        "https://www.oklink.com/doge",
        "https://explorer.viabtc.com/doge",
        "https://bscscan.com/token/0xba2ae424d960c26247dd6c32edc70b295c744c43",
      ],
      reddit: ["https://reddit.com/r/dogecoin"],
      technical_doc: [
        "https://github.com/dogecoin/dogecoin/blob/master/README.md",
      ],
      source_code: ["https://github.com/dogecoin/dogecoin"],
      announcement: ["https://bitcointalk.org/index.php?topic=361813.0"],
    },
    platform: null,
    date_added: "2013-12-15T00:00:00.000Z",
    twitter_username: "dogecoin",
    is_hidden: 0,
    date_launched: null,
    contract_address: [
      {
        contract_address: "0xba2ae424d960c26247dd6c32edc70b295c744c43",
        platform: {
          name: "BNB Smart Chain (BEP20)",
          coin: { id: "1839", name: "BNB", symbol: "BNB", slug: "bnb" },
        },
      },
    ],
    self_reported_circulating_supply: null,
    self_reported_tags: null,
    self_reported_market_cap: null,
    infinite_supply: true,
  },
  "825": {
    id: 825,
    name: "Tether USDt",
    symbol: "USDT",
    category: "token",
    description:
      "Tether USDt (USDT) is a cryptocurrency and operates on the Ethereum platform. Tether USDt has a current supply of 135,944,368,167.21449224 with 132,744,005,559.75016871 in circulation. The last known price of Tether USDt is 1.00034198 USD and is down -0.05 over the last 24 hours. It is currently trading on 105264 active market(s) with $195,091,046,446.70 traded over the last 24 hours. More information can be found at https://tether.to.",
    slug: "tether",
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
    subreddit: "",
    notice: "",
    tags: [
      "stablecoin",
      "asset-backed-stablecoin",
      "avalanche-ecosystem",
      "solana-ecosystem",
      "arbitrum-ecosytem",
      "moonriver-ecosystem",
      "injective-ecosystem",
      "bnb-chain",
      "usd-stablecoin",
      "optimism-ecosystem",
      "fiat-stablecoin",
    ],
    "tag-names": [
      "Stablecoin",
      "Asset-Backed Stablecoin",
      "Avalanche Ecosystem",
      "Solana Ecosystem",
      "Arbitrum Ecosystem",
      "Moonriver Ecosystem",
      "Injective Ecosystem",
      "BNB Chain",
      "USD Stablecoin",
      "Optimism Ecosystem",
      "Fiat Stablecoin",
    ],
    "tag-groups": [
      "CATEGORY",
      "CATEGORY",
      "PLATFORM",
      "PLATFORM",
      "PLATFORM",
      "PLATFORM",
      "PLATFORM",
      "PLATFORM",
      "CATEGORY",
      "PLATFORM",
      "CATEGORY",
    ],
    urls: {
      website: ["https://tether.to"],
      twitter: ["https://twitter.com/tether_to"],
      message_board: [],
      chat: ["https://t.me/OfficialTether"],
      facebook: [],
      explorer: [
        "https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
        "https://www.omniexplorer.info/asset/31",
        "https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7",
        "https://algoexplorer.io/asset/312769",
        "https://tronscan.org/#/token20/TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
      ],
      reddit: [],
      technical_doc: [
        "https://tether.to/wp-content/uploads/2016/06/TetherWhitePaper.pdf",
      ],
      source_code: [],
      announcement: ["https://tether.to/en/news"],
    },
    platform: {
      id: "1027",
      name: "Ethereum",
      slug: "ethereum",
      symbol: "ETH",
      token_address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    },
    date_added: "2015-02-25T00:00:00.000Z",
    twitter_username: "tether_to",
    is_hidden: 0,
    date_launched: null,
    contract_address: [
      {
        contract_address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
        platform: {
          name: "Ethereum",
          coin: {
            id: "1027",
            name: "Ethereum",
            symbol: "ETH",
            slug: "ethereum",
          },
        },
      },
      {
        contract_address: "0x55d398326f99059ff775485246999027b3197955",
        platform: {
          name: "BNB Smart Chain (BEP20)",
          coin: { id: "1839", name: "BNB", symbol: "BNB", slug: "bnb" },
        },
      },
      {
        contract_address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
        platform: {
          name: "Solana",
          coin: { id: "5426", name: "Solana", symbol: "SOL", slug: "solana" },
        },
      },
      {
        contract_address: "312769",
        platform: {
          name: "Algorand",
          coin: {
            id: "4030",
            name: "Algorand",
            symbol: "ALGO",
            slug: "algorand",
          },
        },
      },
      {
        contract_address: "0xa71edc38d189767582c38a3145b5873052c3e47a",
        platform: {
          name: "HECO",
          coin: {
            id: "2502",
            name: "Huobi Token",
            symbol: "HT",
            slug: "htx-token",
          },
        },
      },
      {
        contract_address: "0x4ECaBa5870353805a9F068101A40E0f32ed605C6",
        platform: {
          name: "Gnosis Chain",
          coin: {
            id: "1659",
            name: "Gnosis",
            symbol: "GNO",
            slug: "gnosis-gno",
          },
        },
      },
      {
        contract_address: "terra1ce06wkrdm4vl6t0hvc0g86rsy27pu8yadg3dva",
        platform: {
          name: "Terra Classic",
          coin: {
            id: "4172",
            name: "Terra Classic",
            symbol: "LUNC",
            slug: "terra-luna",
          },
        },
      },
      {
        contract_address: "0x381b31409e4d220919b2cff012ed94d70135a59e",
        platform: {
          name: "Viction",
          coin: { id: "2570", name: "Viction", symbol: "VIC", slug: "viction" },
        },
      },
      {
        contract_address: "G5WWWzzVsWRyzGf32xojbnfp7gXbWrgqJT8RcVWEfLmC",
        platform: {
          name: "Waves",
          coin: { id: "1274", name: "Waves", symbol: "WAVES", slug: "waves" },
        },
      },
      {
        contract_address: "0x049d68029688eabf473097a2fc38ef61633a3c7a",
        platform: {
          name: "Fantom",
          coin: { id: "3513", name: "Fantom", symbol: "FTM", slug: "fantom" },
        },
      },
      {
        contract_address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
        platform: {
          name: "Polygon",
          coin: {
            id: "3890",
            name: "Polygon",
            symbol: "MATIC",
            slug: "polygon",
          },
        },
      },
      {
        contract_address: "0xcee8faf64bb97a73bb51e115aa89c17ffa8dd167",
        platform: {
          name: "KAIA",
          coin: { id: "32880", name: "Kaia", symbol: "KAIA", slug: "kaia" },
        },
      },
      {
        contract_address: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
        platform: {
          name: "Avalanche C-Chain",
          coin: {
            id: "5805",
            name: "Avalanche",
            symbol: "AVAX",
            slug: "avalanche",
          },
        },
      },
      {
        contract_address: "0x382bb369d343125bfb2117af9c149795c6c65c50",
        platform: {
          name: "OKExChain",
          coin: { id: "8267", name: "OKT Chain", symbol: "OKT", slug: "okt" },
        },
      },
      {
        contract_address: "0xBc2F884680c95A02cea099dA2F524b366d9028Ba",
        platform: {
          name: "Bitcoin Cash",
          coin: {
            id: "1831",
            name: "Bitcoin Cash",
            symbol: "BCH",
            slug: "bitcoin-cash",
          },
        },
      },
      {
        contract_address: "0xfe97e85d13abd9c1c33384e796f10b73905637ce",
        platform: {
          name: "Conflux",
          coin: {
            id: "7334",
            name: "Conflux",
            symbol: "CFX",
            slug: "conflux-network",
          },
        },
      },
      {
        contract_address: "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58",
        platform: {
          name: "Optimism",
          coin: {
            id: "11840",
            name: "Optimism",
            symbol: "OP",
            slug: "optimism-ethereum",
          },
        },
      },
      {
        contract_address: "0x0039f574ee5cc39bdd162e9a88e3eb1f111baf48",
        platform: {
          name: "KCC",
          coin: {
            id: "2087",
            name: "KuCoin Token",
            symbol: "KCS",
            slug: "kucoin-token",
          },
        },
      },
      {
        contract_address: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
        platform: {
          name: "Tron20",
          coin: { id: "1958", name: "TRON", symbol: "TRX", slug: "tron" },
        },
      },
      {
        contract_address: "0x3c2b8be99c50593081eaa2a724f0b8285f5aba8f",
        platform: {
          name: "Harmony",
          coin: { id: "3945", name: "Harmony", symbol: "ONE", slug: "harmony" },
        },
      },
      {
        contract_address: "zil1sxx29cshups269ahh5qjffyr58mxjv9ft78jqy",
        platform: {
          name: "Zilliqa",
          coin: { id: "2469", name: "Zilliqa", symbol: "ZIL", slug: "zilliqa" },
        },
      },
      {
        contract_address: "0xefaeee334f0fd1712f9a8cc375f427d9cdd40d73",
        platform: {
          name: "Moonbeam",
          coin: {
            id: "6836",
            name: "Moonbeam",
            symbol: "GLMR",
            slug: "moonbeam",
          },
        },
      },
      {
        contract_address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
        platform: {
          name: "Arbitrum",
          coin: {
            id: "11841",
            name: "Arbitrum",
            symbol: "ARB",
            slug: "arbitrum",
          },
        },
      },
      {
        contract_address: "0x551a5dcac57c66aa010940c2dcff5da9c53aa53b",
        platform: {
          name: "KardiaChain",
          coin: {
            id: "5453",
            name: "KardiaChain",
            symbol: "KAI",
            slug: "kardiachain",
          },
        },
      },
      {
        contract_address: "0xe936caa7f6d9f5c9e907111fcaf7c351c184cda7",
        platform: {
          name: "Moonriver",
          coin: {
            id: "9285",
            name: "Moonriver",
            symbol: "MOVR",
            slug: "moonriver",
          },
        },
      },
      {
        contract_address: "KT1XnTn74bUtxHfDtBmm2bGZAQfhPbvKWR8o",
        platform: {
          name: "Tezos",
          coin: { id: "2011", name: "Tezos", symbol: "XTZ", slug: "tezos" },
        },
      },
      {
        contract_address: "0x6fbcdc1169b5130c59e72e51ed68a84841c98cd1",
        platform: {
          name: "IoTex",
          coin: { id: "2777", name: "IoTeX", symbol: "IOTX", slug: "iotex" },
        },
      },
      {
        contract_address:
          "dac17f958d2ee523a2206206994597c13d831ec7.factory.bridge.near",
        platform: {
          name: "Near",
          coin: {
            id: "6535",
            name: "NEAR Protocol",
            symbol: "NEAR",
            slug: "near-protocol",
          },
        },
      },
      {
        contract_address: "0xEf213441a85DF4d7acBdAe0Cf78004E1e486BB96",
        platform: {
          name: "RSK RBTC",
          coin: {
            id: "3626",
            name: "Rootstock Smart Bitcoin",
            symbol: "RBTC",
            slug: "rsk-smart-bitcoin",
          },
        },
      },
      {
        contract_address: "0x975Ed13fa16857E83e7C493C7741D556eaaD4A3f",
        platform: {
          name: "Telos",
          coin: { id: "4660", name: "Telos", symbol: "TLOS", slug: "telos" },
        },
      },
      {
        contract_address: "0x01445c31581c354b7338ac35693ab2001b50b9ae",
        platform: {
          name: "Velas",
          coin: { id: "4747", name: "Velas", symbol: "VLX", slug: "velas" },
        },
      },
      {
        contract_address: "0x66e428c3f67a68878562e79A0234c1F83c208770",
        platform: {
          name: "Cronos",
          coin: { id: "3635", name: "Cronos", symbol: "CRO", slug: "cronos" },
        },
      },
      {
        contract_address: "0x5DE1677344D3Cb0D7D465c10b72A8f60699C062d",
        platform: {
          name: "Boba Network",
          coin: {
            id: "14556",
            name: "Boba Network",
            symbol: "BOBA",
            slug: "boba-network",
          },
        },
      },
      {
        contract_address: "0x9636d3294e45823ec924c8d89dd1f1dffcf044e6",
        platform: {
          name: "Fusion Network",
          coin: { id: "2530", name: "Fusion", symbol: "FSN", slug: "fusion" },
        },
      },
      {
        contract_address: "0xD16bAbe52980554520F6Da505dF4d1b124c815a7",
        platform: {
          name: "Hoo Smart Chain",
          coin: {
            id: "15165",
            name: "Hoo Smart Chain",
            symbol: "HSC",
            slug: "hoo-smart-chain",
          },
        },
      },
      {
        contract_address: "0xdc19a122e268128b5ee20366299fc7b5b199c8e3",
        platform: {
          name: "Oasis Network",
          coin: {
            id: "7653",
            name: "Oasis",
            symbol: "ROSE",
            slug: "oasis-network",
          },
        },
      },
      {
        contract_address: "secret18wpjn83dayu4meu6wnn29khfkwdxs7kyrz9c8f",
        platform: {
          name: "Secret",
          coin: { id: "5604", name: "Secret", symbol: "SCRT", slug: "secret" },
        },
      },
      {
        contract_address: "0x4988a896b1227218e4a686fde5eabdcabd91571f",
        platform: {
          name: "Aurora",
          coin: {
            id: "14803",
            name: "Aurora",
            symbol: "AURORA",
            slug: "aurora-near",
          },
        },
      },
      {
        contract_address: "0xbb06dca3ae6887fabf931640f67cab3e3a16f4dc",
        platform: {
          name: "Metis Andromeda",
          coin: {
            id: "9640",
            name: "Metis",
            symbol: "METIS",
            slug: "metisdao",
          },
        },
      },
      {
        contract_address: "0x5fa41671c48e3c951afc30816947126ccc8c162e",
        platform: {
          name: "Meter",
          coin: {
            id: "5919",
            name: "Meter Governance",
            symbol: "MTRG",
            slug: "meter-governance",
          },
        },
      },
      {
        contract_address: "0xfadbbf8ce7d5b7041be672561bba99f79c532e10",
        platform: {
          name: "Fuse",
          coin: {
            id: "5634",
            name: "Fuse",
            symbol: "FUSE",
            slug: "fuse-network",
          },
        },
      },
      {
        contract_address: "0x922D641a426DcFFaeF11680e5358F34d97d112E1",
        platform: {
          name: "Syscoin",
          coin: { id: "541", name: "Syscoin", symbol: "SYS", slug: "syscoin" },
        },
      },
      {
        contract_address: "0x3795c36e7d12a8c252a20c5a7b455f7c57b60283",
        platform: {
          name: "Milkomeda",
          coin: { id: "2010", name: "Cardano", symbol: "ADA", slug: "cardano" },
        },
      },
      {
        contract_address: "0xE3F5a90F9cb311505cd691a46596599aA1A0AD7D",
        platform: {
          name: "Bitgert",
          coin: {
            id: "11079",
            name: "Bitgert",
            symbol: "BRISE",
            slug: "bitrise-token",
          },
        },
      },
      {
        contract_address: "0x3795C36e7D12A8c252A20C5a7B455f7c57b60283",
        platform: {
          name: "Astar",
          coin: { id: "12885", name: "Astar", symbol: "ASTR", slug: "astar" },
        },
      },
      {
        contract_address:
          "0:a519f99bb5d6d51ef958ed24d337ad75a1c770885dcd42d51d6663f9fcdacfb2",
        platform: {
          name: "Everscale",
          coin: {
            id: "7505",
            name: "Everscale",
            symbol: "EVER",
            slug: "everscale",
          },
        },
      },
      {
        contract_address: "0x79F1520268A20c879EF44d169A4E3812D223C6de",
        platform: {
          name: "Cube network",
          coin: {
            id: "20519",
            name: "Cube Network",
            symbol: "CUBE",
            slug: "cube-network",
          },
        },
      },
      {
        contract_address: "0x4f3C8E20942461e2c3Bdd8311AC57B0c222f2b82",
        platform: {
          name: "ThunderCore",
          coin: {
            id: "3930",
            name: "ThunderCore",
            symbol: "TT",
            slug: "thundercore",
          },
        },
      },
      {
        contract_address: "0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d",
        platform: {
          name: "Dogechain(EVM)",
          coin: {
            id: "74",
            name: "Dogecoin",
            symbol: "DOGE",
            slug: "dogecoin",
          },
        },
      },
      {
        contract_address: "0xd567b3d7b8fe3c79a1ad8da978812cfc4fa05e75",
        platform: {
          name: "Canto",
          coin: { id: "21516", name: "CANTO", symbol: "CANTO", slug: "canto" },
        },
      },
      {
        contract_address: "0x2ad7868ca212135c6119fd7ad1ce51cfc5702892",
        platform: {
          name: "EthereumPoW",
          coin: {
            id: "21296",
            name: "EthereumPoW",
            symbol: "ETHW",
            slug: "ethereum-pow",
          },
        },
      },
      {
        contract_address:
          "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDT",
        platform: {
          name: "Aptos",
          coin: { id: "21794", name: "Aptos", symbol: "APT", slug: "aptos" },
        },
      },
      {
        contract_address: "0x73e84bfd35c3f1537a72180d1481e1eabf64b70b",
        platform: {
          name: "Redlight Chain",
          coin: {
            id: "21505",
            name: "Redlight Chain",
            symbol: "REDLC",
            slug: "redlight-chain",
          },
        },
      },
      {
        contract_address:
          "0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c::coin::COIN",
        platform: {
          name: "Sui Network",
          coin: { id: "20947", name: "Sui", symbol: "SUI", slug: "sui" },
        },
      },
      {
        contract_address: "0x900101d06A7426441Ae63e9AB3B9b0F63Be145F1",
        platform: {
          name: "Core",
          coin: { id: "23254", name: "Core", symbol: "CORE", slug: "core-dao" },
        },
      },
      {
        contract_address: "0x1e4a5963abfd975d8c9021ce480b42188849d41d",
        platform: {
          name: "Polygon zkEVM",
          coin: {
            id: "3890",
            name: "Polygon",
            symbol: "MATIC",
            slug: "polygon",
          },
        },
      },
      {
        contract_address: "0xfa9343c3897324496a05fc75abed6bac29f8a40f",
        platform: {
          name: "EOS EVM",
          coin: { id: "1765", name: "EOS", symbol: "EOS", slug: "eos" },
        },
      },
      {
        contract_address: "0x0cb6f5a34ad42ec934882a05265a7d5f59b51a2f",
        platform: {
          name: "PulseChain",
          coin: {
            id: "11145",
            name: "Pulsechain",
            symbol: "PLS",
            slug: "pulsechain",
          },
        },
      },
      {
        contract_address: "0x201eba5cc46d216ce6dc03f6a759e8e766e956ae",
        platform: {
          name: "Mantle",
          coin: { id: "27075", name: "Mantle", symbol: "MNT", slug: "mantle" },
        },
      },
      {
        contract_address: "0x5f0155d08ef4aae2b500aefb64a3419da8bb611a",
        platform: {
          name: "Neon EVM",
          coin: { id: "23015", name: "Neon EVM", symbol: "NEON", slug: "neon" },
        },
      },
      {
        contract_address:
          "0x68f5c6a61780768455de69077e07e89787839bf8166decfbf92b645209c0fb8",
        platform: {
          name: "Starknet",
          coin: {
            id: "22691",
            name: "Starknet",
            symbol: "STRK",
            slug: "starknet-token",
          },
        },
      },
      {
        contract_address: "0xf55BEC9cafDbE8730f096Aa55dad6D22d44099Df",
        platform: {
          name: "Scroll",
          coin: { id: "26998", name: "Scroll", symbol: "SCR", slug: "scroll" },
        },
      },
      {
        contract_address: "0xf417f5a458ec102b90352f697d6e2ac3a3d2851f",
        platform: {
          name: "Manta Pacific",
          coin: {
            id: "13631",
            name: "Manta Network",
            symbol: "MANTA",
            slug: "manta-network",
          },
        },
      },
      {
        contract_address:
          "ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB",
        platform: {
          name: "Osmosis",
          coin: {
            id: "12220",
            name: "Osmosis",
            symbol: "OSMO",
            slug: "osmosis",
          },
        },
      },
      {
        contract_address: "peggy0xdac17f958d2ee523a2206206994597c13d831ec7",
        platform: {
          name: "Injective",
          coin: {
            id: "7226",
            name: "Injective",
            symbol: "INJ",
            slug: "injective",
          },
        },
      },
      {
        contract_address: "0xd4b5f10d61916bd6e0860144a91ac658de8a1437",
        platform: {
          name: "XDC Network",
          coin: {
            id: "2634",
            name: "XDC Network",
            symbol: "XDC",
            slug: "xdc-network",
          },
        },
      },
      {
        contract_address: "EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs",
        platform: {
          name: "TON",
          coin: {
            id: "11419",
            name: "Toncoin",
            symbol: "TON",
            slug: "toncoin",
          },
        },
      },
      {
        contract_address: "0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e",
        platform: {
          name: "Celo",
          coin: { id: "5567", name: "Celo", symbol: "CELO", slug: "celo" },
        },
      },
      {
        contract_address: "0x1e4a5963abfd975d8c9021ce480b42188849d41d",
        platform: {
          name: "X Layer",
          coin: { id: "3897", name: "OKB", symbol: "OKB", slug: "okb" },
        },
      },
      {
        contract_address: "0xb75d0b03c06a926e488e2659df1a861f860bd3d1",
        platform: {
          name: "Sei v2",
          coin: { id: "23149", name: "Sei", symbol: "SEI", slug: "sei" },
        },
      },
      {
        contract_address: "0x493257fD37EDB34451f62EDf8D2a0C418852bA4C",
        platform: {
          name: "zkSync Era",
          coin: { id: "24091", name: "ZKsync", symbol: "ZK", slug: "zksync" },
        },
      },
      {
        contract_address: "0xff276c6bca1F66Fd54a8915e830735D6ab0C7B09",
        platform: {
          name: "ONUS",
          coin: { id: "15261", name: "ONUS", symbol: "ONUS", slug: "onus" },
        },
      },
    ],
    self_reported_circulating_supply: null,
    self_reported_tags: null,
    self_reported_market_cap: null,
    infinite_supply: true,
  },
  "1027": {
    id: 1027,
    name: "Ethereum",
    symbol: "ETH",
    category: "coin",
    description:
      "Ethereum (ETH) is a cryptocurrency . Ethereum has a current supply of 120,433,832.8640161. The last known price of Ethereum is 3,352.22605596 USD and is down -3.76 over the last 24 hours. It is currently trading on 9592 active market(s) with $53,654,160,322.78 traded over the last 24 hours. More information can be found at https://www.ethereum.org/.",
    slug: "ethereum",
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
    subreddit: "ethereum",
    notice: "",
    tags: [
      "pos",
      "smart-contracts",
      "ethereum-ecosystem",
      "coinbase-ventures-portfolio",
      "three-arrows-capital-portfolio",
      "polychain-capital-portfolio",
      "binance-labs-portfolio",
      "blockchain-capital-portfolio",
      "boostvc-portfolio",
      "cms-holdings-portfolio",
      "dcg-portfolio",
      "dragonfly-capital-portfolio",
      "electric-capital-portfolio",
      "fabric-ventures-portfolio",
      "framework-ventures-portfolio",
      "hashkey-capital-portfolio",
      "kenetic-capital-portfolio",
      "huobi-capital-portfolio",
      "alameda-research-portfolio",
      "a16z-portfolio",
      "1confirmation-portfolio",
      "winklevoss-capital-portfolio",
      "usv-portfolio",
      "placeholder-ventures-portfolio",
      "pantera-capital-portfolio",
      "multicoin-capital-portfolio",
      "paradigm-portfolio",
      "layer-1",
      "ftx-bankruptcy-estate",
    ],
    "tag-names": [
      "PoS",
      "Smart Contracts",
      "Ethereum Ecosystem",
      "Coinbase Ventures Portfolio",
      "Three Arrows Capital Portfolio",
      "Polychain Capital Portfolio",
      "Binance Labs Portfolio",
      "Blockchain Capital Portfolio",
      "BoostVC Portfolio",
      "CMS Holdings Portfolio",
      "DCG Portfolio",
      "DragonFly Capital Portfolio",
      "Electric Capital Portfolio",
      "Fabric Ventures Portfolio",
      "Framework Ventures Portfolio",
      "Hashkey Capital Portfolio",
      "Kenetic Capital Portfolio",
      "Huobi Capital Portfolio",
      "Alameda Research Portfolio",
      "a16z Portfolio",
      "1Confirmation Portfolio",
      "Winklevoss Capital Portfolio",
      "USV Portfolio",
      "Placeholder Ventures Portfolio",
      "Pantera Capital Portfolio",
      "Multicoin Capital Portfolio",
      "Paradigm Portfolio",
      "Layer 1",
      "FTX Bankruptcy Estate ",
    ],
    "tag-groups": [
      "ALGORITHM",
      "CATEGORY",
      "PLATFORM",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
    ],
    urls: {
      website: [
        "https://www.ethereum.org/",
        "https://en.wikipedia.org/wiki/Ethereum",
      ],
      twitter: ["https://twitter.com/ethereum"],
      message_board: ["https://forum.ethereum.org/", "https://ethresear.ch/"],
      chat: ["https://gitter.im/orgs/ethereum/rooms"],
      facebook: [],
      explorer: [
        "https://etherscan.io/",
        "https://solscan.io/token/2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk",
        "https://bscscan.com/token/0x2170ed0880ac9a755fd29b2688956bd959f933f8",
        "https://www.okx.com/web3/explorer/eth",
        "https://blockchair.com/ethereum",
      ],
      reddit: ["https://reddit.com/r/ethereum"],
      technical_doc: ["https://github.com/ethereum/wiki/wiki/White-Paper"],
      source_code: ["https://github.com/ethereum/go-ethereum"],
      announcement: ["https://bitcointalk.org/index.php?topic=428589.0"],
    },
    platform: null,
    date_added: "2015-08-07T00:00:00.000Z",
    twitter_username: "ethereum",
    is_hidden: 0,
    date_launched: null,
    contract_address: [
      {
        contract_address: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
        platform: {
          name: "BNB Smart Chain (BEP20)",
          coin: { id: "1839", name: "BNB", symbol: "BNB", slug: "bnb" },
        },
      },
      {
        contract_address: "0x64ff637fb478863b7468bc97d30a5bf3a428a1fd",
        platform: {
          name: "HECO",
          coin: {
            id: "2502",
            name: "Huobi Token",
            symbol: "HT",
            slug: "htx-token",
          },
        },
      },
      {
        contract_address: "0xf20d962a6c8f70c731bd838a3a388d7d48fa6e15",
        platform: {
          name: "Avalanche C-Chain",
          coin: {
            id: "5805",
            name: "Avalanche",
            symbol: "AVAX",
            slug: "avalanche",
          },
        },
      },
      {
        contract_address: "0x2eaa73bd0db20c64f53febea7b5f5e5bccc7fb8b",
        platform: {
          name: "Viction",
          coin: { id: "2570", name: "Viction", symbol: "VIC", slug: "viction" },
        },
      },
      {
        contract_address:
          "0x0200070000000000000000000000000000000000000000000000000000000000",
        platform: {
          name: "Sora",
          coin: { id: "5802", name: "SORA", symbol: "XOR", slug: "sora" },
        },
      },
      {
        contract_address: "0x1D931Bf8656d795E50eF6D639562C5bD8Ac2B78f",
        platform: {
          name: "RSK RBTC",
          coin: {
            id: "3626",
            name: "Rootstock Smart Bitcoin",
            symbol: "RBTC",
            slug: "rsk-smart-bitcoin",
          },
        },
      },
      {
        contract_address: "0x85219708c49aa701871ad330a94ea0f41dff24ca",
        platform: {
          name: "Velas",
          coin: { id: "4747", name: "Velas", symbol: "VLX", slug: "velas" },
        },
      },
      {
        contract_address: "2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk",
        platform: {
          name: "Solana",
          coin: { id: "5426", name: "Solana", symbol: "SOL", slug: "solana" },
        },
      },
      {
        contract_address: "0x34d21b1e550d73cee41151c77f3c73359527a396",
        platform: {
          name: "KAIA",
          coin: { id: "32880", name: "Kaia", symbol: "KAIA", slug: "kaia" },
        },
      },
      {
        contract_address: "aurora",
        platform: {
          name: "Near",
          coin: {
            id: "6535",
            name: "NEAR Protocol",
            symbol: "NEAR",
            slug: "near-protocol",
          },
        },
      },
      {
        contract_address: "KT19at7rQUvyjxnZ2fBv7D9zc8rkyG7gAoU8",
        platform: {
          name: "Tezos",
          coin: { id: "2011", name: "Tezos", symbol: "XTZ", slug: "tezos" },
        },
      },
      {
        contract_address: "0x34a9c05b638020a07bb153bf624c8763bf8b4a86",
        platform: {
          name: "EthereumPoW",
          coin: {
            id: "21296",
            name: "EthereumPoW",
            symbol: "ETHW",
            slug: "ethereum-pow",
          },
        },
      },
      {
        contract_address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        platform: {
          name: "Ethereum",
          coin: {
            id: "1027",
            name: "Ethereum",
            symbol: "ETH",
            slug: "ethereum",
          },
        },
      },
      {
        contract_address:
          "0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
        platform: {
          name: "Starknet",
          coin: {
            id: "22691",
            name: "Starknet",
            symbol: "STRK",
            slug: "starknet-token",
          },
        },
      },
      {
        contract_address:
          "ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5",
        platform: {
          name: "Osmosis",
          coin: {
            id: "12220",
            name: "Osmosis",
            symbol: "OSMO",
            slug: "osmosis",
          },
        },
      },
    ],
    self_reported_circulating_supply: null,
    self_reported_tags: null,
    self_reported_market_cap: null,
    infinite_supply: true,
  },
  "1839": {
    id: 1839,
    name: "BNB",
    symbol: "BNB",
    category: "coin",
    description:
      "BNB (BNB) is a cryptocurrency . BNB has a current supply of 144,010,198.72. The last known price of BNB is 625.06430938 USD and is down -7.19 over the last 24 hours. It is currently trading on 2290 active market(s) with $2,766,782,041.39 traded over the last 24 hours. More information can be found at https://bnbchain.org/en.",
    slug: "bnb",
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
    subreddit: "bnbchainofficial",
    notice: "",
    tags: [
      "marketplace",
      "centralized-exchange",
      "payments",
      "smart-contracts",
      "alameda-research-portfolio",
      "multicoin-capital-portfolio",
      "bnb-chain",
      "layer-1",
      "sec-security-token",
      "alleged-sec-securities",
      "celsius-bankruptcy-estate",
    ],
    "tag-names": [
      "Marketplace",
      "Centralized Exchange (CEX) Token",
      "Payments",
      "Smart Contracts",
      "Alameda Research Portfolio",
      "Multicoin Capital Portfolio",
      "BNB Chain",
      "Layer 1",
      "SEC Security Token",
      "Alleged SEC Securities",
      "Celsius Bankruptcy Estate",
    ],
    "tag-groups": [
      "INDUSTRY",
      "CATEGORY",
      "INDUSTRY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "PLATFORM",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
    ],
    urls: {
      website: ["https://bnbchain.org/en"],
      twitter: ["https://twitter.com/bnbchain"],
      message_board: [],
      chat: ["https://t.me/BNBchaincommunity", "https://t.me/bnbchain"],
      facebook: [],
      explorer: [
        "https://explorer.bnbchain.org/",
        "https://bsctrace.com/",
        "https://bscscan.com/token/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
        "https://www.okx.com/web3/explorer/bsc",
      ],
      reddit: ["https://reddit.com/r/bnbchainofficial"],
      technical_doc: [],
      source_code: ["https://github.com/bnb-chain"],
      announcement: [],
    },
    platform: null,
    date_added: "2017-07-25T00:00:00.000Z",
    twitter_username: "bnbchain",
    is_hidden: 0,
    date_launched: null,
    contract_address: [
      {
        contract_address: "0xb8c77482e45f1f44de1745f52c74426c631bdd52",
        platform: {
          name: "Ethereum",
          coin: {
            id: "1027",
            name: "Ethereum",
            symbol: "ETH",
            slug: "ethereum",
          },
        },
      },
    ],
    self_reported_circulating_supply: null,
    self_reported_tags: null,
    self_reported_market_cap: null,
    infinite_supply: false,
  },
  "1958": {
    id: 1958,
    name: "TRON",
    symbol: "TRX",
    category: "coin",
    description:
      "TRON (TRX) is a cryptocurrency . TRON has a current supply of 86,334,280,779.176075 with 86,334,237,337.371955 in circulation. The last known price of TRON is 0.19440993 USD and is down -8.20 over the last 24 hours. It is currently trading on 1072 active market(s) with $1,317,889,733.09 traded over the last 24 hours. More information can be found at https://trondao.org/.",
    slug: "tron",
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png",
    subreddit: "Tronix",
    notice:
      'Let\'s Learn About ["TRON"](https://coinmarketcap.com/earn/project/tron) on the Learn & Earn Page!',
    tags: [
      "media",
      "payments",
      "tron-ecosystem",
      "layer-1",
      "dwf-labs-portfolio",
      "sec-security-token",
      "alleged-sec-securities",
    ],
    "tag-names": [
      "Media",
      "Payments",
      "TRON Ecosystem",
      "Layer 1",
      "DWF Labs Portfolio",
      "SEC Security Token",
      "Alleged SEC Securities",
    ],
    "tag-groups": [
      "INDUSTRY",
      "INDUSTRY",
      "PLATFORM",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
    ],
    urls: {
      website: ["https://trondao.org/", "https://tron.network/"],
      twitter: ["https://twitter.com/trondao"],
      message_board: ["https://medium.com/@Tronfoundation"],
      chat: ["http://t.me/tronnetworkEN"],
      facebook: ["https://www.facebook.com/trondaoofficial"],
      explorer: [
        "https://tronscan.org/#/",
        "https://www.okx.com/web3/explorer/trx",
        "https://etherscan.io/token/0x50327c6c5a14dcade707abad2e27eb517df87ab5",
      ],
      reddit: ["https://reddit.com/r/Tronix"],
      technical_doc: ["https://developers.tron.network/docs"],
      source_code: ["https://github.com/tronprotocol/java-tron"],
      announcement: [],
    },
    platform: null,
    date_added: "2017-09-13T00:00:00.000Z",
    twitter_username: "trondao",
    is_hidden: 0,
    date_launched: null,
    contract_address: [
      {
        contract_address: "0x50327c6c5a14dcade707abad2e27eb517df87ab5",
        platform: {
          name: "Ethereum",
          coin: {
            id: "1027",
            name: "Ethereum",
            symbol: "ETH",
            slug: "ethereum",
          },
        },
      },
      {
        contract_address: "0xCE7de646e7208a4Ef112cb6ed5038FA6cC6b12e3",
        platform: {
          name: "BNB Smart Chain (BEP20)",
          coin: { id: "1839", name: "BNB", symbol: "BNB", slug: "bnb" },
        },
      },
      {
        contract_address: "0",
        platform: {
          name: "Tron20",
          coin: { id: "1958", name: "TRON", symbol: "TRX", slug: "tron" },
        },
      },
    ],
    self_reported_circulating_supply: null,
    self_reported_tags: [
      "DPoS",
      "Platform",
      "DeFi",
      "Smart Contracts",
      "Staking",
      "DAO",
      "TRON Ecosystem",
      "Governance",
      "Web3",
      "Layer 1",
    ],
    self_reported_market_cap: null,
    infinite_supply: true,
  },
  "2010": {
    id: 2010,
    name: "Cardano",
    symbol: "ADA",
    category: "coin",
    description:
      "Cardano (ADA) is a cryptocurrency launched in 2017. Cardano has a current supply of 44,994,851,307.903442 with 35,073,778,164.292411 in circulation. The last known price of Cardano is 0.93836135 USD and is down -11.80 over the last 24 hours. It is currently trading on 1372 active market(s) with $2,895,789,648.87 traded over the last 24 hours. More information can be found at https://www.cardano.org.",
    slug: "cardano",
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png",
    subreddit: "cardano",
    notice: "",
    tags: [
      "dpos",
      "pos",
      "platform",
      "research",
      "smart-contracts",
      "staking",
      "cardano-ecosystem",
      "cardano",
      "layer-1",
      "sec-security-token",
      "alleged-sec-securities",
    ],
    "tag-names": [
      "DPoS",
      "PoS",
      "Platform",
      "Research",
      "Smart Contracts",
      "Staking",
      "Cardano Ecosystem",
      "Cardano",
      "Layer 1",
      "SEC Security Token",
      "Alleged SEC Securities",
    ],
    "tag-groups": [
      "ALGORITHM",
      "ALGORITHM",
      "CATEGORY",
      "INDUSTRY",
      "CATEGORY",
      "CATEGORY",
      "PLATFORM",
      "PLATFORM",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
    ],
    urls: {
      website: ["https://www.cardano.org"],
      twitter: ["https://twitter.com/cardano"],
      message_board: [
        "https://medium.com/feed/cardanorss",
        "https://forum.cardano.org/",
      ],
      chat: ["https://t.me/Cardano"],
      facebook: [],
      explorer: [
        "https://explorer.cardano.org",
        "https://cardanoscan.io/",
        "https://blockchair.com/cardano",
        "https://bscscan.com/token/0x3ee2200efb3400fabb9aacf31297cbdd1d435d47",
        "https://www.okx.com/web3/explorer/bsc/token/0x3ee2200efb3400fabb9aacf31297cbdd1d435d47",
      ],
      reddit: ["https://reddit.com/r/cardano"],
      technical_doc: ["https://docs.cardano.org/en/latest/"],
      source_code: ["https://cardanoupdates.com/"],
      announcement: ["https://t.me/CardanoAnnouncements"],
    },
    platform: null,
    date_added: "2017-10-01T00:00:00.000Z",
    twitter_username: "cardano",
    is_hidden: 0,
    date_launched: "2017-09-01T00:00:00.000Z",
    contract_address: [
      {
        contract_address: "0x3ee2200efb3400fabb9aacf31297cbdd1d435d47",
        platform: {
          name: "BNB Smart Chain (BEP20)",
          coin: { id: "1839", name: "BNB", symbol: "BNB", slug: "bnb" },
        },
      },
      {
        contract_address: "lovelace",
        platform: {
          name: "Cardano",
          coin: { id: "2010", name: "Cardano", symbol: "ADA", slug: "cardano" },
        },
      },
    ],
    self_reported_circulating_supply: null,
    self_reported_tags: ["Communications & Social Media"],
    self_reported_market_cap: null,
    infinite_supply: false,
  },
  "3408": {
    id: 3408,
    name: "USDC",
    symbol: "USDC",
    category: "token",
    description:
      "USDC (USDC) is a cryptocurrency and operates on the Ethereum platform. USDC has a current supply of 38,706,205,909.0516688. The last known price of USDC is 1.00001419 USD and is up 0.01 over the last 24 hours. It is currently trading on 23341 active market(s) with $14,934,204,050.35 traded over the last 24 hours. More information can be found at https://www.usdc.com/.",
    slug: "usd-coin",
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png",
    subreddit: "",
    notice: "",
    tags: [
      "medium-of-exchange",
      "stablecoin",
      "asset-backed-stablecoin",
      "coinbase-ventures-portfolio",
      "solana-ecosystem",
      "hedera-hashgraph-ecosystem",
      "arbitrum-ecosytem",
      "moonriver-ecosystem",
      "bnb-chain",
      "usd-stablecoin",
      "optimism-ecosystem",
      "base-ecosystem",
      "fiat-stablecoin",
    ],
    "tag-names": [
      "Medium of Exchange",
      "Stablecoin",
      "Asset-Backed Stablecoin",
      "Coinbase Ventures Portfolio",
      "Solana Ecosystem",
      "Hedera Hashgraph Ecosystem",
      "Arbitrum Ecosystem",
      "Moonriver Ecosystem",
      "BNB Chain",
      "USD Stablecoin",
      "Optimism Ecosystem",
      "Base Ecosystem",
      "Fiat Stablecoin",
    ],
    "tag-groups": [
      "INDUSTRY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "PLATFORM",
      "PLATFORM",
      "PLATFORM",
      "PLATFORM",
      "PLATFORM",
      "CATEGORY",
      "PLATFORM",
      "PLATFORM",
      "CATEGORY",
    ],
    urls: {
      website: ["https://www.usdc.com/"],
      twitter: ["https://twitter.com/circle"],
      message_board: ["https://medium.com/centre-blog"],
      chat: [],
      facebook: [],
      explorer: [
        "https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
        "https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "https://explorer.solana.com/address/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
        "https://tronscan.org/#/token20/TEkxiTehnzSmSe2XqrBj4w32RUN966rdz8",
        "https://bscscan.com/token/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
      ],
      reddit: [],
      technical_doc: [
        "https://f.hubspotusercontent30.net/hubfs/9304636/PDF/centre-whitepaper.pdf",
      ],
      source_code: ["https://github.com/centrehq/centre-tokens"],
      announcement: [
        "https://blog.circle.com/2018/09/26/introducing-usd-coin/",
      ],
    },
    platform: {
      id: "1027",
      name: "Ethereum",
      slug: "ethereum",
      symbol: "ETH",
      token_address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    },
    date_added: "2018-10-08T00:00:00.000Z",
    twitter_username: "circle",
    is_hidden: 0,
    date_launched: null,
    contract_address: [
      {
        contract_address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        platform: {
          name: "Ethereum",
          coin: {
            id: "1027",
            name: "Ethereum",
            symbol: "ETH",
            slug: "ethereum",
          },
        },
      },
      {
        contract_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
        platform: {
          name: "Solana",
          coin: { id: "5426", name: "Solana", symbol: "SOL", slug: "solana" },
        },
      },
      {
        contract_address: "31566704",
        platform: {
          name: "Algorand",
          coin: {
            id: "4030",
            name: "Algorand",
            symbol: "ALGO",
            slug: "algorand",
          },
        },
      },
      {
        contract_address: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
        platform: {
          name: "BNB Smart Chain (BEP20)",
          coin: { id: "1839", name: "BNB", symbol: "BNB", slug: "bnb" },
        },
      },
      {
        contract_address: "0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83",
        platform: {
          name: "Gnosis Chain",
          coin: {
            id: "1659",
            name: "Gnosis",
            symbol: "GNO",
            slug: "gnosis-gno",
          },
        },
      },
      {
        contract_address: "0xcca4e6302510d555b654b3eab9c0fcb223bcfdf0",
        platform: {
          name: "Viction",
          coin: { id: "2570", name: "Viction", symbol: "VIC", slug: "viction" },
        },
      },
      {
        contract_address: "0x980a5afef3d17ad98635f6c5aebcbaeded3c3430",
        platform: {
          name: "KCC",
          coin: {
            id: "2087",
            name: "KuCoin Token",
            symbol: "KCS",
            slug: "kucoin-token",
          },
        },
      },
      {
        contract_address: "0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d",
        platform: {
          name: "Moonriver",
          coin: {
            id: "9285",
            name: "Moonriver",
            symbol: "MOVR",
            slug: "moonriver",
          },
        },
      },
      {
        contract_address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
        platform: {
          name: "Avalanche C-Chain",
          coin: {
            id: "5805",
            name: "Avalanche",
            symbol: "AVAX",
            slug: "avalanche",
          },
        },
      },
      {
        contract_address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
        platform: {
          name: "Arbitrum",
          coin: {
            id: "11841",
            name: "Arbitrum",
            symbol: "ARB",
            slug: "arbitrum",
          },
        },
      },
      {
        contract_address: "0xe2c120f188ebd5389f71cf4d9c16d05b62a58993",
        platform: {
          name: "Velas",
          coin: { id: "4747", name: "Velas", symbol: "VLX", slug: "velas" },
        },
      },
      {
        contract_address: "0xc21223249CA28397B4B6541dfFaEcC539BfF0c59",
        platform: {
          name: "Cronos",
          coin: { id: "3635", name: "Cronos", symbol: "CRO", slug: "cronos" },
        },
      },
      {
        contract_address: "0x985458e523db3d53125813ed68c274899e9dfab4",
        platform: {
          name: "Harmony",
          coin: { id: "3945", name: "Harmony", symbol: "ONE", slug: "harmony" },
        },
      },
      {
        contract_address: "secret1h6z05y90gwm4sqxzhz4pkyp36cna9xtp7q0urv",
        platform: {
          name: "Secret",
          coin: { id: "5604", name: "Secret", symbol: "SCRT", slug: "secret" },
        },
      },
      {
        contract_address: "TEkxiTehnzSmSe2XqrBj4w32RUN966rdz8",
        platform: {
          name: "Tron20",
          coin: { id: "1958", name: "TRON", symbol: "TRX", slug: "tron" },
        },
      },
      {
        contract_address: "0x66a2A913e447d6b4BF33EFbec43aAeF87890FBbc",
        platform: {
          name: "Boba Network",
          coin: {
            id: "14556",
            name: "Boba Network",
            symbol: "BOBA",
            slug: "boba-network",
          },
        },
      },
      {
        contract_address: "USDC-c76f1f",
        platform: {
          name: "MultiversX",
          coin: {
            id: "6892",
            name: "MultiversX",
            symbol: "EGLD",
            slug: "multiversx-egld",
          },
        },
      },
      {
        contract_address: "0x0b7007c13325c48911f73a2dad5fa5dcbf808adc",
        platform: {
          name: "Ronin",
          coin: { id: "14101", name: "Ronin", symbol: "RON", slug: "ronin" },
        },
      },
      {
        contract_address: "terra1pvel56a2hs93yd429pzv9zp5aptcjg5ulhkz7w",
        platform: {
          name: "Terra Classic",
          coin: {
            id: "4172",
            name: "Terra Classic",
            symbol: "LUNC",
            slug: "terra-luna",
          },
        },
      },
      {
        contract_address: "0x8D97Cea50351Fb4329d591682b148D43a0C3611b",
        platform: {
          name: "Telos",
          coin: { id: "4660", name: "Telos", symbol: "TLOS", slug: "telos" },
        },
      },
      {
        contract_address: "0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b",
        platform: {
          name: "Moonbeam",
          coin: {
            id: "6836",
            name: "Moonbeam",
            symbol: "GLMR",
            slug: "moonbeam",
          },
        },
      },
      {
        contract_address: "0xb12bfca5a55806aaf64e99521918a4bf0fc40802",
        platform: {
          name: "Aurora",
          coin: {
            id: "14803",
            name: "Aurora",
            symbol: "AURORA",
            slug: "aurora-near",
          },
        },
      },
      {
        contract_address: "0xea32a96608495e54156ae48931a7c20f0dcc1a21",
        platform: {
          name: "Metis Andromeda",
          coin: {
            id: "9640",
            name: "Metis",
            symbol: "METIS",
            slug: "metisdao",
          },
        },
      },
      {
        contract_address: "0x620fd5fa44be6af63715ef4e65ddfa0387ad13f5",
        platform: {
          name: "Fuse",
          coin: {
            id: "5634",
            name: "Fuse",
            symbol: "FUSE",
            slug: "fuse-network",
          },
        },
      },
      {
        contract_address: "0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c",
        platform: {
          name: "Oasis Network",
          coin: {
            id: "7653",
            name: "Oasis",
            symbol: "ROSE",
            slug: "oasis-network",
          },
        },
      },
      {
        contract_address: "0x3ad9dfe640e1a9cc1d9b0948620820d975c3803a",
        platform: {
          name: "Avalanche DFK",
          coin: {
            id: "12319",
            name: "DeFi Kingdoms",
            symbol: "JEWEL",
            slug: "defi-kingdoms",
          },
        },
      },
      {
        contract_address: "0xA06be0F5950781cE28D965E5EFc6996e88a8C141",
        platform: {
          name: "Elastos",
          coin: { id: "2492", name: "Elastos", symbol: "ELA", slug: "elastos" },
        },
      },
      {
        contract_address: "0xc946daf81b08146b1c7a8da2a851ddf2b3eaaf85",
        platform: {
          name: "OKExChain",
          coin: { id: "8267", name: "OKT Chain", symbol: "OKT", slug: "okt" },
        },
      },
      {
        contract_address: "0x3b2bf2b523f54c4e454f08aa286d03115aff326c",
        platform: {
          name: "IoTex",
          coin: { id: "2777", name: "IoTeX", symbol: "IOTX", slug: "iotex" },
        },
      },
      {
        contract_address: "0xB44a9B6905aF7c801311e8F4E76932ee959c663C",
        platform: {
          name: "Milkomeda",
          coin: { id: "2010", name: "Cardano", symbol: "ADA", slug: "cardano" },
        },
      },
      {
        contract_address: "0xd86e243fc0007e6226b07c9a50c9d70d78299eb5",
        platform: {
          name: "Meter",
          coin: {
            id: "5919",
            name: "Meter Governance",
            symbol: "MTRG",
            slug: "meter-governance",
          },
        },
      },
      {
        contract_address: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
        platform: {
          name: "Optimism",
          coin: {
            id: "11840",
            name: "Optimism",
            symbol: "OP",
            slug: "optimism-ethereum",
          },
        },
      },
      {
        contract_address:
          "a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.factory.bridge.near",
        platform: {
          name: "Near",
          coin: {
            id: "6535",
            name: "NEAR Protocol",
            symbol: "NEAR",
            slug: "near-protocol",
          },
        },
      },
      {
        contract_address: "0x52a9cea01c4cbdd669883e41758b8eb8e8e2b34b",
        platform: {
          name: "Wanchain",
          coin: {
            id: "2606",
            name: "Wanchain",
            symbol: "WAN",
            slug: "wanchain",
          },
        },
      },
      {
        contract_address: "0x6963efed0ab40f6c3d7bda44a05dcf1437c44372",
        platform: {
          name: "Conflux",
          coin: {
            id: "7334",
            name: "Conflux",
            symbol: "CFX",
            slug: "conflux-network",
          },
        },
      },
      {
        contract_address:
          "0:c37b3fafca5bf7d3704b081fde7df54f298736ee059bf6d32fac25f5e6085bf6",
        platform: {
          name: "Everscale",
          coin: {
            id: "7505",
            name: "Everscale",
            symbol: "EVER",
            slug: "everscale",
          },
        },
      },
      {
        contract_address:
          "ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4",
        platform: {
          name: "Osmosis",
          coin: {
            id: "12220",
            name: "Osmosis",
            symbol: "OSMO",
            slug: "osmosis",
          },
        },
      },
      {
        contract_address: "6XtHjpXbs9RRJP2Sr9GUyVqzACcby9TkThHXnjVC5CDJ",
        platform: {
          name: "Waves",
          coin: { id: "1274", name: "Waves", symbol: "WAVES", slug: "waves" },
        },
      },
      {
        contract_address: "0x765277EebeCA2e31912C9946eAe1021199B39C61",
        platform: {
          name: "Bitgert",
          coin: {
            id: "11079",
            name: "Bitgert",
            symbol: "BRISE",
            slug: "bitrise-token",
          },
        },
      },
      {
        contract_address: "0xBcbd9990dcEC6a64741ea27BeC0cA8ff6B91Bc26",
        platform: {
          name: "Bitcoin Cash",
          coin: {
            id: "1831",
            name: "Bitcoin Cash",
            symbol: "BCH",
            slug: "bitcoin-cash",
          },
        },
      },
      {
        contract_address: "0x765277eebeca2e31912c9946eae1021199b39c61",
        platform: {
          name: "Dogechain(EVM)",
          coin: {
            id: "74",
            name: "Dogecoin",
            symbol: "DOGE",
            slug: "dogecoin",
          },
        },
      },
      {
        contract_address: "0x765277eebeca2e31912c9946eae1021199b39c61",
        platform: {
          name: "KardiaChain",
          coin: {
            id: "5453",
            name: "KardiaChain",
            symbol: "KAI",
            slug: "kardiachain",
          },
        },
      },
      {
        contract_address: "0x80b5a32E4F032B2a058b4F29EC95EEfEEB87aDcd",
        platform: {
          name: "Canto",
          coin: { id: "21516", name: "CANTO", symbol: "CANTO", slug: "canto" },
        },
      },
      {
        contract_address: "0x25de68ef588cb0c2c8f3537861e828ae699cd0db",
        platform: {
          name: "EthereumPoW",
          coin: {
            id: "21296",
            name: "EthereumPoW",
            symbol: "ETHW",
            slug: "ethereum-pow",
          },
        },
      },
      {
        contract_address:
          "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDC",
        platform: {
          name: "Aptos",
          coin: { id: "21794", name: "Aptos", symbol: "APT", slug: "aptos" },
        },
      },
      {
        contract_address: "0x4200000000000000000000000000000000000100",
        platform: {
          name: "Tomb Chain",
          coin: { id: "11495", name: "Tomb", symbol: "TOMB", slug: "tomb" },
        },
      },
      {
        contract_address: "0x22e89898A04eaf43379BeB70bf4E38b1faf8A31e",
        platform: {
          name: "ThunderCore",
          coin: {
            id: "3930",
            name: "ThunderCore",
            symbol: "TT",
            slug: "thundercore",
          },
        },
      },
      {
        contract_address: "0xe46910336479F254723710D57e7b683F3315b22B",
        platform: {
          name: "Evmos",
          coin: { id: "19899", name: "Evmos", symbol: "EVMOS", slug: "evmos" },
        },
      },
      {
        contract_address: "0x2bF9b864cdc97b08B6D79ad4663e71B8aB65c45c",
        platform: {
          name: "Syscoin",
          coin: { id: "541", name: "Syscoin", symbol: "SYS", slug: "syscoin" },
        },
      },
      {
        contract_address: "0xffd7510ca0a3279c7a5f50018a26c21d5bc1dbcf",
        platform: {
          name: "Energi",
          coin: { id: "3218", name: "Energi", symbol: "NRG", slug: "energi" },
        },
      },
      {
        contract_address: "0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98",
        platform: {
          name: "Astar",
          coin: { id: "12885", name: "Astar", symbol: "ASTR", slug: "astar" },
        },
      },
      {
        contract_address: "0xe2aa35c2039bd0ff196a6ef99523cc0d3972ae3e",
        platform: {
          name: "SX Network",
          coin: {
            id: "8377",
            name: "SX Network",
            symbol: "SX",
            slug: "sportx",
          },
        },
      },
      {
        contract_address: "0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d",
        platform: {
          name: "Wemix",
          coin: { id: "7548", name: "WEMIX", symbol: "WEMIX", slug: "wemix" },
        },
      },
      {
        contract_address: "0x1d17CBcF0D6D143135aE902365D2E5e2A16538D4",
        platform: {
          name: "zkSync Era",
          coin: { id: "24091", name: "ZKsync", symbol: "ZK", slug: "zksync" },
        },
      },
      {
        contract_address: "0xfa9343c3897324496a05fc75abed6bac29f8a40f",
        platform: {
          name: "Kava",
          coin: { id: "4846", name: "Kava", symbol: "KAVA", slug: "kava" },
        },
      },
      {
        contract_address: "0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035",
        platform: {
          name: "Polygon zkEVM",
          coin: {
            id: "3890",
            name: "Polygon",
            symbol: "MATIC",
            slug: "polygon",
          },
        },
      },
      {
        contract_address: "0.0.456858",
        platform: {
          name: "Hedera Hashgraph",
          coin: { id: "4642", name: "Hedera", symbol: "HBAR", slug: "hedera" },
        },
      },
      {
        contract_address:
          "0xdba34672e30cb065b1f93e3ab55318768fd6fef66c15942c9f7cb846e2f900e7::usdc::USDC",
        platform: {
          name: "Sui Network",
          coin: { id: "20947", name: "Sui", symbol: "SUI", slug: "sui" },
        },
      },
      {
        contract_address: "0x15d38573d2feeb82e7ad5187ab8c1d52810b1f07",
        platform: {
          name: "PulseChain",
          coin: {
            id: "11145",
            name: "Pulsechain",
            symbol: "PLS",
            slug: "pulsechain",
          },
        },
      },
      {
        contract_address: "0x186181e225dc1ad85a4a94164232bd261e351c33",
        platform: {
          name: "Godwoken",
          coin: {
            id: "4948",
            name: "Nervos Network",
            symbol: "CKB",
            slug: "nervos-network",
          },
        },
      },
      {
        contract_address: "0xea6b04272f9f62f997f666f07d3a974134f7ffb9",
        platform: {
          name: "Neon EVM",
          coin: { id: "23015", name: "Neon EVM", symbol: "NEON", slug: "neon" },
        },
      },
      {
        contract_address:
          "0x53c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8",
        platform: {
          name: "Starknet",
          coin: {
            id: "22691",
            name: "Starknet",
            symbol: "STRK",
            slug: "starknet-token",
          },
        },
      },
      {
        contract_address: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
        platform: {
          name: "Polygon",
          coin: {
            id: "3890",
            name: "Polygon",
            symbol: "MATIC",
            slug: "polygon",
          },
        },
      },
      {
        contract_address: "0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4",
        platform: {
          name: "Scroll",
          coin: { id: "26998", name: "Scroll", symbol: "SCR", slug: "scroll" },
        },
      },
      {
        contract_address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
        platform: {
          name: "Base",
          coin: { id: "27716", name: "Base", symbol: "TBA", slug: "base" },
        },
      },
      {
        contract_address: "0xa4151B2B3e269645181dCcF2D426cE75fcbDeca9",
        platform: {
          name: "Core",
          coin: { id: "23254", name: "Core", symbol: "CORE", slug: "core-dao" },
        },
      },
      {
        contract_address: "0x09bc4e0d864854c6afb6eb9a9cdf58ac190d0df9",
        platform: {
          name: "Mantle",
          coin: { id: "27075", name: "Mantle", symbol: "MNT", slug: "mantle" },
        },
      },
      {
        contract_address: "0xcebA9300f2b948710d2653dD7B07f33A8B32118C",
        platform: {
          name: "Celo",
          coin: { id: "5567", name: "Celo", symbol: "CELO", slug: "celo" },
        },
      },
      {
        contract_address: "peggy0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        platform: {
          name: "Injective",
          coin: {
            id: "7226",
            name: "Injective",
            symbol: "INJ",
            slug: "injective",
          },
        },
      },
      {
        contract_address: "0x3894085ef7ff0f0aedf52e2a2704928d1ec074f1",
        platform: {
          name: "Sei v2",
          coin: { id: "23149", name: "Sei", symbol: "SEI", slug: "sei" },
        },
      },
    ],
    self_reported_circulating_supply: null,
    self_reported_tags: null,
    self_reported_market_cap: null,
    infinite_supply: false,
  },
  "5426": {
    id: 5426,
    name: "Solana",
    symbol: "SOL",
    category: "coin",
    description:
      "Solana (SOL) is a cryptocurrency launched in 2020. Solana has a current supply of 589,037,061.3962497 with 474,830,645.7821652 in circulation. The last known price of Solana is 233.05771981 USD and is down -8.89 over the last 24 hours. It is currently trading on 796 active market(s) with $7,144,884,614.30 traded over the last 24 hours. More information can be found at https://solana.com.",
    slug: "solana",
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png",
    subreddit: "solana",
    notice: "",
    tags: [
      "pos",
      "platform",
      "solana-ecosystem",
      "cms-holdings-portfolio",
      "kenetic-capital-portfolio",
      "alameda-research-portfolio",
      "multicoin-capital-portfolio",
      "okx-ventures-portfolio",
      "layer-1",
      "ftx-bankruptcy-estate",
      "sec-security-token",
      "alleged-sec-securities",
      "cmc-crypto-awards-2024",
    ],
    "tag-names": [
      "PoS",
      "Platform",
      "Solana Ecosystem",
      "CMS Holdings Portfolio",
      "Kenetic Capital Portfolio",
      "Alameda Research Portfolio",
      "Multicoin Capital Portfolio",
      "OKX Ventures Portfolio",
      "Layer 1",
      "FTX Bankruptcy Estate ",
      "SEC Security Token",
      "Alleged SEC Securities",
      "CMC Crypto Awards 2024",
    ],
    "tag-groups": [
      "ALGORITHM",
      "CATEGORY",
      "PLATFORM",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
      "CATEGORY",
    ],
    urls: {
      website: ["https://solana.com"],
      twitter: ["https://twitter.com/solana"],
      message_board: ["https://solana.com/news", "https://forums.solana.com"],
      chat: ["https://solana.com/discord", "https://t.me/solana"],
      facebook: [],
      explorer: [
        "https://solscan.io/token/So11111111111111111111111111111111111111111",
        "https://explorer.solana.com",
        "https://solana.fm/",
        "https://solscan.io/",
        "https://solanabeach.io",
      ],
      reddit: ["https://reddit.com/r/solana"],
      technical_doc: ["https://solana.com/solana-whitepaper.pdf"],
      source_code: ["https://github.com/solana-labs"],
      announcement: [],
    },
    platform: {
      id: "5426",
      name: "Solana",
      slug: "solana",
      symbol: "SOL",
      token_address: "So11111111111111111111111111111111111111111",
    },
    date_added: "2020-04-10T00:00:00.000Z",
    twitter_username: "solana",
    is_hidden: 0,
    date_launched: "2020-03-16T00:00:00.000Z",
    contract_address: [
      {
        contract_address: "So11111111111111111111111111111111111111111",
        platform: {
          name: "Solana",
          coin: { id: "5426", name: "Solana", symbol: "SOL", slug: "solana" },
        },
      },
    ],
    self_reported_circulating_supply: null,
    self_reported_tags: null,
    self_reported_market_cap: null,
    infinite_supply: true,
  },
};

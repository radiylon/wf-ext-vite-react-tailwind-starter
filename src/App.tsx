import { useState, useEffect } from 'react'

const getSiteInfo = async () => {
  const siteInfo = await webflow.getSiteInfo();
  console.log(siteInfo);
  return siteInfo;
}

type SiteInfo = Awaited<ReturnType<typeof getSiteInfo>>;

function App() {
  const [siteInfo, setSiteInfo] = useState<SiteInfo>();

  useEffect(() => {
    webflow.setExtensionSize('large');
    getSiteInfo().then((info) => setSiteInfo(info));
  }, []);

  return (
    <div className='bg-gray-800 text-white flex flex-col items-center w-full p-4 min-h-screen'>
      <h1 className='text-4xl font-bold mb-6 text-blue-400'>{siteInfo?.siteName}</h1>
      <div className='max-w-2xl w-full text-left bg-gray-900 p-6 rounded-lg'>
        <pre className="whitespace-pre-wrap text-gray-200">{JSON.stringify(siteInfo, null, 2)}</pre>
      </div>
    </div>
  )
}

export default App
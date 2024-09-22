import { useEffect, useRef } from 'react';
import { SkillsMarqueeItems } from '../contents'

const SkillsMarquee = () => {
  const logosRef = useRef(null);

  useEffect(() => {
    let ul = logosRef.current;
    ul.insertAdjacentHTML('afterend', ul.outerHTML);
    ul.nextSibling.setAttribute('aria-hidden', 'true');
  }, []);

  return (
    <div className="w-full max-h-11 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul ref={logosRef} className="flex items-center justify-center md:justify-start [&_li]:px-1 [&_li]:whitespace-nowrap [&_li]:text-sm animate-infinite-scroll">
        {SkillsMarqueeItems.map((item, i) => (
            <li className='[&_b]:text-white after:content-starIcon after:relative after:left-1'
                key={i} 
                dangerouslySetInnerHTML={{ __html: item }}></li>
        ))}        
      </ul>
    </div>
  );
};

export default SkillsMarquee;

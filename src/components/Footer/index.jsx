import './styles.scss';

import VkSvg from './vk.svg';
import githubSvg from './github.svg';
import telegramSvg from './telegram.svg';
import linkedinSvg from './linkedin.svg';
import instagramSvg from './instagram.svg';

const Footer = () => {
  return (
    <div className="footer">
      <a href="https://vk.com/sotnya_rek" target="_blank">
        <img src={VkSvg} alt="VK" />
      </a>
      <a href="https://github.com/ROREYO" target="_blank">
        <img src={githubSvg} alt="GitHub" />
      </a>
      <a href="https://t.me/rey_0o0" target="_blank">
        <img src={telegramSvg} alt="Telegram" />
      </a>
      <a href="https://www.linkedin.com/in/dmitry-dyak-a44b07253/" target="_blank">
        <img src={linkedinSvg} alt="LinkedIn" />
      </a>
      <a href="https://www.instagram.com/sotnya_rek/" target="_blank">
        <img src={instagramSvg} alt="instagram" />
      </a>
    </div>
  );
};

export default Footer;

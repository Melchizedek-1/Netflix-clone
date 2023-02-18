import React from 'react'
import { FaFacebook, FaPinterest, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { HiPlusCircle } from 'react-icons/hi'
import { MdEmail } from 'react-icons/md'
import { EmailShareButton, FacebookShareButton, PinterestIcon, TelegramShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share'
import { Input } from '../UsedInputs'
import MainModal from './MainModal'

const ShareModal = ({ modalOpen, setModalOpen, movie }) => {
    const shareData = [
        {
            icon: FaFacebook,
            shareButton: FacebookShareButton,
        },
        {
            icon: FaTwitter,
            shareButton: TwitterShareButton,
        },
        {
            icon: FaTelegram,
            shareButton: TelegramShareButton,
        },
        {
            icon: FaWhatsapp,
            shareButton: WhatsappShareButton,
        },
        {
            icon: FaPinterest,
            shareButton: PinterestIcon,
        },
        {
            icon: MdEmail,
            shareButton: EmailShareButton,
        },
    ];

    const url = `${window.location.protocol}//${window.location.host}/movie/${movie.name}`;

  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <div className='inline-block sm:w-4/5 border border-border md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-auto h-full bg-main text-white rounded-2xl'>
            <h2 className='text-2xl'>Share <span className='text-xl font-bold'>"{movie?.name}"</span></h2>
            <form className='flex flex-rows gap-6 text-left mt-6'>
                {shareData.map((data, index) => (
                    <data.shareButton key={index} url={url} quote="Wesonga | Movies site">
                        <div className='w-12 transitions hover:bg-subMain flex-colo text-lg h-12 bg-white rounded bg-opacity-30'>
                            <data.icon />
                        </div>
                    </data.shareButton>
                ))}
            </form>
        </div>
    </MainModal>
  )
}

export default ShareModal
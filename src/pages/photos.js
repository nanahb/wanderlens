import React, { useState } from 'react';
import Layout from '../components/layout'
import Photogrid from '../components/photogrid'
import { PhotoModal } from '../components/PhotoModal';
//Photos Page component
const Photos = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const onPhotoClick = (imageData) => {
    setModalIsOpen(true)
    setModalImage(imageData)
  }
  let pageContent
  if (modalIsOpen) {
    pageContent = (
    <div>
      <PhotoModal gatsbyImage={modalImage} onClose={()=>setModalIsOpen(false)}></PhotoModal> 
    </div>)
  }

  return (
    <Layout pageTitle={"Photos"}>
      {pageContent}
      <main>
        <Photogrid onPhotoClick={onPhotoClick}></Photogrid>
      </main>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

// Step 3: Export your component
export default Photos
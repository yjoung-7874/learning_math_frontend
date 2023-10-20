import React, {useState} from "react"
import { useSelector, shallowEqual } from 'react-redux';
import { Spin } from 'antd';

import BookmarkedList from '../../Component/List/BookmarkedList'
import BookmarkModal from "../../Component/Modal/BookmarkModal"

export default function Bookmark () {
    const [isBookmarkModalOpen, setIsBookmarkModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(<></>);

    const closeBookmarkModal = () => {setIsBookmarkModalOpen(false)};
    
    const { isLoading } = useSelector((state) => {
        let isLoading = state.data.isLoading
        return { 
          isLoading: isLoading
        }
      }, shallowEqual)

    return ( <>
        {isLoading ? <Spin /> : 
        <>
            <BookmarkedList onItemClicked={()=>setIsBookmarkModalOpen(true)} setModalContent={setModalContent}/>
            <BookmarkModal open={isBookmarkModalOpen} onClosed={closeBookmarkModal} modalContent = {modalContent}/>
        </>}
        </>
    )
}
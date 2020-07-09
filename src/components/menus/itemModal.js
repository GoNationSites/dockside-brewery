import React from "react"

const ItemModal = ({ data, setModalActive }) => {
  return (
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-content">
        <p class="image is-4by3">
          <img src={data.imageUrl} alt={data.name} />
        </p>
      </div>
      {/* <button class="modal-close is-large" aria-label="close" onClick={() => setModalActive('')}></button> */}
    </div>
  )
}

export default ItemModal

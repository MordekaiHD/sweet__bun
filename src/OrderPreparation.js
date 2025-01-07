// import React, { useState } from "react";

// function OrderPreparation() {
//   const [file, setFile] = useState(null); // Для хранения загруженного файла
//   const [preview, setPreview] = useState(""); // Для предпросмотра изображения

//   const handleFileChange = (event) => {
//     const selectedFile = event.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);

//       // Создаем URL для предпросмотра изображения
//       const filePreview = URL.createObjectURL(selectedFile);
//       setPreview(filePreview);
//     }
//   };

//   const handleSubmit = () => {
//     if (!file) {
//       alert("Пожалуйста, загрузите фотографию или эскиз перед отправкой.");
//       return;
//     }
//     alert(`Ваш файл "${file.name}" успешно загружен. Мы рассчитаем стоимость в ближайшие 30 минут.`);
//     setFile(null); // Очистка состояния после отправки
//     setPreview(""); // Очистка предпросмотра
//   };

//   return (
//     <div className="main__order__preparation">
//       <img
//         className="main__order__preparation-img"
//         src="phone.svg"
//         alt="phone"
//       />
//       <div className="main__order__preparation__info">
//         <p className="main__order__preparation__info-title">
//           Приготовим заказ любой сложности по фото или эскизу
//         </p>
//         <p className="main__order__preparation__info-text">
//           Загрузите фотографию или эскиз капкейков, и мы рассчитаем стоимость за
//           30 минут
//         </p>
//         <input
//           type="file"
//           accept="image/*"
//           id="fileInput"
//           style={{ display: "none" }}
//           onChange={handleFileChange}
//         />
//         <button
//           className="main__order__preparation__info-button"
//           onClick={() => document.getElementById("fileInput").click()}
//         >
//           Загрузить фотографию
//         </button>
//         {preview && (
//           <div className="main__order__preparation__preview">
//             <p>Предпросмотр:</p>
//             <img
//               src={preview}
//               alt="Preview"
//               className="main__order__preparation__preview-img"
//             />
//             <button
//               className="main__order__preparation__info-submit"
//               onClick={handleSubmit}
//             >
//               Отправить файл
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default OrderPreparation;


import React, { useState } from "react";

function OrderPreparation() {
  const [file, setFile] = useState(null); // Для хранения загруженного файла
  const [preview, setPreview] = useState(""); // Для предпросмотра изображения
  const [successMessage, setSuccessMessage] = useState(""); // Для сообщения после отправки

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);

      // Создаем URL для предпросмотра изображения
      const filePreview = URL.createObjectURL(selectedFile);
      setPreview(filePreview);

      // Очищаем предыдущее сообщение
      setSuccessMessage("");
    }
  };

  const handleSubmit = () => {
    if (!file) {
      alert("Пожалуйста, загрузите фотографию или эскиз перед отправкой.");
      return;
    }

    // Устанавливаем сообщение об успешной загрузке
    setSuccessMessage(`Ваше фото успешно загруженно. Мы рассчитаем стоимость в ближайшие 30 минут.`);

    // Сбрасываем состояние файла и предпросмотра
    setFile(null);
    setPreview("");
  };

  return (
    <div className="main__order__preparation">
      <img
        className="main__order__preparation-img"
        src="phone.svg"
        alt="phone"
      />
      <div className="main__order__preparation__info">
        <p className="main__order__preparation__info-title">
          Приготовим заказ любой сложности по фото или эскизу
        </p>
        <p className="main__order__preparation__info-text">
          Загрузите фотографию или эскиз капкейков
        </p>
        <input
          type="file"
          accept="image/*"
          id="fileInput"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <button
          className="main__order__preparation__info-button"
          onClick={() => document.getElementById("fileInput").click()}
        >
          Загрузить фотографию
        </button>
        {preview && (
          <div className="main__order__preparation__preview">
            <p>Предпросмотр:</p>
            <img
              src={preview}
              alt="Preview"
              className="main__order__preparation__preview-img"
            />
            <button
              className="main__order__preparation__info-submit"
              onClick={handleSubmit}
            >
              Отправить файл
            </button>
          </div>
        )}
        {successMessage && (
          <p className="main__order__preparation__success">{successMessage}</p>
        )}
      </div>
    </div>
  );
}

export default OrderPreparation;

<script>
import { ref } from "vue";
import img1 from "../../assets/image/001.jpg";
import img2 from "../../assets/image/highschool.png";
import img3 from "../../assets/image/shakespear.jpg";
import img4 from "../../assets/image/eva2.jpg";
import img5 from "../../assets/image/nanshan.jpg";
import img6 from "../../assets/image/java_class_1.jpg";
import img7 from "../../assets/image/iisi_1.jpg";
import img8 from "../../assets/image/iisi_2.jpg";
import img9 from "../../assets/image/cat.jpg";

export default {
  setup() {
    const pages = ref([
      { title: "我是鐘凰喜", content: "<b>叫我阿喜就好啦~</b>", image: img1 },
      {
        title: "學歷(高中時期)",
        content:
          "<h3>2011/9~2014/6</h3>台中女中畢業。<br>對自己的評價就是<b>努力型人格</b>。<br> 高一數學曾經在指數對數那個章節只拿了12分，全班最低分。<br> 但卻被幸運女神眷顧，在指考的時候考太好<br>以至於誤打誤撞讀了自己好沒興趣的外文系TT",
        image: img2,
      },
      {
        title: "學歷(大學時期)",
        content:
          "<h3>2018/6~2014/9</h3>畢業於台大外文系<br>(我不要再讀莎士比亞了啦~)",
        image: img3,
      },
      {
        title: "職涯起點 - 長榮航空(國際客服)",
        content:
          "<h3>2018/8~2020/2</h3><b>長榮航空您好! 308專員，敝姓鐘!您好!</b><br>" +
          "1. 與全球客戶溝通，處理航班與服務問題<br>" +
          "2. 培養跨文化溝通能力與客戶服務經驗<br>" +
          "<b>出社會第一年就遇到長榮空姐大罷工，被全世界的旅客罵的咪咪冒冒</b><br>" +
          "但也讓我學習到什麼樣的溝通方式才是溫柔有效，並能撫慰人心的<br>",
        image: img4,
      },
      {
        title: "轉職 - 南山人壽（保戶服務專員）",
        content:
          "<h3>2020/6~2021/3</h3>因為疫情，所以我開始思考轉職。<br>" +
          "我來到了<b>南山人壽</b>，負責契約變更業務。<br> 剛好遇到公司導入新的ERP系統，導致業務處理流程極度不順利@@ <br> 不過也因為常需要與工程師們回報問題，因此接觸到了軟體開發領域",
        image: img5,
      },
      {
        title: "北科大JAVA轉職專班",
        content:
          "<h3>2021/6~2022/11</h3>後來，因緣際會下，<br>我得知了全端轉值班的資訊<br>我利用半年時間修讀轉職專班，學習全端開發技術，<br>並成功轉職至資拓宏宇擔任全端工程師。",
        image: img6,
      },
      {
        title: "資拓宏宇",
        content:
          "<h3>2023/1~2024/8</h3><b> 專案一：財政部資訊中心系統開發與維運 </b><br>1. 內部搭建 Docker，匯入不敏感資料進行開發<br>2. 與中華電信合作，透過 Azure 整合程式碼<br>3. 進行系統上線、維運及弱點掃描處理",
        image: img7,
      },
      {
        title: "資拓宏宇",
        content:
          "<h3>2023/1~2024/8</h3><b> 專案二：內政部地址辨識系統 </b><br> 負責將原本儲存在etl工具的地址辨識邏輯轉為 Java 程式，提供即時查詢<br>減少對批次處理的依賴，提高查詢效率",
        image: img8,
      },
      {
        title: "謝謝願意停下腳步、認識阿喜的 每個你，啾咪><",
        content: "",
        image: img9,
      },
    ]);

    const currentPage = ref(0);

    const nextPage = () => {
      if (currentPage.value < pages.value.length - 1) {
        currentPage.value++;
      }
    };

    const prevPage = () => {
      if (currentPage.value > 0) {
        currentPage.value--;
      }
    };

    return { pages, currentPage, nextPage, prevPage };
  },
};
</script>

<template>
  <div class="container">
    <transition name="fade">
      <div v-if="pages[currentPage]" class="page">
        <h3>{{ pages[currentPage].title }}</h3>
        <img
          :src="pages[currentPage].image"
          alt="Page Image"
          class="page-image"
          loading="lazy"
        />
        <p v-html="pages[currentPage].content"></p>
      </div>
    </transition>

    <div class="buttons">
      <button @click="prevPage" :disabled="currentPage === 0">上一頁</button>
      <button @click="nextPage" :disabled="currentPage === pages.length - 1">
        下一頁
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 40px auto;
  padding: 20px;
  background: #f0f4f8;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Reduced the spread of the shadow */
  text-align: center;
}

.page {
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); /* Softer, smaller shadow */
  margin-bottom: 30px;
  padding: 20px;
  font-size: 18px;
  line-height: 1.8;
  transition: transform 0.3s ease;
}

.page:hover {
  transform: scale(1.02);
}

.page h3 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #2c3e50;
}

.page p {
  color: #34495e;
}

.page-image {
  width: 100%;
  height: 300px;
  object-fit: contain;
  border-radius: 10px;
  margin-bottom: 15px;
}

.buttons {
  margin-top: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  gap: 20px;
}

button {
  margin: 10px;
  padding: 12px 25px;
  border: none;
  background: #2e3a59;
  color: white;
  cursor: pointer;
  border-radius: 50px;
  font-size: 16px;
  transition: background 0.3s ease;
  width: 140px; /* Make the button width consistent */
}

button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background: #1f2a43;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container,
  .page {
    padding: 15px;
  }

  .page-image {
    height: 250px;
  }

  button {
    padding: 10px 20px;
    font-size: 14px;
  }
}
</style>

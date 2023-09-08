import anh1 from "../assets/img/1.jpg";
import anh2 from "../assets/img/2.jpg";
import meal from "../assets/img/meal.jpg";
import anh4 from "../assets/img/4.jpg";
import ocChoThanhMai from "../assets/img/óc.jpg";

const Mit = () => {
  return (
    <>
      <div className="mit pageWrapper">
        <header>
          <h1 title="háp bi bớt đâyy">Mít béo chúc mừng sinh nhật Hùng Ỉa</h1>
        </header>
        <h2 title="CỨT">Dear Hùng,</h2>
        <p className="text">
          Hê lu <b>Cún</b>, <b>Mít</b> đây. Viết thư tay xưa rồi, nên 1 tuần qua
          tớ ngồi học HTML để viết cho cậu thư web nè, giỏi khum kakak. Đầu tiên
          trước khi đọc, hãy nghe
          <a href="https://www.youtube.com/watch?v=p_7dKsgXgV8" target="_blank">
            bài này
          </a>
          nha. <br />
          <strong>Happy 20!</strong> Đến thời điểm này có lẽ t đã chúc m đủ thứ
          rồi.
          <br />
          Nhưng có vài thứ t muốn nói nữa, t gửi lời qua đây nhé. <br />
          Mai là ngày của m, have your moment and be happier a bit alright?{" "}
          <br />
          Dù là sinh nhật hay bất kì ngày nào,
          <em>đừng quên quan tâm và yêu bản thân mình nhé. </em> <br />
          Anyways, proud to go through 20 with you, 20 is a special phase where
          things can change a lot and fast, <br />I wish you find what you
          really love and passionate about, I trust you with that and I truly
          believe in you, if anytime things get hard,{" "}
          <em>I'd always be here for you.</em>
          <br />
          I'm still a 20 year old child that's learning how to love her lover
          the right way; but most importantly, I hope our love sets us free.{" "}
          <br />
          Thế thui, nãy t cũng nói nhiều rùi, tóm lại, t mong m tìm được thứ m
          trân quý, m tìm được tự do cho mình, và được sống là mình, nhá. <br />
          <br />
        </p>
        <br />
        <p className="text">
          <strong>My memory capsule of us:</strong> <br />
          <br />
          - Discussing statistics all day and night <br />
          - My Fin300, Fin400 summer with you <br />
          - You teaching me Fin300 at that cafe <br />
          - Your butt cheeks hold my hand <br />- I step on your feet while us
          dancing to the music.
        </p>
        <h3>
          <ins>A picture library:</ins>
        </h3>
        <img src={anh1} alt="đuýt thối" /> <br />
        <p style={{ textAlign: "center" }} className="mit__label">
          CÁI TAY!
        </p>
        <br />
        <img src={anh2} alt="ăn kem cá" /> <br />
        <p style={{ textAlign: "center" }} className="mit__label">
          Kem cá ngoăn
        </p>
        <br />
        <img src={meal} alt="ngon" /> <br />
        <p style={{ textAlign: "center" }} className="mit__label">
          Sốt khoai và nước hầm rau củ
        </p>
        <br />
        <img src={anh4} alt="GÀ" /> <br />
        <p style={{ textAlign: "center" }} className="mit__label">
          m ko thoát được anh gà đâu
        </p>
        <br />
        <img src={ocChoThanhMai} alt="kì vl" /> <br />
        <p style={{ textAlign: "center" }} className="mit__label">
          tha tao
        </p>
        <br />
        <div style={{ textAlign: "center", fontFamily: "Tahoma" }}>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
            NHẤN CÁI NÀY MAU
          </a>
        </div>
        <br />
        <div style={{ textAlign: "center", fontFamily: "Tahoma" }}>
          <button>BOAI</button>
        </div>
        <p
          style={{
            fontSize: "large",
            color: "palevioletred",
            paddingTop: "50px",
            paddingBottom: "50px",
          }}
        >
          <em>HAPPY 20, I LOVE YOU BABYYYY</em>
        </p>
      </div>
    </>
  );
};

export default Mit;

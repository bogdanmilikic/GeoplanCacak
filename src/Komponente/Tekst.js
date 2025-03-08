const tekstLista = [
  {
    id: 0,
    srpski: (
      <>
        <p className="sadrzajNaslov">О нама</p>
        <hr />
        <p className="sadrzaj">
          Геодетски биро ГЕОПЛАН основан је с циљем пружања врхунских геодетских
          услуга које задовољавају највише стандарде у струци.
          <br />
          Наш тим чине искусни геодети са дугогодишњим искуством, посвећени
          прецизности и професионализму у сваком пројекту.
          <br />
          Користимо најмодернију опрему и технологију како бисмо обезбедили
          поуздане резултате и испунили специфичне захтеве наших клијената.
          <br />
          Без обзира на величину пројекта, приступамо сваком задатку с истом
          пажњом и посвећеношћу. Кроз године рада стекли смо поверење многих
          клијената захваљујући стручности, тачности и брзим роковима.
          <br />
          Наша мисија је да будемо ваш поуздан партнер у свим геодетским
          пословима, осигуравајући квалитетне резултате који подржавају ваше
          пројекте. Верујемо у важност прецизности, транспарентности и
          континуираног усавршавања, како бисмо остали лидери у области
          геодезије.
        </p>
      </>
    ),
    engleski: (
      <>
        <p className="sadrzajNaslov">About</p>
        <hr />
        <p className="sadrzaj">
          The geodetic office GEOPLAN was founded with the goal of providing
          top-quality geodetic services that meet the highest industry
          standards.
          <br />
          Our team consists of experienced surveyors with years of expertise,
          dedicated to precision and professionalism in every project.
          <br />
          We use the most modern equipment and technology to ensure reliable
          results and meet the specific requirements of our clients.
          <br /> Regardless of the project size, we approach every task with the
          same care and dedication. Over the years, we have gained the trust of
          many clients thanks to our expertise, accuracy, and fast deadlines.
          <br />
          Our mission is to be your reliable partner in all geodetic services,
          ensuring high-quality results that support your projects. We believe
          in the importance of precision, transparency, and continuous
          improvement to remain leaders in the field of geodesy.
        </p>
      </>
    ),
  },
  {
    id: 1,
    srpski: (
      <>
        {" "}
        <p className="sadrzajNaslov">Услуге</p>
        <hr />
        <p className="sadrzaj">
          Добродошли у наш биро, где спој геодезије и архитектуре доноси
          прецизна и креативна решења за ваш простор.
          <br /> Наш биро пружа свеобухватне геодетске услуге које гарантују
          прецизност и поузданост у сваком пројекту.
        </p>
        <p className="sadrzaj" style={{ marginTop: "-30px" }}>
          Нудимо:
          <ul style={{ marginLeft: "50px" }}>
            {" "}
            <li> Пројекте геодетског обележавања</li>
            <li>Парцелизацију и физичке деобе</li>
            <li> Снимање објеката и изведеног стања </li>
            <li> Судска вештачења</li>
            <li>Омеђавање</li>
            <li> Израду геодетских подлога за пројектовање</li>
            <li> Преношење пројектованог стања на терен</li>
          </ul>
        </p>
        <p className="sadrzaj" style={{ marginTop: "-30px" }}>
          Поред геодетских услуга, пружамо и широк спектар архитектонских
          услуга:
          <ul style={{ marginLeft: "50px", marginBottom: "10px" }}>
            <li> Идејна решења за све типове објеката</li>{" "}
            <li>
              {" "}
              Израда техничке документације за објекте и партерно уређење{" "}
            </li>
            <li>
              {" "}
              Израда извештаја о затеченом стању објекта за потребе озакоњења
              објекта
            </li>{" "}
            <li>Пројектовање ентеријера прилагођено вашим потребама</li>
          </ul>{" "}
          Наш тим комбинује техничку прецизност и креативност како би сваки
          пројекат био функционалан, естетски усаглашен и у складу са свим
          прописима. <br />
          Било да вам је потребна правна сигурност ваше непокретности, израда
          пројеката или теренски радови високе тачности, наш тим стоји вам на
          располагању.
        </p>
      </>
    ),
    engleski: (
      <>
        {" "}
        <p className="sadrzajNaslov">Services</p>
        <hr />
        <p className="sadrzaj">
          Welcome to our office, where the fusion of geodesy and architecture
          brings precise and creative solutions for your space.
          <br />
          Our office provides comprehensive geodetic services that ensure
          accuracy and reliability in every project.
        </p>
        <p className="sadrzaj" style={{ marginTop: "-30px" }}>
          We offer:
          <ul style={{ marginLeft: "50px" }}>
            {" "}
            <li>Geodetic marking projects</li>
            <li>Parcelization and physical division</li>
            <li> Object surveying and as-built documentation </li>
            <li> Court expertise</li>
            <li>Boundary determinations</li>
            <li> Preparation of geodetic bases for design</li>
            <li>Transferring the designed state to the field</li>
          </ul>
        </p>
        <p className="sadrzaj" style={{ marginTop: "-30px" }}>
          In addition to geodetic services, we also provide a wide range of
          architectural services:
          <ul style={{ marginLeft: "50px", marginBottom: "10px" }}>
            <li> Conceptual designs for all types of buildings</li>{" "}
            <li>
              {" "}
              Preparation of technical documentation for buildings and landscape
              planning{" "}
            </li>
            <li>
              {" "}
              Reports on the current state of buildings for legalization
              purposes
            </li>{" "}
            <li> Interior design tailored to your needs</li>
          </ul>{" "}
          Our team combines technical precision and creativity to ensure that
          every project is functional, aesthetically harmonious, and compliant
          with all regulations. <br />
          Whether you need legal security for your property, project
          development, or high-precision fieldwork, our team is at your service.
        </p>
      </>
    ),
  },
];
export default tekstLista;

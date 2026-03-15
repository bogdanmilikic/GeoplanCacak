const tekstLista = [
  {
    id: 0,
    srpski: (
      <>
        <p className="sadrzajNaslov">О нама</p>
        <hr />
        <p className="sadrzaj">
          Добродошли у геодетски биро који је основан 1998. године у Чачку.
          <br /> Наш биро пружа свеобухватне геодетске услуге које гарантују
          прецизност и поузданост у сваком пројекту.
        </p>

        <div className="sadrzaj" style={{ marginTop: "-30px" }}>
          Нудимо:
          <ul style={{ marginLeft: "50px" }}>
            <li>
              Консултације - проверавамо статус парцела и услове за парцелације
              и изградњу објеката
            </li>
            <li>Пројекте геодетског обележавања</li>
            <li>Парцелацију и физичке деобе</li>
            <li>Геодетски послови за потребе добијања грађевинске дозволе</li>
            <li>Геодетски послови за потребе добијања употребне дозволе</li>
            <li>
              Снимање изведеног стања (објеката високоградње и нискоградње,
              топографије терена...)
            </li>
            <li>Судска вештачења</li>
            <li>Омеђавања</li>
            <li>Израду геодетских подлога за пројектовање</li>
            <li>Преношење пројектованог стања на терен</li>
          </ul>
        </div>

        <p className="sadrzaj">
          Наш тим гарантује уговорене рокове и техничку прецизност како би сваки
          пројекат био у складу са свим прописима. Било да вам је потребна
          правна сигурност ваше непокретности, израда пројеката или теренски
          радови високе тачности, наш тим стоји вам на располагању.
        </p>
      </>
    ),
    engleski: (
      <>
        <p className="sadrzajNaslov">About</p>
        <hr />
        <p className="sadrzaj">
          Welcome to a surveying bureau founded in 1998 in Čačak.
          <br /> Our bureau provides comprehensive surveying services that
          guarantee precision and reliability in every project.
        </p>

        <div className="sadrzaj" style={{ marginTop: "-30px" }}>
          We offer:
          <ul style={{ marginLeft: "50px" }}>
            <li>
              Consultations – we check parcel status and conditions for land
              subdivision and construction
            </li>
            <li>Geodetic marking projects</li>
            <li>Parcel subdivision and physical land division</li>
            <li>
              Surveying services required for obtaining a construction permit
            </li>
            <li>Surveying services required for obtaining a usage permit</li>
            <li>
              Surveying of the as-built condition (buildings, infrastructure,
              terrain topography...)
            </li>
            <li>Court expert assessments</li>
            <li>Boundary marking</li>
            <li>Preparation of geodetic bases for design</li>
            <li>Transferring designed plans to the field</li>
          </ul>
        </div>

        <p className="sadrzaj">
          Our team guarantees agreed deadlines and technical precision so that
          every project complies with all regulations. Whether you need legal
          security for your property, project preparation, or high-precision
          field work, our team is at your service.
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
        <div className="sadrzaj" style={{ marginTop: "-30px" }}>
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
        </div>
        <div className="sadrzaj" style={{ marginTop: "-30px" }}>
          Поред геодетских услуга, пружамо и широк спектар архитектонских
          услуга:
          <ul>
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
        </div>
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
        <div className="sadrzaj" style={{ marginTop: "-30px" }}>
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
        </div>
        <div className="sadrzaj" style={{ marginTop: "-30px" }}>
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
        </div>
      </>
    ),
  },
];
export default tekstLista;

import picture from "../assets/me.jpg";
const AboutMe = () => {
  return (
    <main className="_code_style">
      <h1 className="_comment">{"// ABOUT_ME"}</h1>
      <img className="picture" src={picture} alt="me" />
      <p>
        Attualmente sto seguendo il percorso di full-stack developer sulla
        piattaforma Star2Impact. Sono diplomato in Design e Architettura. Ho
        imparato da auto didatta ad utilizzare diversi software, principalmente
        Blender per la crazione di modelli 3D e render, Photoshop per la
        post-produzione di fotografie e fotoritocco. Recentemente mi sono
        avvicinato al mondo del coding con FreeCodeCamp, ottenendo il
        certificato in responsive-web-design. Ho una mentalità aperta, imparare
        cose nuove mi stimola e la mia sfida personale è cercare una soluzione
        funzionale ai problemi derivati da un progetto.
      </p>
    </main>
  );
};

export default AboutMe;

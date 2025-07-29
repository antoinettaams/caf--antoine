'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaFacebookF, FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa';
import { MdSend } from 'react-icons/md';

const ContactPage: React.FC = () => {
  // &Eacute;tat pour le formulaire
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    sujet: 'question',
    message: '',
    newsletter: false,
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Envoi en cours...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message envoy&eacute; avec succ&egrave;s ! Nous vous r&eacute;pondrons bient&ocirc;t.');
        setFormData({ nom: '', prenom: '', email: '', telephone: '', sujet: 'question', message: '', newsletter: false });
      } else {
        const errorData = await response.json();
        setStatus(`&Eacute;chec de l&apos;envoi : ${errorData.message || 'Une erreur est survenue.'}`);
      }
    } catch (error) {
      console.error("Erreur lors de l&apos;envoi du message:", error);
      setStatus('&Eacute;chec de l&apos;envoi du message. Veuillez r&eacute;essayer plus tard.');
    }
  };

  return (
    <>
      <Head>
        <title>Contact - Caf&eacute; Antoine</title>
        <meta name="description" content="Contactez Caf&eacute; Antoine pour toute question, r&eacute;servation ou suggestion. Trouvez nos coordonn&eacute;es et un formulaire de contact." />
      </Head>

      <main>
        {/* Section Contact Header */}
        <section
          className="bg-principal text-cream py-10 min-h-[40vh] flex items-center justify-center"
        >
          <div
            className="flex flex-col md:flex-row justify-between items-center p-4 md:px-10 lg:px-40 gap-10 w-full"
          >
            <div className="text-left lg:w-1/2">
              <p>
                <svg
                  width="100"
                  height="20"
                  viewBox="0 0 100 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0,10 Q12.5,0 25,10 T50,10 T75,10 T100,10"
                    stroke="#fffdf7"
                    strokeWidth="4"
                    fill="none"
                  />
                </svg>
              </p>
              <h2 className="text-xl m-2">Nous contacter</h2>
              <h2
                className="text-5xl md:text-5xl font-bold m-2 font-amatic"
              >
                CONTACTEZ-<br />NOUS
              </h2>
              <h3 className="text-xl lg:text-2xl m-2 mb-4">
                Nous sommes &agrave; votre &eacute;coute pour toutes vos questions, r&eacute;servations ou suggestions.
              </h3>
              <p className="flex justify-end">
                <svg
                  width="100"
                  height="20"
                  viewBox="0 0 100 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0,10 Q12.5,0 25,10 T50,10 T75,10 T100,10"
                    stroke="#fffdf7"
                    strokeWidth="4"
                    fill="none"
                  />
                </svg>
              </p>
            </div>

            {/* Image de contact */}
            <div className="flex items-center justify-end w-full lg:w-1/2">
              <Image
                src="/assets/images/cafe2.jpg"
                alt="Image du caf&eacute;"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </section>

        <section className="bg-[#bb3b2b] text-black py-10">
          <div className="container mx-auto px-4 md:px-10 lg:px-40">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="w-full md:w-1/2 bg-cream p-6 rounded-lg">
                <h2 className="text-4xl font-bold text-[#bb3b2b] font-amatic mb-6">Nos coordonn&eacute;es</h2>

                <div className="space-y-6">
                  {/* Adresse */}
                  <div className="flex items-start gap-4">
                    <div className="bg-[#bb3b2b] rounded-full p-3 text-cream">
                      <FaMapMarkerAlt className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#bb3b2b]">Adresse</h3>
                      <p className="text-gray-700">Cotonou Fidjross&egrave;</p>
                      <p className="text-gray-700">B&eacute;nin, Calavi</p>
                    </div>
                  </div>

                  {/* T&eacute;l&eacute;phone */}
                  <div className="flex items-start gap-4">
                    <div className="bg-[#bb3b2b] rounded-full p-3 text-cream">
                      <FaPhoneAlt className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#bb3b2b]">T&eacute;l&eacute;phone</h3>
                      <p className="text-gray-700">+229 54 74 56 96</p>
                      <p className="text-gray-700">+229 65 89 32 14</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="bg-[#bb3b2b] rounded-full p-3 text-cream">
                      <FaEnvelope className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#bb3b2b]">Email</h3>
                      <p className="text-gray-700">contact@cafeantoine.bj</p>
                      <p className="text-gray-700">reservation@cafeantoine.bj</p>
                    </div>
                  </div>

                  {/* Horaires */}
                  <div className="flex items-start gap-4">
                    <div className="bg-[#bb3b2b] rounded-full p-3 text-cream">
                      <FaClock className="text-xl text-center" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#bb3b2b]">Horaires d&apos;ouverture</h3>
                      <p className="text-gray-700">Lundi - Vendredi: 13h00 - 00h00</p>
                      <p className="text-gray-700">Samedi - Dimanche: 13h00 - 00h00</p>
                    </div>
                  </div>

                  {/* Suivez-nous */}
                  <div className="pt-4">
                    <h3 className="text-xl font-bold text-[#bb3b2b] mb-3">Suivez-nous</h3>
                    <div className="flex gap-4">
                      <a href="https://www.facebook.com/cafeantoinebenin" className="social-icon w-10 h-10 rounded-full bg-[#bb3b2b] flex items-center justify-center hover:bg-[#903024]" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF className="text-xl text-white" />
                      </a>

                      <a href="https://instagram.com/cafeantoinebenin?igshid=NGExMmI2YTkyZg==" className="social-icon w-10 h-10 rounded-full bg-[#bb3b2b] flex items-center justify-center hover:bg-[#903024]" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-xl text-white" />
                      </a>

                      <a href="https://wa.me/22954745696" className="social-icon w-10 h-10 rounded-full bg-[#bb3b2b] flex items-center justify-center hover:bg-[#903024]" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="text-xl text-white" />
                      </a>

                      <a href="https://www.tiktok.com/@cafeantoine?_t=8dhuz5IFmvm&_r=1" className="social-icon w-10 h-10 rounded-full bg-[#bb3b2b] flex items-center justify-center hover:bg-[#903024]" target="_blank" rel="noopener noreferrer">
                        <FaTiktok className="text-xl text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulaire de contact */}
              <div className="w-full md:w-1/2 bg-cream p-6 rounded-lg">
                <h2 className="text-4xl font-bold text-#bb3b2b font-amatic mb-6">Envoyez-nous un message</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nom" className="block text-gray-700 mb-1">Nom</label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb3b2b]"
                        placeholder="Votre nom"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="prenom" className="block text-gray-700 mb-1">Pr&eacute;nom</label>
                      <input
                        type="text"
                        id="prenom"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb3b2b]"
                        placeholder="Votre pr&eacute;nom"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb3b2b]"
                      placeholder="Votre email"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="telephone" className="block text-gray-700 mb-1">T&eacute;l&eacute;phone</label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb3b2b]"
                      placeholder="Votre t&eacute;l&eacute;phone"
                    />
                  </div>

                  <div>
                    <label htmlFor="sujet" className="block text-gray-700 mb-1">Sujet</label>
                    <select
                      id="sujet"
                      name="sujet"
                      value={formData.sujet}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb3b2b]"
                    >
                      <option value="question">Question g&eacute;n&eacute;rale</option>
                      <option value="reservation">R&eacute;servation</option>
                      <option value="evenement">Organisation d&apos;&eacute;v&eacute;nement</option>
                      <option value="reclamation">R&eacute;clamation</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb3b2b]"
                      placeholder="Votre message"
                      required
                    ></textarea>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="newsletter" className="text-gray-700">Je souhaite m&apos;inscrire &agrave; la newsletter</label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#bb3b2b] hover:bg-[#903024] text-cream font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
                    disabled={status === 'Envoi en cours...'}
                  >
                    {status === 'Envoi en cours...' ? 'Envoi...' : 'Envoyer le message'}
                    <MdSend className="ml-2" />
                  </button>
                  {status && (
                    <p className={`mt-4 text-center ${status.includes('succ&egrave;s') ? 'text-green-600' : 'text-red-600'}`}>
                      {status}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Carte et localisation */}
        <section className="bg-[#bb3b2b] flex items-center justify-center p-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.2801362393534!2d2.3642543740448407!3d6.35777442506896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10235700343f7691%3A0x2574f97dcad1cc8!2sCaf%C3%A9%20Antoine!5e0!3m2!1sfr!2sbj!4v1743547239729!5m2!1sfr!2sbj" // Assurez-vous de remplacer cette URL par l'URL d'int&eacute;gration r&eacute;elle de Google Maps pour votre caf&eacute;
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg max-w-[955px] w-full"
            title="Localisation de Caf&eacute; Antoine"
          ></iframe>
        </section>

        {/* FAQ Section */}
        <section className="bg-[#bb3b2b] py-10">
          <div className="container mx-auto px-4 md:px-10 lg:px-40">
            <h2 className="text-4xl font-bold text-cream font-amatic text-center mb-8">Questions fr&eacute;quentes</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-cream p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#bb3b2b] mb-3">Comment r&eacute;server une table ?</h3>
                <p className="text-gray-700">Vous pouvez r&eacute;server une table par t&eacute;l&eacute;phone au +229 54 74 56 96, par email &agrave; reservation@cafeantoine.bj ou via notre formulaire de contact.</p>
              </div>

              <div className="bg-cream p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#bb3b2b] mb-3">Proposez-vous des options v&eacute;g&eacute;tariennes ?</h3>
                <p className="text-gray-700">Oui, nous proposons plusieurs options v&eacute;g&eacute;tariennes dans notre menu. N&apos;h&eacute;sitez pas &agrave; demander &agrave; notre personnel pour plus de d&eacute;tails.</p>
              </div>

              <div className="bg-cream p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#bb3b2b] mb-3">Peut-on organiser des &eacute;v&eacute;nements priv&eacute;s ?</h3>
                <p className="text-gray-700">Absolument ! Nous proposons des services de restauration pour les &eacute;v&eacute;nements priv&eacute;s et professionnels. Contactez-nous pour discuter de vos besoins sp&eacute;cifiques.</p>
              </div>

              <div className="bg-cream p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#bb3b2b] mb-3">Acceptez-vous les cartes de cr&eacute;dit ?</h3>
                <p className="text-gray-700">Oui, nous acceptons les principales cartes de cr&eacute;dit ainsi que les paiements mobiles comme MTN Mobile Money et Moov Money.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactPage;
import { useState, useEffect } from 'react';
import { Plane, Globe, MapPin, Coffee, Heart, Users, MessageCircle, Clock, Calendar, Monitor, Wifi, ChevronRight, Check, Star, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToEnroll = () => {
    const enrollSection = document.getElementById('enroll');
    enrollSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="/images/bg-image.jpg"
            alt="Travel"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-400/30 rounded-full mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm sm:text-base">Набор открыт!</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
            Английский для <br />
            <span className="bg-gradient-to-r from-cyan-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              путешествий
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана? 
            Этот курс научит вашего ребёнка реальному разговорному английскому!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToEnroll}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 flex items-center gap-2"
            >
              Записаться на курс
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="#program"
              className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-white rounded-xl font-semibold transition-all duration-300 border border-slate-700 backdrop-blur-sm"
            >
              Узнать подробнее
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-cyan-400 rotate-90" />
        </div>
      </header>

      {/* For Whom Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Для кого курс
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-amber-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm hover:shadow-xl hover:shadow-cyan-500/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/30">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Первая группа</h3>
                <p className="text-amber-400 text-xl font-semibold">4–5 класс</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 rounded-2xl border border-amber-500/20 hover:border-amber-400/50 transition-all duration-300 backdrop-blur-sm hover:shadow-xl hover:shadow-amber-500/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-amber-500/30">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Вторая группа</h3>
                <p className="text-cyan-400 text-xl font-semibold">6–8 класс</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Программа курса
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-amber-500 mx-auto mb-6"></div>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Практические навыки для реальных путешествий
            </p>
          </div>

          <div className="space-y-6">
            {/* Module 1 */}
            <div className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-6 md:p-8 rounded-2xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    <Plane className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Аэропорт без стресса</h3>
                  <p className="text-slate-300 mb-2">Регистрация, паспортный контроль, вопросы на таможне — всё на английском.</p>
                  <p className="text-cyan-400 italic">✈️ Уверенность уже в первые часы за границей.</p>
                </div>
              </div>
            </div>

            {/* Module 2 */}
            <div className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-6 md:p-8 rounded-2xl border border-slate-700 hover:border-amber-400/50 transition-all duration-300 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/30">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">В отеле: заселение и помощь</h3>
                  <p className="text-slate-300 mb-2">Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.</p>
                  <p className="text-amber-400 italic">🏨 Практика вежливых фраз и повседневной лексики.</p>
                </div>
              </div>
            </div>

            {/* Module 3 */}
            <div className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-6 md:p-8 rounded-2xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    <Coffee className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Кафе и рестораны</h3>
                  <p className="text-slate-300 mb-2">Заказ еды, вопросы про аллергены, счёт и чаевые.</p>
                  <p className="text-cyan-400 italic">🍽️ Развитие гастрономического словаря и уверенности в общении.</p>
                </div>
              </div>
            </div>

            {/* Module 4 */}
            <div className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-6 md:p-8 rounded-2xl border border-slate-700 hover:border-amber-400/50 transition-all duration-300 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/30">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">На улице: ориентирование и просьбы</h3>
                  <p className="text-slate-300 mb-2">Как спросить дорогу, вызвать такси или найти аптеку.</p>
                  <p className="text-amber-400 italic">🗺️ Понимание устной речи и произношения в реальных ситуациях.</p>
                </div>
              </div>
            </div>

            {/* Module 5 */}
            <div className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-6 md:p-8 rounded-2xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Экстренные случаи</h3>
                  <p className="text-slate-300 mb-2">Потеря вещей, болезнь, помощь полиции — всё это на английском.</p>
                  <p className="text-cyan-400 italic">🚨 Важные фразы, которые могут спасти отпуск.</p>
                </div>
              </div>
            </div>

            {/* Module 6-8 */}
            <div className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-6 md:p-8 rounded-2xl border border-slate-700 hover:border-amber-400/50 transition-all duration-300 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/30">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Туризм и развлечения</h3>
                  <p className="text-slate-300 mb-2">Покупка билетов, экскурсии, общение с гидами, музеи и парки.</p>
                  <p className="text-amber-400 italic">🎭 Погружение в культурный контекст через язык.</p>
                </div>
              </div>
            </div>

            {/* Module 7 */}
            <div className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-6 md:p-8 rounded-2xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Дружба в путешествиях</h3>
                  <p className="text-slate-300 mb-2">Как познакомиться с другими детьми или подростками за границей.</p>
                  <p className="text-cyan-400 italic">👋 Игровая практика диалогов и неформального общения.</p>
                </div>
              </div>
            </div>

            {/* Module 8 */}
            <div className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-6 md:p-8 rounded-2xl border border-slate-700 hover:border-amber-400/50 transition-all duration-300 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/30">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Дипломный проект: «Мой идеальный отпуск»</h3>
                  <p className="text-slate-300 mb-2">Ребёнок планирует воображаемое путешествие и представляет его на английском.</p>
                  <p className="text-amber-400 italic">🎓 Развитие связной речи и творческого самовыражения.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Special Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Почему этот курс особенный?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-amber-500 mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-cyan-400" />
              </div>
              <p className="text-slate-300 leading-relaxed">Акцент на практическую, живую речь, а не на грамматику ради грамматики.</p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 rounded-xl border border-amber-500/20 backdrop-blur-sm">
              <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-amber-400" />
              </div>
              <p className="text-slate-300 leading-relaxed">Все ситуации — из реальной жизни путешественника.</p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-cyan-400" />
              </div>
              <p className="text-slate-300 leading-relaxed">Интерактивные задания: ролевые игры, аудиоситуации, мини-квесты.</p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 rounded-xl border border-amber-500/20 backdrop-blur-sm">
              <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-amber-400" />
              </div>
              <p className="text-slate-300 leading-relaxed">Ребёнок выходит на уровень A2–B1 (Pre-Intermediate) за курс.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Что потребуется
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-amber-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm">
              <Monitor className="w-12 h-12 text-cyan-400 mb-4" />
              <p className="text-slate-300 text-lg">Стационарный компьютер или ноутбук с наушниками и микрофоном</p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm">
              <Wifi className="w-12 h-12 text-amber-400 mb-4" />
              <p className="text-slate-300 text-lg">Стабильный интернет и Zoom</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule and Pricing Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Schedule */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Calendar className="w-8 h-8 text-cyan-400" />
                <h2 className="text-3xl sm:text-4xl font-bold text-white">Расписание</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 rounded-xl border border-cyan-500/30 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-semibold text-lg mb-2">Четверг, 15:00 (МСК)</p>
                      <p className="text-slate-300">Группа 4–5 класс</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 rounded-xl border border-amber-500/30 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-semibold text-lg mb-2">Пятница, 15:30 (МСК)</p>
                      <p className="text-slate-300">Группа 6–8 класс</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Стоимость</h2>
              <div className="space-y-4">
                <div className="relative overflow-hidden bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 p-8 rounded-2xl border border-cyan-400/50 backdrop-blur-sm">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl"></div>
                  <div className="relative">
                    <p className="text-cyan-400 font-semibold mb-2">Полный курс (10 уроков)</p>
                    <p className="text-4xl font-bold text-white mb-2">12 000 ₽</p>
                    <p className="text-slate-300">Лучшее предложение</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 rounded-2xl border border-amber-500/30 backdrop-blur-sm">
                  <p className="text-amber-400 font-semibold mb-2">Абонемент</p>
                  <p className="text-4xl font-bold text-white mb-2">1 300 ₽<span className="text-xl text-slate-400"> / урок</span></p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-8 rounded-2xl border border-amber-400/30 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <Users className="w-12 h-12 text-amber-400 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-white font-semibold text-lg mb-2">Набор открыт!</p>
                <p className="text-slate-300">Группы маленькие — максимум 6 детей, чтобы каждый получил внимание. <span className="text-amber-400 font-semibold">Места ограничены!</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="enroll" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 via-slate-900 to-amber-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Запишитесь сейчас — <br />
            <span className="bg-gradient-to-r from-cyan-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              и следующее путешествие станет первым
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto">
            где ваш ребёнок заговорит по-английски без страха!
          </p>

          <button 
            onClick={() => window.location.href = 'mailto:info@example.com?subject=Запись на курс Английский для путешествий'}
            className="group inline-flex items-center gap-3 px-10 py-6 bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-500 hover:from-cyan-400 hover:via-cyan-500 hover:to-cyan-400 text-white text-xl font-bold rounded-2xl transition-all duration-300 shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-500/60 hover:scale-105 animate-pulse hover:animate-none"
          >
            <Plane className="w-7 h-7" />
            Записаться на курс
            <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>

          <p className="mt-8 text-slate-400 text-sm">
            Нажимая кнопку, вы можете связаться с нами по email или через контактную форму
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-slate-950">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>© 2026 Курс «Английский для путешествий». Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}

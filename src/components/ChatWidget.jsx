import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { base44 } from '@/api/base44Client';
import ReactMarkdown from 'react-markdown';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversation, setConversation] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !conversation) {
      initConversation();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!conversation?.id) return;

    try {
      const unsubscribe = base44.asServiceRole.agents.subscribeToConversation(conversation.id, (data) => {
        setMessages(data.messages || []);
        setIsLoading(false);
      });

      return () => {
        if (unsubscribe) unsubscribe();
      };
    } catch (error) {
      console.error('Failed to subscribe to conversation:', error);
      setIsLoading(false);
    }
  }, [conversation]);

  const initConversation = async () => {
    try {
      const newConversation = await base44.asServiceRole.agents.createConversation({
        agent_name: 'ben',
        metadata: {
          name: 'Website Chat',
          source: 'website_widget',
        },
      });
      setConversation(newConversation);
    } catch (error) {
      console.error('Failed to create conversation:', error);
    }
  };

  const handleSendMessage = async (e) => {
    e?.preventDefault();
    if (!inputValue.trim() || !conversation || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    setIsLoading(true);

    try {
      await base44.asServiceRole.agents.addMessage(conversation, {
        role: 'user',
        content: userMessage,
      });
    } catch (error) {
      console.error('Failed to send message:', error);
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-white hover:bg-gray-50 rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110 group border-2 border-gray-100"
          aria-label="פתח צ'אט"
        >
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6930916a3a9372b61c053eb3/79de2f5a4_Gemini_Generated_Image_ng7ifmng7ifmng7i.png"
            alt="בן"
            className="w-full h-full rounded-full object-cover"
          />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[380px] h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6930916a3a9372b61c053eb3/79de2f5a4_Gemini_Generated_Image_ng7ifmng7ifmng7i.png"
                alt="בן"
                className="w-10 h-10 rounded-full object-cover border-2 border-white/30"
              />
              <div>
                <h3 className="text-white font-semibold">בן</h3>
                <p className="text-white/80 text-xs">מתמחה בייעול והגדלת רווחיות של עסקים בעזרת אוטומציה ובינה מלאכותית</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="סגור צ'אט"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.length === 0 && (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-gray-900 font-semibold mb-2">היי! 👋</h4>
                <p className="text-gray-600 text-sm text-right" dir="rtl">
                  היי אני בן, נעים מאוד!<br />
                  אני כאן כדי לעזור לך להבין איך אוטומציות יכולות להאיץ ולשפר את העסק שלך. יש לך רעיון או צורך בראש שתרצה לבחון?
                </p>
              </div>
            )}
            
            {messages.map((message, index) => (
              <MessageBubble key={index} message={message} />
            ))}
            
            {isLoading && (
              <div className="flex items-center gap-2 text-gray-500">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span className="text-sm">בן מקליד...</span>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="הקלד הודעה..."
                className="flex-1 rounded-full"
                disabled={isLoading || !conversation}
                dir="auto"
              />
              <Button
                type="submit"
                disabled={!inputValue.trim() || isLoading || !conversation}
                className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-4"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

function MessageBubble({ message }) {
  const isUser = message.role === 'user';
  
  // Extract links from message content
  const renderContentWithButtons = (content) => {
    const whatsappRegex = /(https:\/\/wa\.me\/\d+)/g;
    const calendarRegex = /(https:\/\/calendar\.app\.google\/[^\s]+)/g;
    
    const hasWhatsApp = whatsappRegex.test(content);
    const hasCalendar = calendarRegex.test(content);
    
    if (!hasWhatsApp && !hasCalendar) {
      return (
        <ReactMarkdown
          className="text-sm prose prose-sm max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0 text-right"
          components={{
            p: ({ children }) => <p className="my-1 leading-relaxed whitespace-pre-wrap text-right">{children}</p>,
            ul: ({ children }) => <ul className="my-2 mr-4 list-disc text-right">{children}</ul>,
            ol: ({ children }) => <ol className="my-2 mr-4 list-decimal text-right">{children}</ol>,
            li: ({ children }) => <li className="my-0.5">{children}</li>,
            strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
            a: ({ children, href }) => (
              <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                {children}
              </a>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      );
    }
    
    // Extract the text without URLs
    let textContent = content.replace(whatsappRegex, '').replace(calendarRegex, '').trim();
    const whatsappMatch = content.match(whatsappRegex);
    const calendarMatch = content.match(calendarRegex);
    
    return (
      <div className="space-y-3">
        <ReactMarkdown
          className="text-sm prose prose-sm max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0 text-right"
          components={{
            p: ({ children }) => <p className="my-1 leading-relaxed whitespace-pre-wrap text-right">{children}</p>,
            ul: ({ children }) => <ul className="my-2 mr-4 list-disc text-right">{children}</ul>,
            ol: ({ children }) => <ol className="my-2 mr-4 list-decimal text-right">{children}</ol>,
            li: ({ children }) => <li className="my-0.5">{children}</li>,
            strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
          }}
        >
          {textContent}
        </ReactMarkdown>
        
        <div className="flex flex-col gap-2 mt-3">
          {whatsappMatch && (
            <a
              href={whatsappMatch[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-xl font-medium transition-all shadow-sm hover:shadow-md text-sm"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              פתח שיחה בוואטסאפ
            </a>
          )}
          
          {calendarMatch && (
            <a
              href={calendarMatch[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-medium transition-all shadow-sm hover:shadow-md text-sm"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              קבע פגישה ביומן
            </a>
          )}
        </div>
      </div>
    );
  };
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
          isUser
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
            : 'bg-white border border-gray-200 text-gray-900'
        }`}
        dir="rtl"
      >
        {isUser ? (
          <p className="text-sm leading-relaxed whitespace-pre-wrap text-right">{message.content}</p>
        ) : (
          renderContentWithButtons(message.content)
        )}
      </div>
    </div>
  );
}
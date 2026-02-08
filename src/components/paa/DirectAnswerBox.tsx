interface DirectAnswerBoxProps {
  answer: string;
}

export const DirectAnswerBox = ({ answer }: DirectAnswerBoxProps) => (
  <div className="text-lg md:text-xl font-semibold leading-relaxed p-6 bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white rounded-xl my-5 shadow-[0_4px_15px_rgba(102,126,234,0.4)]">
    {answer}
  </div>
);

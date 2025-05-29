type SkillsProps = {
  isHome?: boolean;
};

export default function SkillsSection({ isHome = false }: SkillsProps) {
  return (
    <div className={isHome ? "section-outer" : "section-outer section-outer--page"}>
      <div className="page-box">
        <h2 className="section-title">Skills</h2>
        {/* Add preview or full skills content here based on isHome */}
      </div>
    </div>
  );
}
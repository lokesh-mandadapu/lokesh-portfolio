const learningFlow = [
  { label: 'Programming', nodes: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'C#'] },
  { label: 'DSA', nodes: ['Problem Solving'] },
  { label: 'Core CS', nodes: ['OOP', 'DBMS', 'OS', 'Networks', 'Software Engineering'] },
  { label: 'Backend', nodes: ['Node.js', 'Express', 'REST APIs'] },
  { label: 'Java Backend', nodes: ['Spring Boot', 'Maven', 'Hibernate / JPA'] },
  { label: 'Databases', nodes: ['MongoDB', 'PostgreSQL', 'MySQL'] },
  { label: 'AI / GenAI', nodes: ['LLMs', 'Prompt Engineering', 'RAG', 'Agents', 'Multimodal AI'] },
  { label: 'Projects', nodes: ['FinSight', 'SPYDER', 'BookMyShow', 'AIML Seamless Cinema'] }
]

function LearningJourney() {
  return (
    <div className="learning-flow">
      {learningFlow.map((group, index) => (
        <div key={group.label} className="learning-column">
          <div className="flow-label">{group.label}</div>
          <div className="flow-branch">
            {group.nodes.map((node) => (
              <span key={`${group.label}-${node}`} className="flow-node">{node}</span>
            ))}
          </div>
          {index < learningFlow.length - 1 && <div className="flow-arrow">↓</div>}
        </div>
      ))}
    </div>
  )
}

export default LearningJourney

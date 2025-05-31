const { default: OpenAI } = require('openai');
const { config } = require('../config/config');

const OPENAI_API_KEY = config.OPENAI_API_KEY;
const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: OPENAI_API_KEY,
});
const generateQuestions = async (
  role,
  domain,
  experienceLevel,
  preferredCandidateProfile,
  companyName,
  jobProfileDescription,
  technicalDifficulty,
  behavioralDifficulty,
  situationalDifficulty,
  generalDifficulty
) => {
  try {
    const prompt = `You are a senior interviewer simulating a mock interview for the position of ${role} in the ${domain} domain. The interview is intended for a ${experienceLevel}-level candidate. The entire question set should be inspired by the following detailed candidate profile:

        **Preferred Candidate Profile:**
        "${preferredCandidateProfile}"

        Use this profile to derive relevant technical, behavioral, situational, and general questions that evaluate the candidate’s fitness for the role. Avoid referencing any specific programming languages or tools unless implied by the profile or job description.

        **Interview Context:**
        - Role: ${role}
        - Company: ${companyName || 'A modern tech-driven organization'}
        - Job Description: "${jobProfileDescription}"
        - Technical Difficulty: ${technicalDifficulty}
        - Behavioral Difficulty: ${behavioralDifficulty}
        - Situational Difficulty: ${situationalDifficulty}
        - General Difficulty: ${generalDifficulty}

        **Guidelines for Questions:**
        1. Generate 8–10 unique questions total.
        2. Cover each type:
        - **Technical** (3–4): Based on problem-solving ability, system thinking, or domain-relevant expertise reflected in the profile.
        - **Behavioral** (2–3): Focus on culture fit, leadership, communication, and collaboration styles derived from the profile.
        - **Situational** (1–2): Pose complex, realistic work situations aligned with the profile’s expected responsibilities or mindset.
        - **General** (1–2): Broader insights into the candidate's motivations, awareness of trends, or approach to growth.

        **Output Format (JSON Array):**
        Each item must contain:
        - questionText: The question string
        - questionType: One of ['technical', 'behavioral', 'situational', 'general']

        Ensure the tone is structured, professional, and deeply aligned with the values and traits in the preferred candidate profile. Do not include any instructions or headings in the output.
        `;
    const completion = await openai.chat.completions.create({
      model: 'google/gemini-2.0-flash-exp:free',
      messages: [{ role: 'user', content: [{ text: prompt }] }],
    });
    console.log(completion);
  } catch (error) {
    console.error('Error generating questions:', error);
    throw error;
  }
};

const evaluateInterview = async () => {
  try {
    const prompt = `
        `;
  } catch (error) {
    console.error('Error generating questions:', error);
    throw error;
  }
};

module.exports = { generateQuestions };
